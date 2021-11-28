/* FILTRAR CALENDARIO */

$(document).ready(function() {
    $("#filtrar").click(function() {
        filtrar();
    })
})
function filtrar() {
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idioma").val();
    
    $("#cursos article").hide();
    $(`#cursos .${establecimiento}.${idioma}`).show();  
}

/* FILTRAR NOMBRE ESTABLECIMIENTO */

$(document).ready(function() {
    $("#filtrarprovincia").click(function() {
        filtrarprov();
        
    })
})
function filtrarprov() {
   
    const valorestablecimiento=$("#establecimientoboton").val();
    $("#escuelas article").hide();
    $(`#escuelas .${valorestablecimiento}`).show();

}
