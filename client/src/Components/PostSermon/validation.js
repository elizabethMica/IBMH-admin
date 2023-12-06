export default function validation(value){
    let errors ={}

    if(!value.title){errors.title = "Se requiere: Título"};

    if(!value.verse){errors.verse = "Se requiere: Cita"}

    if(!value.verseText){errors.verseText = "Se requiere: Versículo"}

    if(!value.date){errors.date = "Se requiere: Fecha"}

    if(!value.book){errors.book = "Se requiere: Libro"}

    if(!value.videoYT){errors.videoYT = "Se requiere: Link del video"}

    if(!value.preacher){errors.preacher = "Se requiere: Nombre y apellido del predicador"}

    if(!value.cover){errors.cover = "Se requiere: Link de la imagen"}

    return errors;
}
