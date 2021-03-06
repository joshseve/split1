var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
      return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombreEstudiante = prompt ("Ingresa nombre y apellido del estudiante:");
    var puntosTecnicos = prompt ("¿Cuántos puntos tecnicos obtuvo el estudiante?");
    var puntosHSE = prompt ("¿Cuántos puntos HSE obtuvo el estudiante?");
// Esto es un objeto literal
    var estudiante = {
      nombre : nombreEstudiante,
      pTecnicos : puntosTecnicos,
      pHse : puntosHSE
    };
    estudiantes.push(estudiante);
    return estudiante;
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.pHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes

    // var queMostrar = "";
    //   estudiantes.forEach (function (estudiante)
    //   queMostrar += queMostrar(estudiante);
    // });
    // return queMostrar;

    var queMostrar = "";
      for(var i=0; i < estudiantes.length; i++){
        queMostrar += mostrar(estudiantes[i]);
      }
      return queMostrar;
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

    var queBuscar = estudiantes.filter (function (estudiante) {
          return estudiante.nombre.toLowerCase() === nombre.toLocaleLowerCase();
        });
        return queBuscar;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

    var elMayorTec = estudiantes.sort (function (a,b){
        return b.pTecnicos - a.pTecnicos
    });
    return elMayorTec;
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

    var elMayorHSE = estudiantes.sort (function (a,b){
        return b.pHse - a.pHse
    });
    return elMayorHSE;
}
