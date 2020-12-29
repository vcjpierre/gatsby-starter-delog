---
template: BlogPost
path: /nextjs-pwa
date: 2020-12-29T19:14:59.428Z
title: "Aplicaciones Web Progresivas usando Next.js ⚡️\U0001F4F1"
metaDescription: "Next.js + PWA = ⚡️\U0001F4F1"
thumbnail: /assets/4b1604a0-2259-11eb-a671-bd67054320f0-pexels-rodrigo-santos-3888149.jpg
---
1. Primeros pasos\
Vamos a crear un proyecto de Next.js usando create-next-app ejecutando este comando:

```
npx create-next-app
```

Luego puedes abrir la carpeta del proyecto en tu editor de texto.

2. Instalar el paquete next-pwa\
Añadamos el siguiente paquete de next-pwa a nuestro proyecto. Correr:

```
npm install next-pwa
```

O si usamos yarn :

```
yarn add next-pwa
```

3. Crear el archivo next.config.js

Creamos el archivo e incluimos todas nuestras configuraciones para nuestra PWA. Aquí hay un ejemplo next.config.js que te ayudará a empezar:

```javascript
const withPWA = require('next-pwa')
module.exports = withPWA({
   pwa: {
    dest: 'public'
   }
})
```

Fíjate que hemos añadido la configuración PWA dentro de **withPWA**. En versiones anteriores de Next, usar **[service worker](https://developers.google.com/web/fundamentals/primers/service-workers?hl=es)** requiere un servidor personalizado. Pero desde Next 9+, esto no es necesario. ¡Ahora es mucho más fácil! next-pwa creará el archivo sw.js y este archivo será servido desde la carpeta pública en la construcción de producción.

4. Crear el archivo manifest.json\
Puedes crear un archivo manifest.json desde esta herramienta online. Asegúrate de generar los iconos también desde esta herramienta. Los necesitaremos.

[Web App Manifest Generator](https://app-manifest.firebaseapp.com/)

Tendrás una descarga .zip. Descomprímela. Copia el manifest.json de su carpeta de descargas a tu carpeta /public.\
Y copia el contenido de /images de la carpeta de descargas, a la carpeta /public de su proyecto.

5. Crear las meta etiquetas\
Necesitamos crear un conjunto de meta etiquetas y añadirlas a nuestras páginas usando el componente <Head> importado de next/head. Puedes utilizar este repositorio para las etiquetas meta requeridas:

[Awesome Meta Tags & Manifest Properties](https://github.com/gokulkrishh/awesome-meta-and-manifest)

Aquí hay un ejemplo de las meta etiquetas requeridas:

```html
<meta charset='utf-8'/> 
<meta http-equiv='X-UA-Compatible' content='IE=edge'/> 
<meta name='viewport' content='width=device-width,initial-scale=1,
minimum-scale=1,maximum-scale=1,user-scalable=no'/> 
<meta name='description' content='Description'/> 
<meta name='keywords' content='Keywords'/> 
<title>Next.js PWA</title> 
<link rel="manifest" href="/manifest.json"/> 
<link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/> 
<link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/> 
<link rel="apple-touch-icon" href="/apple-icon.png" />
<meta name="theme-color" content="#317EFB"/>
```

También puedes generar los favicons y colocarlos en tu carpeta /public usando esta herramienta [online](https://www.favicon-generator.org/).

6. ¡Prueba tu PWA!\
Ahora, tu aplicación está lista para ser una PWA. Sólo tenemos que probarla. Cuando usamos next-pwa , los service worker están habilitados sólo en la producción. Por lo tanto, debemos construir nuestra aplicación con**npm run build** o **yarn build**.

Y luego iniciar el servidor local de producción con **npm run start** o **yarn start**.\
Ir a http://localhost:3000. Si usas Google Chrome, ejecuta una auditoría usando [Lighthouse](https://developers.google.com/web/tools/lighthouse?hl=es).
