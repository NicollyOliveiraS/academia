Sobre o Projeto
O GreenFit é uma interface web front-end projetada para ser exibida em tablets ou totens de autoatendimento. O foco principal é a experiência do usuário (UX) e a responsividade, garantindo que o teclado numérico seja fácil de usar em qualquer tamanho de tela.

Principais Funcionalidades:
Teclado Numérico Dinâmico: Gerado via JavaScript para facilitar a manutenção.

Formatação de CPF em Tempo Real: Máscara automática (000.000.000-00) enquanto o usuário digita.

Integração com API: Consulta de status de acesso e nome do aluno em servidor externo.

Feedback Visual: Cores dinâmicas no display indicando progresso, sucesso ou erro de acesso.

Design Premium: Interface escura (Dark Mode) com efeitos de vidro (Glassmorphism) e sombras suaves.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica e acessível.

CSS3: Estilização avançada com Flexbox, Grid, Variáveis e Media Queries.

JavaScript (Vanilla): Lógica de manipulação de DOM, eventos e chamadas Assíncronas (Fetch API).

Excalidraw: Utilizado para o planejamento do wireframe e arquitetura visual.

📂 Estrutura de Arquivos
index.html: Estrutura principal da página.

style.css: Estilos, animações e regras de responsividade.

script.js: Lógica do teclado, formatação e comunicação com a API.

wireframe.excalidraw: Documentação visual do layout inicial.

🚀 Como Executar
Clone o repositório ou baixe os arquivos.

Configuração da API:
No arquivo script.js, localize a variável API_BASE_URL e substitua pelo endereço do seu servidor:

JavaScript
const API_BASE_URL = "https://sua-api.com";
Abrir o Projeto:
Abra o arquivo index.html em qualquer navegador moderno.

📱 Responsividade
O projeto foi construído com a técnica de Mobile-First e utiliza clamp() para fontes e min() para imagens, garantindo que a interface se ajuste perfeitamente em:

Smartphones pequenos (360px+)

Tablets (Modo Retrato e Paisagem)

Monitores Desktop

Autora:
Nicolly Oliveira - Desenvolvedora Front-end
Email: Nicolly.oliveira.senai@gmail.com


Link da vercel do projeto: https://greenfit-five.vercel.app

API:
Vercel: https://academia-limpo.vercel.app/
GitHub: https://github.com/GitAnaClaraMendes399

📝 Notas de Versão
Versão Atual: 1.0 (2026)

Status: Operacional

Licença: GreenFit · Acesso Seguro

Desenvolvido para proporcionar agilidade e segurança no acesso fitness.