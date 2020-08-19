
function ActualizarTexto(Elemento){
    switch (Elemento) {
        case 'web':
                CuadroDeInformacion.innerText = ('Aquí podrás visitar nuestra pagina web para conocer todo lo que necesites de la rama.')
            break;
        case 'cinema':
                CuadroDeInformacion.innerText = ('¿Ganas de un poco de buen cine? Prepárate para la función!')
            break;
        case 'courses':
                CuadroDeInformacion.innerText = ('¡Conoce e inscribite a todos nuestros cursos de capacitación!')
            break;
        case 'ig':
                CuadroDeInformacion.innerText = ('Seguinos en Instagram para estar al tanto de todas las novedades.')
            break;
        default:
            CuadroDeInformacion.innerText =('Bienvenido! Por favor, selecciones una opción y lo redirigiremos a la brevedad.')
            break;
    }
}