var arithmetic = function arithmetic(){
	var sum=function(a=1,b=2){
		return a+b;
	};
	var dif=function(a,b){
		return a-b;
	};
	var divide=function(a,b){
		return a-b;
	};

	return {
		'sum':sum,
		'dif':dif,
		'div':divide
	}
};



var button = document.getElementById('button');
var text = document.getElementById('text');
button.addEventListener('click',function(){
	var arithmetic = arithmetic();
	console.log(arithmetic.sum(1,2));
	text.innerHTML = arithmetic.sum(1,2);
});

