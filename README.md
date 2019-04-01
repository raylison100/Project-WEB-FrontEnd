# ProjectWEBFronEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Docker

#Construindo Imagem e rodando a imagem (EXECUTAR UMA VEZ)

docker-compose up -d --build

#Startando container(Usar quando ja tiver a imagem criada)

docker-compose up -d

#parando container

docker-compose stop

#Util

- parando todos os containers // com a opção -q eu listo apenas o ID do container

$ docker stop $(docker ps -a -q)

- removendo todos os containers // com a opção -q eu listo apenas o ID do container
$ docker rm $(docker ps -a -q)

 - Depois de todos os containers parados eu posso então remover todas as imagens utilizando um comando parecido com o utilizado para parar os containers

$ docker rmi $(docker images -q)