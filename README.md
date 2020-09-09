Presenta los países del usando la API:
https://restcountries.eu

Tiene dos versiones (branches):

1) Sin Redux
2) Con Redux

Presenta la siguiente información por país:

* Bandera
* Nombre completo del país
* Abreviación a 2 letras
* Población actual
* Región geopolítica (continental)
* Nombre de su capital

El ejercicio sirve para aprender:

* Entender el uso de fetch para traer datos de una URL (que sea permitida) 
* Como está construida una SPA (Single Page Application) con React
* Uso de Redux para crear y actualizar el data-tree
* Entender la interacción entre componentes, pasando funciones como argumentos en los atributos JSX
* Entender el uso de handlers para capturar y procesar eventos en los componentes
* Desarrollada con React usando create-react-app, no requiere conocimiento de Webpack

Para usarla, en el shell de su preferencia, siga estos comandos:

* cd directorio_de_trabajo
* git clone https://github.com/alejandrofca/api-paises-con-react-y-redux
* cd api-paises-con-react-y-redux
* npm install
* npm start