$(function(){

    $('nav.mobile').click(function(){
        //ao clicar chama essa função
        //criamos
        var listaMenu = $('nav.mobile ul');
        //listaMenu.fadeIn(); //chama o efeito
        if(listaMenu.is (':hidden') == true){
         var icone =$ ('botao-menu-mobile').find('i');
         icone.removeClass('fa-bars');
         icone.addClass('fa-times');
         listaMenu.slideToggle();
        }else{
        var icone =$ ('botao-menu-mobile').find('i');
        icone.removeClass('fa-times');
        icone.addClass('fa-bars');
        listaMenu.slideToggle();
        }
        /*
        São várias maneiras de apresentar a 
        listaMenu.show();
        else
        listaMenu.hide();
        
        listaMenu.fadeIn();
        else
        listaMenu.fadeOut();

        listaMenu.slideToggle();
        */
    })
})