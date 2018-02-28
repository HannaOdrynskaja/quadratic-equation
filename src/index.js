module.exports = function solveEquation(equation) {
var roof = [];
var str = ""+equation;
var str = str.replace(/ /g, '');
var str = str.replace('*x^2+', ',');
var str = str.replace('*x^2', ',');
var str = str.replace('*x+', ',');
var str = str.replace('*x', ',');
var arr = str.split(',');
var a = Number(arr[0]);
var b = Number(arr[1]);
var c = Number(arr[2]);
var d = b*b-4*a*c;
if (d<0)
	{console.log ('there are not roofs');
	}
if (d==0)
	{
		roof[0] = (-b)/(2*a);
	}		
if (d>0){
		
		var r0 = Math.round(((-b)-Math.sqrt(d))/(2*a));
		var r1 = Math.round(((-b)+Math.sqrt(d))/(2*a));
		if((r0-r1)<0)
		{
		roof[0]= r0;
		roof[1]= r1;
	
		}else{
		roof[0]= r1;
		roof[1]= r0;
		}
	}
	  	  return roof;
}		  

