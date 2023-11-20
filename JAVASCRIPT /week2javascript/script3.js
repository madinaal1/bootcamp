function currentTime(){
    const date=new Date ();
    document.getElementById('p1').innerHTML=date;
    //console.log('Inside the function' ,date);//
}
setInterval(currentTime, 1000);
//clearInterval();// stop the setInterval

//call a function fout time//

let count=1;
function welcome(){
    console.log('Welcome to JavaScript');
    if(count==4)
    {
        clearInterval(call);
    }
    count++;
}
const call=setInterval(welcome, 2000);

console.log(Math.min(10,47,1, 650, 84 ,2));
console.log(Math.max(232,345, 65, 678, 898, 999));
console.log((Math.round(3.6)));
console.log(Math.sqrt(21));
console.log(Math.pow(3,3));
console.log(Math.floor(4.99));
console.log(Math.ceil(5.0001));
console.log(Math.random()*100);

console.log(Math.floor(Math.random()*100)+1)

// Ternary Conditional Operators//
// short and concise way of writing conditional statements
//condition ? trueExpression : falseExpression
let marks=80;
if(marks>70)
{
 console.log("Great Marks")
}
else{
 console.log("Study more!")
}

marks>70? console.log("Great Marks T"): console.log("Study more!");
/*
let score=60;
let result;
if(score>60)
{
    result="Excellent";
}
else if(score>50)
{
    result="Good";
}
else
{
    result="Poor result";
}
console.log(result);
*/
let score=70;
score>60? result="Excellent": score>50? result="Good":result="Poor result";
console.log(result);
