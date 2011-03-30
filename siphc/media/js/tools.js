$(document).ready(function(){	
	// usado para exibir as mensagens de error e info do sistema
    $('.message').hide().append('<span class="close" title="Fechar"></span>').fadeIn('slow');
    $('.message .close').hover(
        function() { $(this).addClass('hover'); },
        function() { $(this).removeClass('hover'); }
    );
        
    $('.message .close').click(function() {
        $(this).parent().fadeOut('slow', function() { $(this).remove(); });
    });
    	


// ############################# VALIDAÇÕES FORM #########################

// usado para atribuir a classe ao validador jquery dos forms
// para validação funcionar o form deve ter id=form
var form = $("#form").validator({ 
	position: 'bottom left', 
	offset: [5, 0],
	messageClass:'form-error',
	message: '<div><em/></div>' // em element is the arrow
});

// valida uma campo tipo time
$.tools.validator.fn("[type=time]", "Entre com uma hora valida.", function(input, value) { 
	return /^\d\d:\d\d$/.test(value);
});

// compara dois campos, usado para senhas
// pego o atributo do input 'data-equals' onde tiro o campo que farei a verificação
// depois eu pego o outro atributo field-equal onde tiro o nome familiar do campo que usarei para validação 
$.tools.validator.fn("[data-equals]", "Valor não confere com o campo $1", function(input) {
	var name = input.attr("data-equals"),
		 field = this.getInputs().filter("[name=" + name + "]"); 
 	var nomefield = input.attr("field-equal")
	return input.val() == field.val() ? true : [nomefield]; 
});

// validar quantidade minima de caracteres para um campo
$.tools.validator.fn("[minlength]", function(input, value) {
	var min = input.attr("minlength");
	
	return value.length >= min ? true : {     
		en: "Mínimo de " +min+ " caracter" + (min > 1 ? "es." : "."), 
	};
});

$.tools.validator.localizeFn("[type=time]", {
	en: 'Entre com uma hora valida.',
	fi: 'Virheellinen aika'		
});



// ############################# FIM VALIDAÇÕES FORM #########################



});
