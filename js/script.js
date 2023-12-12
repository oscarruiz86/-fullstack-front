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


      $("#TamanioPizza").on('change', function() {
        console.log(this.value);
        var dict = {tamanioPizza : this.value};
            $.ajax({
                type: "POST", 
                url: "http://127.0.0.1:5000/checksize",
                data : JSON.stringify(dict),
                contentType: "application/json",
                success :(resp)=>{
                    let data = JSON.parse(resp);
                    $("#disponibilidad").html(data['mensaje']);
                 },
            });
       });
});