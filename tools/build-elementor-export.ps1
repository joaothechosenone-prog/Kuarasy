$ErrorActionPreference = 'Stop'

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourceRoot = Join-Path $projectRoot 'wordpress-site'
$exportRoot = Join-Path $projectRoot 'entrega-wordpress-elementor'

$pages = [ordered]@{
  'inicio'       = 'index.html'
  'servicos'     = 'servicos\index.html'
  'acomodacoes'  = 'acomodacoes\index.html'
  'mhares'       = 'mhares\index.html'
  'eventos'      = 'eventos\index.html'
  'contato'      = 'contato\index.html'
}

$mediaNotes = @{
  'hero-inicio.webm'          = 'vídeo de fundo da 1ª seção da página Início'
  'hero-servicos.webm'        = 'vídeo de fundo da 1ª seção da página Serviços'
  'hero-acomodacoes.webm'     = 'vídeo de fundo da 1ª seção da página Acomodações'
  'hero-mhares.webm'          = 'vídeo de fundo da 1ª seção da página Mhares'
  'mhares-experiencia.webm'   = 'vídeo de fundo da seção de experiência da página Mhares'
  'hero-eventos.webm'         = 'vídeo de fundo da 1ª seção da página Eventos'
  'bungalow-hammock.jpeg'     = 'foto do bangalô com rede'
  'bungalows-aerial.jpeg'     = 'foto aérea dos bangalôs'
  'bungalow-interior.jpeg'    = 'foto interna da acomodação'
  'restaurant.jpeg'           = 'foto do Restaurante Mhares'
  'beach-sunset.jpeg'         = 'foto da praia ao pôr do sol'
  'pool-ocean.jpeg'           = 'foto da piscina e do mar'
  'dish.jpeg'                 = 'foto de prato do Restaurante Mhares'
  'sunset-palms.jpeg'         = 'foto do pôr do sol com coqueiros'
  'entrance-night.jpeg'       = 'foto da entrada da pousada à noite'
  'cocktail.jpeg'             = 'foto de drink do Restaurante Mhares'
  'wedding.jpeg'              = 'foto de casamento/evento'
  'event-aniversario.svg'     = 'ícone de aniversário'
  'event-casamento.svg'       = 'ícone de casamento'
  'event-celebracoes.svg'     = 'ícone de celebrações entre familiares e amigos'
  'event-reunioes.svg'        = 'ícone de reuniões e confraternizações'
}

function Add-MediaNotes([string]$html) {
  foreach ($fileName in $mediaNotes.Keys) {
    $escapedName = [Regex]::Escape($fileName)
    $note = "<!-- WORDPRESS: substitua o caminho abaixo pela URL da Biblioteca de Mídia para: $($mediaNotes[$fileName]). -->"
    $pattern = '(<(?:source|img)\b[^>]*(?:src|srcset)=[''"][^''"]*{0}[^>]*>)' -f $escapedName
    $html = [Regex]::Replace($html, $pattern, { param($match) "$note`r`n$($match.Groups[1].Value)" })
  }
  return $html
}

foreach ($pageName in $pages.Keys) {
  $sourcePath = Join-Path $sourceRoot $pages[$pageName]
  $document = Get-Content -LiteralPath $sourcePath -Raw -Encoding UTF8
  $match = [Regex]::Match($document, '(?s)<main>.*?</main>')
  if (-not $match.Success) { throw "Elemento <main> não encontrado em $sourcePath" }
  $mainMarkup = $match.Value
  if ($pageName -eq 'inicio') {
    $mainMarkup = "<div class=`"home-page`">`r`n$mainMarkup`r`n</div>"
  }
  $pageHtml = @"
<!--
  PÁGINA: $pageName
  Cole todo este bloco em um widget HTML do Elementor.
  O header e o footer são globais e estão na pasta componentes.
  Não altere a copy; substitua somente URLs indicadas pelos comentários WORDPRESS.
-->
$mainMarkup
"@
  $pageHtml = Add-MediaNotes $pageHtml
  $destination = Join-Path $exportRoot "paginas\$pageName.html"
  [System.IO.File]::WriteAllText($destination, $pageHtml, [System.Text.UTF8Encoding]::new($false))
}
