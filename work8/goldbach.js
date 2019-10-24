var goldbach = function (n){
for(var i = 2;i<n; i++){
if(isPrime(i) && isPrime(n-i)){return {n1:i,n2:(n-i)};}
}

return undefined;
}

var isPrime = function (n){
for(var i = 2;i<n;i++){if(n%i == 0){return false;;}}
return true;
}

for(var i=4;i<2000; i+= 2){
var ret = goldbach(i);
if(ret == undefined){console.log("not found for :" + i);}
else{ console.log("n1 : " + ret.n1 + ",n2 : " + ret.n2);}
}