param(
    [string]$InputPath = (Join-Path $PSScriptRoot 'landing-copy.md'),
    [string]$OutputPath = (Join-Path $PSScriptRoot 'landing-copy.docx')
)

$ErrorActionPreference = 'Stop'

$lines = Get-Content -Path $InputPath -Encoding UTF8

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$selection = $word.Selection

# wdSaveFormat: docx default = 16
$wdFormatDocumentDefault = 16

# Built-in style constants (WdBuiltinStyle)
$wdStyleNormal = -1
$wdStyleHeading1 = -2
$wdStyleHeading2 = -3
$wdStyleHeading3 = -4
$wdStyleHeading4 = -5
$wdStyleListBullet = -50

function Set-ParaStyle($styleId) {
    try { $selection.Style = $styleId } catch { }
}

function Reset-Inline {
    $selection.Font.Bold = 0
    $selection.Font.Italic = 0
    $selection.Font.StrikeThrough = 0
    $selection.Font.Name = 'Calibri'
}

function Write-Inline([string]$text) {
    Reset-Inline
    $i = 0
    $bold = $false
    $strike = $false
    $italic = $false
    $code = $false
    $buf = ''

    while ($i -lt $text.Length) {
        $two = if ($i + 1 -lt $text.Length) { $text.Substring($i, 2) } else { '' }
        $ch = $text[$i]

        if ($two -eq '**') {
            if ($buf.Length -gt 0) {
                $selection.Font.Bold = if ($bold) { 1 } else { 0 }
                $selection.Font.StrikeThrough = if ($strike) { 1 } else { 0 }
                $selection.Font.Italic = if ($italic) { 1 } else { 0 }
                $selection.Font.Name = if ($code) { 'Consolas' } else { 'Calibri' }
                $selection.TypeText($buf); $buf = ''
            }
            $bold = -not $bold; $i += 2; continue
        }
        if ($two -eq '~~') {
            if ($buf.Length -gt 0) {
                $selection.Font.Bold = if ($bold) { 1 } else { 0 }
                $selection.Font.StrikeThrough = if ($strike) { 1 } else { 0 }
                $selection.Font.Italic = if ($italic) { 1 } else { 0 }
                $selection.Font.Name = if ($code) { 'Consolas' } else { 'Calibri' }
                $selection.TypeText($buf); $buf = ''
            }
            $strike = -not $strike; $i += 2; continue
        }
        if ($ch -eq '`') {
            if ($buf.Length -gt 0) {
                $selection.Font.Bold = if ($bold) { 1 } else { 0 }
                $selection.Font.StrikeThrough = if ($strike) { 1 } else { 0 }
                $selection.Font.Italic = if ($italic) { 1 } else { 0 }
                $selection.Font.Name = if ($code) { 'Consolas' } else { 'Calibri' }
                $selection.TypeText($buf); $buf = ''
            }
            $code = -not $code; $i++; continue
        }
        if ($ch -eq '*') {
            if ($buf.Length -gt 0) {
                $selection.Font.Bold = if ($bold) { 1 } else { 0 }
                $selection.Font.StrikeThrough = if ($strike) { 1 } else { 0 }
                $selection.Font.Italic = if ($italic) { 1 } else { 0 }
                $selection.Font.Name = if ($code) { 'Consolas' } else { 'Calibri' }
                $selection.TypeText($buf); $buf = ''
            }
            $italic = -not $italic; $i++; continue
        }
        $buf += $ch; $i++
    }
    if ($buf.Length -gt 0) {
        $selection.Font.Bold = if ($bold) { 1 } else { 0 }
        $selection.Font.StrikeThrough = if ($strike) { 1 } else { 0 }
        $selection.Font.Italic = if ($italic) { 1 } else { 0 }
        $selection.Font.Name = if ($code) { 'Consolas' } else { 'Calibri' }
        $selection.TypeText($buf)
    }
    Reset-Inline
}

