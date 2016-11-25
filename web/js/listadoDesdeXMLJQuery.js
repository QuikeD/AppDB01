/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    console.log("hola :D");
    $.ajax({type: "get",
        url: "xml/paises.xml",
        dataType: "xml",
        success: function (xml) {
             //console.log(xml);
            console.log("hola :D2");
            $(xml).find("PORTFOLIO").each(function () {
                var img = $('<img>'); //Equivalent: $(document.createElement('img'))
                img.attr('src', $(this).find("IMAGEN").text());
                var container22 = $("<div></div>").attr("class","col-sm-4 portfolio-item");
                img.appendTo(container22);
                container22.appendTo("div#portfolio");


            });

        },
        error: errorLlamada

    });
});


function errorLlamada(xhr) {
   console.log("hola :D3");
    console.log(xhr);
}