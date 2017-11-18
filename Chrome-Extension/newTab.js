
$(function(){
$.ajax({
type:'GET',
url:'https://raw.githubusercontent.com/vishalpolley/vishalpolley.github.io/master/thoughts.json',
dataType: 'json',
success:function(data, status, xhr){
	console.log(data[1].quote);
	console.log(data[1].speaker);
	var max=data.length;
	console.log(max);
	var i=Math.floor((Math.random() * max));
		 $('#quote').text(data[i].quote);
		 $('#speaker').text(data[i].speaker);
		 console.log(data[i].quote);
		 console.log(data[i].speaker);
		 }
});
});
