# Projeto Final de Redes de Computadores 2 no Semestre 2025/01, UFMT.

## Proposta

Implementar um servidor de streaming de multimídia capaz de fornecer ao cliente uma mídia com qualidade e em tempo real. 

## Stack utilizada

Este projeto utiliza um servidor de páginas [NGINX](https://nginx.org/) construídas com o framework [Vite](https://vite.dev/) de JavaScript, sendo, ambos, executados em contêineres Docker. Para possibilitar o streaming aos clientes, foi escolhido o protocolo [HTTP live streaming — HLS](https://www.cloudflare.com/pt-br/learning/video/what-is-http-live-streaming/).

## Como executar o projeto

Antes de mais nada, é necessário possuir o Docker, git e o Node Package Manager instalados na máquina que executará o projeto.

De posse destas ferramentas, o passo-a-passo deve ser seguido:

Abra o terminal no diretório desejado para armazenar o projeto e execute:
```bash
git clone https://github.com/gabriel-soares-coding/redesii-projeto-final-streaming-multimidia.git

cd redesii-projeto-final-streaming-multimidia

# Para criar as pastas que armazenarão os arquivos de saída
mkdir hls assets/video

# Executar com o nome do arquivo que se deseja converter
ffmpeg -i .\assets\video\<nome-do-video-a-ser-convertido>.mp4 -profile:v baseline -level 3.0 -start_number 0 -hls_time 4 -hls_list_size 0 -f hls .\hls\stream.m3u8

cd frontend

npm install

npm run build

cd ..

docker compose up -d --build
```

Depois que os contêineres forem inicializados, abra o navegador em [http://localhost:8080/](http://localhost:8080/) e navegue pela barra de navegação superior para "Streaming".

Lá você encontrará o player com o vídeo sendo reproduzido.

## Alterar o vídeo inserido

Para alterar o vídeo reproduzido, é necessário executar novamente o ffmpeg com o novo vídeo desejado.