function Write-Table([System.Collections.ArrayList]$tableLines) {
    if ($tableLines.Count -lt 2) { return }
    $rows = @()
    foreach ($l in $tableLines) {
        $trim = $l.Trim()
        if ($trim.StartsWith('|')) { $trim = $trim.Substring(1) }
        if ($trim.EndsWith('|')) { $trim = $trim.Substring(0, $trim.Length - 1) }
        $cells = $trim -split '\|' | ForEach-Object { $_.Trim() }
        $rows += , $cells
    }
    $dataRows = @()
    foreach ($r in $rows) {
        $isSep = $true
        foreach ($c in $r) {
            if ($c -notmatch '^[:\-\s]+$') { $isSep = $false; break }
        }
        if (-not $isSep) { $dataRows += , $r }
    }
    if ($dataRows.Count -eq 0) { return }
    $colCount = ($dataRows | ForEach-Object { $_.Count } | Measure-Object -Maximum).Maximum
    $rowCount = $dataRows.Count

    $range = $selection.Range
    $table = $doc.Tables.Add($range, $rowCount, $colCount)
    $table.Borders.Enable = 1

    for ($r = 0; $r -lt $rowCount; $r++) {
        for ($c = 0; $c -lt $colCount; $c++) {
            $cellText = if ($c -lt $dataRows[$r].Count) { $dataRows[$r][$c] } else { '' }
            # Strip bold markers from header — header is bolded by row style
            $cell = $table.Cell($r + 1, $c + 1)
            $cell.Range.Text = ''
            $cell.Range.Select()
            $sel = $word.Selection
            if ($r -eq 0) {
                $sel.Font.Bold = 1
                $cell.Shading.BackgroundPatternColor = 15921906
            } else {
                $sel.Font.Bold = 0
            }
            # Inline parsing for cell
            $i = 0; $b = ($r -eq 0); $s = $false; $it = $false; $buf = ''
            while ($i -lt $cellText.Length) {
                $two = if ($i + 1 -lt $cellText.Length) { $cellText.Substring($i, 2) } else { '' }
                $chx = $cellText[$i]
                if ($two -eq '**') {
                    if ($buf.Length -gt 0) {
                        $sel.Font.Bold = if ($b) { 1 } else { 0 }
                        $sel.Font.StrikeThrough = if ($s) { 1 } else { 0 }
                        $sel.Font.Italic = if ($it) { 1 } else { 0 }
                        $sel.TypeText($buf); $buf = ''
                    }
                    $b = -not $b; $i += 2; continue
                }
                if ($two -eq '~~') {
                    if ($buf.Length -gt 0) {
                        $sel.Font.Bold = if ($b) { 1 } else { 0 }
                        $sel.Font.StrikeThrough = if ($s) { 1 } else { 0 }
                        $sel.Font.Italic = if ($it) { 1 } else { 0 }
                        $sel.TypeText($buf); $buf = ''
                    }
                    $s = -not $s; $i += 2; continue
                }
                $buf += $chx; $i++
            }
            if ($buf.Length -gt 0) {
                $sel.Font.Bold = if ($b) { 1 } else { 0 }
                $sel.Font.StrikeThrough = if ($s) { 1 } else { 0 }
                $sel.Font.Italic = if ($it) { 1 } else { 0 }
                $sel.TypeText($buf)
            }
        }
    }

    $endRange = $doc.Range($table.Range.End, $table.Range.End)
    $endRange.Select()
    $selection.TypeParagraph()
    Reset-Inline
    Set-ParaStyle $wdStyleNormal
}

$pendingTable = New-Object System.Collections.ArrayList
$inTable = $false

function Flush-Table {
    if ($script:inTable -and $script:pendingTable.Count -gt 0) {
        Write-Table $script:pendingTable
        $script:pendingTable.Clear()
        $script:inTable = $false
    }
}

foreach ($raw in $lines) {
    $line = $raw

    if ($line.TrimStart().StartsWith('|') -and $line.TrimEnd().EndsWith('|')) {
        $pendingTable.Add($line) | Out-Null
        $inTable = $true
        continue
    } else {
        if ($inTable) { Flush-Table }
    }

    if ([string]::IsNullOrWhiteSpace($line)) {
        $selection.TypeParagraph()
        continue
    }

    if ($line.Trim() -eq '---') {
        Set-ParaStyle $wdStyleNormal
        try { $selection.InsertHorizontalLine() } catch { $selection.TypeText('────────────────────────────') }
        $selection.TypeParagraph()
        continue
    }

    if ($line -match '^####\s+(.+)$') {
        Set-ParaStyle $wdStyleHeading4
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        Set-ParaStyle $wdStyleNormal
        continue
    }
    if ($line -match '^###\s+(.+)$') {
        Set-ParaStyle $wdStyleHeading3
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        Set-ParaStyle $wdStyleNormal
        continue
    }
    if ($line -match '^##\s+(.+)$') {
        Set-ParaStyle $wdStyleHeading2
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        Set-ParaStyle $wdStyleNormal
        continue
    }
    if ($line -match '^#\s+(.+)$') {
        Set-ParaStyle $wdStyleHeading1
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        Set-ParaStyle $wdStyleNormal
        continue
    }

    if ($line -match '^>\s?(.*)$') {
        Set-ParaStyle $wdStyleNormal
        $selection.Font.Italic = 1
        $selection.ParagraphFormat.LeftIndent = 24
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        $selection.ParagraphFormat.LeftIndent = 0
        $selection.Font.Italic = 0
        continue
    }

    if ($line -match '^\s*[-*]\s+(.+)$') {
        Set-ParaStyle $wdStyleListBullet
        Write-Inline $matches[1]
        $selection.TypeParagraph()
        Set-ParaStyle $wdStyleNormal
        continue
    }

    Set-ParaStyle $wdStyleNormal
    Write-Inline $line
    $selection.TypeParagraph()
}

Flush-Table

if (Test-Path $OutputPath) { Remove-Item $OutputPath -Force }
$doc.SaveAs([ref]$OutputPath, [ref]$wdFormatDocumentDefault)
$doc.Close()
$word.Quit()

[System.Runtime.InteropServices.Marshal]::ReleaseComObject($selection) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($doc) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
[GC]::Collect(); [GC]::WaitForPendingFinalizers()

Write-Output "Saved: $OutputPath"
