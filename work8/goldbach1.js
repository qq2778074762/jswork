function goldbacg1(num);
var num = parseInt(prompt("输入一个偶数"));
isTure(num);

function factorial(a){
    var sum=0;
    for(var i=1;i<=a;i++){
        if(a%i==0){
            sum++;
        }
    }
    if(sum==2){
        return true;
    }else{
        return false;
    }
}

function isTure(a){
    for(var i=2;i<a-2;i++){
        var j=a-i;
        if(factorial(i)&&factorial(j)){
        str +=(a+"可以拆分为两个质数" + i  + "与" + j + "+");
        }
    }
    document.getElementById("goldbach1").innerHTML = str;
}