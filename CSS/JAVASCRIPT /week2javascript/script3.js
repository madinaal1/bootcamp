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