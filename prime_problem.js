function check_prime(num){

var count=0;

for(var i=1; i<=num; i++){
if(num%i==0){
count++;
}
}

if(count==2){
console.log("Prime Number");
}
else{
console.log("Not a Prime Number");
}

}

check_prime(13);