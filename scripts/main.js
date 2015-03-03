/* Comprueba que introduce un usuario y contraseña */
$("input[type=submit]").click(function(e) {
    $nom = $("#nombre").val();
     $pas = $("#password").val();
        if ($nom == '' || $pas == '') {
            e.preventDefault();
            if ($nom == '' && $pas == ''){
            	alert("Por favor, introduzca usuario y/o contraseña.");
            }else{
            	if ($nom == '') {
	            	alert("Por favor, introduzca un usuario");
	           	}        		
	         	if ($pas == '') {
            		alert("Por favor, introduzca una contraseña.");
           		}
            }
            
        }else{
           window.location.href="#alumnos"; 
        }
});
/*Obliga seleccionar curso y alumno*/
$("#evaluar").click(function(e) {
        if ($("#selectAlumno").val() == '' || $("#curso").val() == '') {
            e.preventDefault();
            alert("Por favor, seleccione un curso y el alumno que va a evaluar.");
        }else{
           window.location.href="#page1"; 
        }
});
/* Guarda en la nota final los cambios durante la valoracion de todos los contenidos*/
$("#pagina").on("pageshow" , function() {	
	/* Cambios en la valoracion del contenido*/
    $("input[id*='nota1']").on('change', function() { 
    	$('#notafin1').val(parseFloat($('#nota11').val())
			+parseFloat($('#nota12').val())
			+parseFloat($('#nota13').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);		
	});
	/* Cambios en la valoracion de calidad*/
	$('#notafin2').on('change', function() { 
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);		
	});
	/* Cambios en la valoracion de la expresion*/
	$("input[id*='nota3']").on('change', function() { 	
		$('#notafin3').val(parseFloat($('#nota31').val())
			+parseFloat($('#nota32').val())
			+parseFloat($('#nota33').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);	
	});
});

