$(document).ready(function(){

$(document).keydown(function(key){
	if (parseInt(key.which, 10)==32)
	{
		$('#egg').animate({top:"-=40px"}).animate({bottom:"0"});
	}
})


})