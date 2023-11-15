const firstdelete=document.getElementById('firstitem');
const lastdelete=documnet.getElementById('lastitem');

///////////////
const name=document.getElementById('name');
const age=document.getElementById('name');
const save=document.getElementById('saveDate');
const table=document.getElementById('table');
save.addEventListener('click')

function addData(){
    let tr=document.createElement('tr');
    let td1=document.createElement('td')
    td1.innerHTML=name.value;
    tr.appendChild(td1);
    let td2=document.createElement('td');
    td2.innerHTML=age.value;
    tr.appendChild(td2)
    table.appendChild(tr)
    }