# Interview by Masiv

Este proyecto fue desarrollado con la plantilla de [Create React App](https://github.com/facebook/create-react-app). Es una app para hacer calificaciones sobre tiras cómicas obtenidas aleatoriamente de [xkcd API](https://xkcd.com/json.html).

## Instalación

Para obtener el contenido del repositorio se puede descargar el zip o usar el siguiente comando en la terminal, si tiene git instalado en su equipo:

```sh
git clone https://github.com/randy-aguirre/interview-masiv.git
```

El proyecto al funcionar en React Js requiere una versión actualizada de [Node.js](https://nodejs.org/) para funcionar correctamente.

En el directorio principal del repositorio instalado instale las dependencias e inicie el proyecto:

```sh
npm i
npm start
```

Esto mostrará el ambiente de desarrollo de la aplicación en su navegador.\
En caso de no abrir automáticamente en su navegador, acceda con [http://localhost:3000](http://localhost:3000).

Por último, se requiere el uso de la funcionalidad combinada de proxy con CORS para poder hacer consultas desde una aplicación de frontend sin necesidad de configuraciones adicionales de backend.

Por lo anterior, para obtener el correcto funcionamiento de la app, se requiere que acceda al siguiente enlace [Demo Proxy CORS Heroku](https://cors-anywhere.herokuapp.com/corsdemo), donde debe pedir un acceso temporal al servidor de demostración. Las características y límites de uso del demo están descritas en [Documentación Demo Proxy CORS](https://github.com/Rob--W/cors-anywhere/issues/301).
