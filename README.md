# Proyecto de Prueba NodeJS-Typescript,  React-Typescript, Mysql y Docker  

## Dar permisos a los comandos  

Para iniciar la ejecución de docker-compose se debe otorgar permisos a los archivos

```shell copyable
chmod +x docker.start.sh
chmod +x docker.stop.sh
chmod +x docker.build.sh
```

## Copiar las variables de entorno

```shell copyable
    cp .env.example .env
```

## Ejecutar los servicios  

Para iniciar construir las imagenes e iniciar los contenedor ejecutar:

```shell copyable
./docker.build.sh
```

Para iniciar los contenedor ejecutar:

```shell copyable
./docker.start.sh
```

Para detener los contenedor ejecutar:

```shell copyable
./docker.stop.sh
```
