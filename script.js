var head=document.getElementById('advice');
var quote=document.querySelector('#center h2');
var dice=document.getElementById('diceback');
var random;
var url;
dice.addEventListener('click',roll);
function roll(){
    random=1 + Math.floor(Math.random()*223);
    url="https://api.adviceslip.com/advice/"+random
    advice(url,function(data){
       Setting(data);
   });

}


window.onload=init;
function init(){
    url="https://api.adviceslip.com/advice"
    advice(url,function(data){
        Setting(data);
    });
    
}
function Setting(test){
    var num=test.id;
    var text=test.advice
    head.innerHTML="advice #"+num;
    quote.innerHTML='"'+text+'"';


}

function advice(url,callback){
    var xml=new XMLHttpRequest();
    xml.onreadystatechange=function(){
        if(this.readyState==4)
        {
            callback(JSON.parse(this.response).slip)
        }
    }

    xml.open('GET',url,true);
    xml.send();
}

