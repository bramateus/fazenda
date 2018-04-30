
var tmplItem = document.getElementById("tmplItem");
var conteudoJSON;
var items = [];
var content = '';
$.ajax({
    type: 'GET',
    url: "fazenda.json",
    dataType: 'json',
    contentType: 'application/json',
    crossDomain: true,
    cache:false,
    success: function(data)
    {




    	for (var i = 0; i < data.data.length; i++) {

    		var conteudoJSON = data.data[i];
    		console.log(conteudoJSON);



            var positivos = data.data[i].positive;
    		var negativos = data.data[i].negative;
            
            var votoPositivo = parseInt(positivos);
            var votoNegativo = parseInt(negativos);
            console.log("" + votoPositivo);
            console.log("" + votoNegativo);
            console.log("" + typeof votoPositivo);
            console.log("" + typeof votoNegativo);


    		content+= '<div style="margin:0 auto;" class="paper preview-1">\
    						<div class="box">\
					        	<div class="item coffee">\
					            	<div>\
									<img class="item-icon" src='+conteudoJSON.picture+'>\
					            	</div>\
					              	<p style="margin-bottom: 0">'+conteudoJSON.name+'</p>\
					              	<span>'+conteudoJSON.description+'</span>\
							    </div>\
							</div>\
						</div> \
\           <h1 style="color:red">'+conteudoJSON.positive+'</h1>\
   \
                       ';



    		// content+= '<article class="underline">\
      //       <a href="incidente.html"><img id="incidente"\ src="img/buraco.jpg" alt="Incidente" /></a>\
      //       <h2><a href="basic_markup.html" id="tit">'+conteudoJSON.description+'</a></h2>\
      //       <p id="desc">'+conteudoJSON+'</p>\
      //       <div class="date" id="date">'+conteudoJSON+'</div>\
      //       <img class="tick" alt="não resolvido" src="img/no-tick.png">\
      //       <img class="apoio" alt="apoiar" src="img/apoio.png">\
      //      </article>';



    		 // $("#divPrincipal").append('<p class="text-success"> .+ conteudoJSON +. </p>');
    		
    	}




    	// $('#').html(content);
    	$('#content').html(content);
    	
        // conteudoJSON = data.data[1].description;
        // items[] = data.data;
        // console.log(conteudoJSON);
        // console.log(items[]);
    

    },
    error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }
});