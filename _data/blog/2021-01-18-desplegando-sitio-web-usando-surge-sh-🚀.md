---
template: BlogPost
path: deploy-surge
date: 2021-01-18T18:20:55.681Z
title: Desplegando sitio web usando Surge.sh 🚀
metaDescription: Como desplegar un sitio web usando Surge
thumbnail: /assets/captura-de-pantalla-2021-01-18-130143.png
---
## Primeros pasos

Primeramente necesitamos tener instalado [NodeJs](https://nodejs.org/) para poder usar el manejador de paquetes [npm](https://www.npmjs.com/) y instalar el paquete de surge de forma global

Para instalarlo ejecutamos el comando` npm install --global surge `o de también forma simple `npm i -g surge`

## Desplegar a Surge 🐱‍🏍

Ejecutar `surge `desde cualquier directorio, para publicar ese directorio en la web. 

Si es tu primera vez podrás crear una cuenta directamente desde la línea de comandos, luego implementar y alojar tu sitio de forma gratuita en Surge.

![Deplegando website a Surge](/assets/captura.png "Deplegando website a Surge")

Puedes usar Surge para desplegar tus proyectos usando **React**, **Vue** y **Angular**.

Si realizas algún cambio y quieres desplegarlo ejecutando `--domain` y especificar el dominio.

```
surge --domain successful-cork.surge.sh
```

## Forzar a utilizar HTTPS

Todos los proyectos publicados en Surge reciben soporte SSL básico y gratuito. 

Si tu proyecto es http://my-project.surge.sh, https://my-project.surge.sh también funcionará. Para que la versión http:// siempre se redirija a la versión https://, publica tu proyecto en la URL https:// explícitamente:

```
surge --domain https://my-project.surge.sh
```

## Dar de baja a un proyecto publicado

A veces, ya no deseas que un proyecto se publique en un dominio o subdominio particular. Para lograr esto, puede desmontar un proyecto a través de Surge CLI. Esto efectivamente desconectará el proyecto.

Ejecute `surge `especificando el dominio que ya no desea utilizar. Por ejemplo, si su dominio no deseado fuera my-project.surge.sh, ejecutarías:

```sh
surge teardown my-project.surge.sh
```

## Guarda tu dominio en un archivo CNAME

También puedes guardar tu dominio en un archivo CNAME para que no tengas que escribirlo en la CLI. Agrega un archivo CNAME (sin extensión) a la raíz del proyecto que estás implementando y Surge lo usará automáticamente. Puedes crear un nuevo archivo CNAME en el editor de texto de tu elección o también puedes hacerlo directamente desde la CLI y añadir en el archivo el dominio.