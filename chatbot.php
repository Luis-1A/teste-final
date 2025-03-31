<?php
$faq = [
  // Câmeras de Segurança (CFTV)
  "o que é cftv?" => "CFTV significa Circuito Fechado de Televisão. É um sistema de vigilância que usa câmeras para monitorar áreas específicas.",
  "quais são os benefícios do cftv?" => "Os benefícios incluem monitoramento 24/7, dissuasão de crimes e evidências em caso de incidentes.",
  "como funciona o cftv?" => "Câmeras capturam imagens e vídeos que podem ser monitorados em tempo real ou gravados.",
  "quais tipos de câmeras vocês oferecem?" => "Temos câmeras dome, bullet, PTZ e IP, dependendo da sua necessidade.",

  // Alarmes
  "quais tipos de alarmes vocês têm?" => "Oferecemos alarmes residenciais, comerciais e industriais, com opções de sensores variados.",
  "como funciona um alarme?" => "Os alarmes detectam intrusões ou eventos e emitem alertas sonoros ou notificações remotas.",
  "posso integrar o alarme com outros sistemas?" => "Sim, nossos alarmes podem ser integrados com CFTV e controle de acesso.",

  // Controle de Acesso
  "o que é controle de acesso?" => "É um sistema que gerencia quem pode entrar ou sair de um local, usando senhas, cartões ou biometria.",
  "quais opções de controle  de controle de acesso vocês têm?" => "Temos leitores biométricos, cartões RFID e teclados numéricos.",
  "posso personalizar o controle de acesso?" => "Sim, adaptamos o sistema às suas necessidades específicas.",

  // Monitoramento Remoto
  "o que é monitoramento remoto?" => "É o acompanhamento em tempo real de sistemas de segurança via internet ou aplicativo.",
  "como funciona o monitoramento remoto?" => "Câmeras e sensores enviam dados para uma central ou dispositivo móvel.",
  "quais os benefícios do monitoramento remoto?" => "Acesso 24/7, alertas instantâneos e maior controle.",

  // Cercas Elétricas
  "o que são cercas elétricas?" => "São barreiras de segurança que emitem pulsos elétricos para deter invasores.",
  "quais os benefícios das cercas elétricas?" => "Alta proteção perimetral e baixa manutenção.",
  "como instalar cercas elétricas?" => "Nossa equipe faz a instalação seguindo normas de segurança.",

  // Concertinas
  "o que são concertinas?" => "São arames cortantes usados para proteção de muros e cercas.",
  "quais tipos de concertinas vocês têm?" => "Temos concertinas simples, duplas e reforçadas.",
  "como instalar concertinas?" => "Fazemos a instalação com segurança e precisão.",

  // Sensores de Movimento
  "o que são sensores de movimento?" => "São dispositivos que detectam presença ou movimento em uma área.",
  "como funcionam os sensores de movimento?" => "Eles usam infravermelho ou ultrassom para identificar mudanças no ambiente.",
  "quais os benefícios dos sensores?" => "Aumentam a segurança e podem acionar alarmes ou luzes.",

  // Automação Residencial/Comercial
  "o que é automação?" => "É o controle de dispositivos como luzes, portas e câmeras por aplicativos ou comandos.",
  "quais os benefícios da automação?" => "Conforto, economia de energia e integração com segurança.",
  "posso integrar automação com segurança?" => "Sim, unificamos câmeras, alarmes e mais em um só sistema.",

  // Consultoria e Projetos de Segurança
  "o que é consultoria de segurança?" => "É um serviço para avaliar e planejar a segurança do seu imóvel.",
  "quais serviços de consultoria vocês oferecem?" => "Análise de riscos, projetos personalizados e recomendações.",
  "como solicitar uma consultoria?" => "Entre em contato pelo site ou telefone para agendar.",

  // Instalação e Manutenção
  "como funciona a instalação?" => "Nossa equipe instala os sistemas com rapidez e qualidade.",
  "quais serviços de manutenção vocês oferecem?" => "Revisões, reparos e atualizações de equipamentos.",
  "como agendar uma manutenção?" => "Basta nos contatar por telefone ou e-mail."
];

if (isset($_GET['question'])) {
  $question = strtolower(trim($_GET['question']));
  foreach ($faq as $q => $a) {
    if (strpos(strtolower($q), $question) !== false || strpos($question, strtolower($q)) !== false) {
      echo $a;
      exit;
    }
  }
  echo "Desculpe, não entendi sua pergunta. Tente ser mais específico!";
}
?>