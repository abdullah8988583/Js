var a;
var b;
function product (a, b){

    return a*b;

};
var ans=product(5,6);
console.log(ans);
var base;
var index;


function power(base,index){
    var ans=1;
    for (var i=0;i<index;i++){
         ans=ans*base;

    }
    return ans;
}
var fnal=power(3,4);
console.log(fnal);
var b=6;
function  f1()
{
console.log(b);

}
function f2(){
    f1(b);
    f1(b);
  
}
var result =f2(b);
console.log(result);
var first=0;
var second=1;
var number;


function fabonacci(number){
var sum;
for(var i=0;i<number;i++){
sum=first+second;
console.log(sum);
first=second;
second=sum;
}
}
fabonacci(7);

var arr=[1,2,3,4,5,6,7];
function arrsum(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        
        sum=sum+arr[i];
    }
    console.log(sum);
   

}
arrsum(arr);
var arr=[1,2,3,4,5,6,7,8,9,];

function largest(arr){
    var n=arr[0];
    for (var i=0;i<arr.length;i++)
        {
            if (n<arr[i+1]){
                n=arr[i+1];
            }

    }
    console.log(n);

}
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
largest(arr);