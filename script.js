window.onload = function (){
	document.getElementById("pedras_sortidas_get").onchange = function(){ 
		if (this.value == "sim") {
			document.getElementById("tipo_pedras_get").setAttribute('disabled', 'disabled');
		} else {
			document.getElementById("tipo_pedras_get").removeAttribute('disabled');
		}
	};
	document.getElementById("pedras_sortidas_post").onchange = function(){ 
		if (this.value == "sim") {
			document.getElementById("tipo_pedras_post").setAttribute('disabled', 'disabled');
		} else {
			document.getElementById("tipo_pedras_post").removeAttribute('disabled');
		}
	};
};
