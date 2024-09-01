# Plataforma de Alquiler de Disfraces

## Descripción General:
Este proyecto es una aplicación web diseñada para facilitar el alquiler de disfraces en línea. Los usuarios pueden navegar por una variedad de disfraces, ver detalles específicos, seleccionar un rango de fechas para su alquiler, y confirmar su reserva. El proyecto se centra en una interfaz amigable y una experiencia de usuario intuitiva, permitiendo a los usuarios realizar reservas de manera rápida y eficiente.

## Contexto de su realizacion:
Realizado como trabajo final de la carrera Process Developer de la casa de estudio "Digital House". El proyecto fue realizado en equipo de 2 profesionales.

##Funcionalidad:
Puede descagarse el video que muestra como funciona la aplicacion

## Tecnologías Utilizadas:
- React.js: Para la creación de la interfaz de usuario interactiva y el manejo del estado de la aplicación.
- React Router: Para la gestión de rutas y la navegación entre diferentes vistas de la aplicación.
- CSS: Para el diseño y la estilización de los componentes de la aplicación.
- JavaScript: Para la lógica de negocio y la manipulación del DOM.
- Google: como base de datos y backend

##Componentes Clave:
- Home: Página principal que muestra los disfraces disponibles y permite filtrar por categorías y subcategorías.
- Detail2: Componente que muestra los detalles de un disfraz seleccionado, incluyendo la opción de elegir un rango de fechas para la reserva.
- Modal: Componente modal que aparece cuando el usuario confirma la selección del rango de fechas. Muestra un resumen de la reserva, incluyendo detalles del usuario, el disfraz seleccionado y un botón para confirmar la reserva.
- ConfirmaModal: Un segundo modal que se muestra tras la confirmación de la reserva. Informa al usuario de que la reserva ha sido realizada con éxito y ofrece un botón para redirigir al usuario a la sección "Mis Reservas".

##Flujo de Usuario:
- El usuario navega por la página principal, visualizando los diferentes disfraces disponibles.
- Al seleccionar un disfraz, el usuario es dirigido al componente Detail2, donde puede ver más información sobre el producto y seleccionar un rango de fechas para su alquiler.
- Al confirmar el rango de fechas, se abre un Modal que muestra los detalles de la reserva. Aquí, el usuario puede revisar la información y confirmar la reserva.
- Al hacer clic en "Confirmar Reserva", se muestra el ConfirmaModal, indicando que la reserva fue exitosa. Desde este modal, el usuario puede navegar a "Mis Reservas" para ver sus reservas activas.
