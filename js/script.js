$(document).ready(function(){
    $( "#formPedio" ).on( "submit", function( event ) {

        let nombreCliente = $("#NombreCliente").val();
        let apellidoCliente = $("#ApellidoCliente").val();
        if (nombreCliente.length == 0) {
            $('[for="NombreCliente"]').addClass("error");
            event.preventDefault();
        }
        if (apellidoCliente.length == 0 ) {
            $('[for="ApellidoCliente"]').addClass("error");
            event.preventDefault();
        }
      });
});