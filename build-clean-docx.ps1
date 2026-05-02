$ErrorActionPreference = 'Stop'
$InputPath = "d:\GitHub\offer_EXPERT\landing-clean.txt"
$OutputPath = "d:\GitHub\offer_EXPERT\landing-text.docx"

$lines = Get-Content -Path $InputPath -Encoding UTF8

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$doc = $word.Documents.Add()
$sel = $word.Selection

$wdFormatDocumentDefault = 16
$H1 = -2; $H2 = -3; $H3 = -4; $NORMAL = -1; $BULLET = -50

foreach ($line in $lines) {
    if ([string]::IsNullOrWhiteSpace($line)) {
        $sel.Style = $NORMAL
        $sel.TypeParagraph()
        continue
    }
    if ($line -match '^###\s+(.+)$') {
        $sel.Style = $H3
        $sel.TypeText($matches[1])
        $sel.TypeParagraph()
        $sel.Style = $NORMAL
        continue
    }
    if ($line -match '^##\s+(.+)$') {
        $sel.Style = $H2
        $sel.TypeText($matches[1])
        $sel.TypeParagraph()
        $sel.Style = $NORMAL
        continue
    }
    if ($line -match '^#\s+(.+)$') {
        $sel.Style = $H1
        $sel.TypeText($matches[1])
        $sel.TypeParagraph()
        $sel.Style = $NORMAL
        continue
    }
    if ($line -match '^-\s+(.+)$') {
        $sel.Style = $BULLET
        $sel.TypeText($matches[1])
        $sel.TypeParagraph()
        $sel.Style = $NORMAL
        continue
    }
    $sel.Style = $NORMAL
    $sel.TypeText($line)
    $sel.TypeParagraph()
}

if (Test-Path $OutputPath) { Remove-Item $OutputPath -Force }
$doc.SaveAs([ref]$OutputPath, [ref]$wdFormatDocumentDefault)
$doc.Close()
$word.Quit()

[System.Runtime.InteropServices.Marshal]::ReleaseComObject($sel) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($doc) | Out-Null
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null
[GC]::Collect(); [GC]::WaitForPendingFinalizers()

Write-Output "Saved: $OutputPath"
