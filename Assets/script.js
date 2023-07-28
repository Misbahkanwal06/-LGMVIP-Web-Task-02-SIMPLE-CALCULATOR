
let val=document.getElementById("inp");

function fun(v){
 val.value+=v;
}

function allClear(){
val.value="";
}

function tot(){
val.value =eval(val.value);
 }

function del(){
val.value=val.value.substr(0,val.value.length-1);
}