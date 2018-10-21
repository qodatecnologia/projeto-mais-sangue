$(document).ready(function(){
	$('#doador').on('submit', function(e){
		e.preventDefault();
		let nome = $('#nome').val();
		let sangue = $('#sangue').val();

		$.ajax( { 
			url: "https://api.mlab.com/api/1/databases/projetos2b/collections/doador?apiKey=ICkpvj9dWKplTm2MzyjvMGNZsrB_ZlMu",
		  	data: JSON.stringify({
		  		"nome" : nome,
		  		"sangue": sangue
		  	}),
		  	type: "POST",
		  	contentType: "application/json",
	  		success: function(data){
	  			window.location.href="index.html"
		  	 },
		  	 error: function(xhr, status, err){
		  	 	console.log(err);
		  	 } 
	  	 });
	});
});

$(document).ready(function(){
	$('#receptor').on('submit', function(f){
		f.preventDefault();
		let nomer = $('#nomer').val();
		let hosp = $('#hosp').val();
		let sanguer = $('#sanguer').val();

		$.ajax( { 
			url: "https://api.mlab.com/api/1/databases/projetos2b/collections/receptor?apiKey=ICkpvj9dWKplTm2MzyjvMGNZsrB_ZlMu",
		  	data: JSON.stringify({
		  		"nome" : nomer,
		  		"hospital": hosp,
		  		"sangue": sanguer
		  	}),
		  	type: "POST",
		  	contentType: "application/json",
	  		success: function(data){
	  			window.location.href="index.html"
		  	 },
		  	 error: function(xhr, status, err){
		  	 	console.log(err);
		  	 } 
	  	 });
	});
});