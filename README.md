# 🚀 Password Manager

Me he centrado en desarrollar siguiendo las prácticas que suelo utilizar en mi día a día e intentando extender en la medida que el tiempo me lo ha permitido las funcionalidades establecidas en el documento. He intentado implementar de la manera más correcta la lógica interna del problema propuesto, con la estructura de carpetas que normalmente uso para proyectos de React, como por ejemplo la separación de componentes y de páginas.

Como añadido a las funcionalidades propuestas se han añadido los archivos de configuración necesario para correr la aplicación en las ultimas versiones de las dependencias. Se ha implementado un formulario que permite añadir una contraseña junto con una frase secreta opcional. En el ultimo paso se realiza una llamada asincrona.

La carga de las páginas se ha hecho mediante _lazy load_ permitiendo mostrar una precarga sencilla para mejorar la experiencia del usuario. Todas las imágenes usadas estan en formato SVG lo que permite estilarlas desde el código y optimizar su carga.

Para el desarrollo se ha usado la rama _develop_ y al finalizar se mergeó la rama _main_ con todos los cambios. El historial de _git_ está más o menos estructurado por las fases del desarrollo dejando en cada _commit_ una versión estable.

## Instalación

Para clonar este repositorío necesitarás tener instalado en el ordenador [Git](https://git-scm.com/) y [Node.js](https://nodejs.org/en/download/) el cual ya viene con _npm_ instalado. Aparte de _npm_ también puedes gestionar las dependencias con [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable). Una vez tengas estas aplicaciones abre un terminal y sigue las instrucciones de abajo:

```
# Clonar este repositorio
https://github.com/migudevelop/password-manager.git

# Instalar las dependencias (yarn o npm)
yarn
npm i

# Levantar el proyecto
yarn start:dev
npm start:dev
```

## Contraseña de pruebas

Para poder probar la aplicación podemos poner cualquier contraseña que está nos devolvera por defecto una respuesta correcta mostrandonos un mensaje de que nuestra contraseña se ha creado, por otro lado, si queremos que nos muestre el mensaje de error al crear la contraseña se devera introducir la siguiente contraseña:  **pruebaKO123**.

## Formato del código

Para asegurar la calidad del codigo y evitar errores se ha hecho uso de las librerías **ESLint** y **Prettier**, configurandolas de manera optima para su uso con React. También se ha instalado **Lint Staged** y **Husky** para poder lanzar scripts antes de poder subir commits al repositorio, en este caso se ejecutará ESLint, prettier y todos los test que haya en el proyecto para comprobar que todo esta correcto. Además se ha añadido **Commitlint** para comprobar que los commits siguen el formato de conventional commits.

## Scripts

Se han añadido varios scripts para facilitar el desarrollo:

- _lint:fix_: ejecuta ESLint y arregla posibles errores
- _prettify_: ejecuta Prettier y formatea el código del proyecto
- _prettier:check_: ejecuta Prettier e informa de los archivos que no tienen un formato correcto
- _test_: ejecuta los test del proyecto y termina la ejecución (usado por Husky)
- _test:watch_: ejecuta los test del proyecto y mantiene un _watcher_ para volver a ejecutarlos cuando detecte un cambio (usado para desarrollar)
- _test:coverage_: ejecuta los test del proyecto y nos muestra el porcentage cubierto con los tests.

## Redux

Para el uso de Redux se ha utilizado la libreria **Redux toolkit** ya que desde la página oficial de **Redux**  te sugieren que la utilices habiendo deprecado el metodo createStore. Esta libreria simplifica la mayoría de las tareas de Redux, evita errores comunes y facilita la creación de aplicaciones de Redux.

## Estilos

El estilado gráfico del proyecto se ha realizado con **Styled Components**, obviando introducir un preprocesador (SASS/LESS) ya que sería mezclar dos conceptos diferentes. Se han establecido 3 breackpoints para que la aplicación sea _responsive_ y se pueda visualizar correctamente tanto en dispositivos móviles (teléfonos y tabletas) como en navegadores de escritorio con la filosofía **mobile-first**. Para la inyección de estilos globales se ha usado _createGlobalStyle_ de **Styled Components** 

## Temas

Se ha añadido la funcionalidad que permita al usuario cambiar de tema, aplicándole a la UI un aspecto diferente y de esta forma darle un valor añadido al proyecto.

## Formularios

Para la gestión de formularios ya que son sencillos se ha usado **React Hook Form** dado que es más ligera que **Formik**.
## Validaciones

Para la validación de las propiedades pasadas entre los distintos componentes se ha utilizado **Prop-types** para las validaciones en tiempo de ejecución y  **Typescript** para la comprobación en tiempo de compilación.

## Testing

Se han implementado tests a modo de demostación tanto para componentes como para el uso de Redux comprobando acciones y funciones reductoras simulando los pasos de la aplicación mediante acciones en los tests.

## Librerias usadas

Hay varias librerías que se han instalado para dar características extra al proyecto:

- prop-types: evita errores a la hora de programar y asegura la consistencia del código
- react-testing-library: para realizar los tests unitarios.

## ToDo

Por falta de tiempo han quedado pendientes los siguientes puntos 😊:

- añadir más tests
- añadir los colores para el tema _dark_mode_
- reemplazar tipos _any_ por sus tipos correctos
