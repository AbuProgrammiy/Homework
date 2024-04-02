function type(item){
    document.getElementById('main-input').innerHTML+=item
}

function Clear()
{
    document.getElementById("main-input").innerHTML=""
}

function Action(){
    var amal=document.getElementById("main-input").innerHTML
    if(amal.indexOf("√")!=-1)
    {

        amal=amal.replace("√", "Math.sqrt(") + ")";
    }
    document.getElementById("main-input").innerHTML=eval(amal)
}