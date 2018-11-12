$(document).ready(function(){
	$("#mybutton").click(function(){
		var headers = $(".h1");
		var color = 0;
		for(var i=0; i<headers.lenght; i++){
			headers[color].style.color = "hsl(" + color + ",100%, 50%)";
			color += 90;
		}
	})
})