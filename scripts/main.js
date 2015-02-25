$("#pagina").on("pageshow" , function() {	
	/* Cambios en la valoracion del contenido*/
	$('#nota11').on('change', function() { 
		$('#notafin1').val(parseFloat($('#nota11').val())
			+parseFloat($('#nota12').val())
			+parseFloat($('#nota13').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			); 
	});
	$('#nota12').on('change', function() { 
		$('#notafin1').val(parseFloat($('#nota11').val())
			+parseFloat($('#nota12').val())
			+parseFloat($('#nota13').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);	
	});
	$('#nota13').on('change', function() { 
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
	$('#nota31').on('change', function() { 
		$('#notafin3').val(parseFloat($('#nota31').val())
			+parseFloat($('#nota32').val())
			+parseFloat($('#nota33').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);	
	});
	$('#nota32').on('change', function() { 
		$('#notafin3').val(parseFloat($('#nota31').val())
			+parseFloat($('#nota32').val())
			+parseFloat($('#nota33').val())
			);
		$('.notafinal').html(parseFloat($('#notafin1').val())
			+parseFloat($('#notafin2').val())
			+parseFloat($('#notafin3').val())
			);		
	});
	$('#nota33').on('change', function() { 
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

