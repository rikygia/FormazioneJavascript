

let json;
let requestURL="./lista.json";
/*
let request=new XMLHttpRequest();
request.open("GET",requestURL)
request.responseType="json";   
request.send()
request.onload = ()=>{
    
    console.log("fatto")
}
*/

fetch(requestURL)
.then(response=>response.json())
.then(ciao=>{
    json=ciao;
    console.log(json);
})

/*
perchè questo non funziona?
const response = await fetch(requestURL);
json=response.json();
*/
//perchè questo stampa undefined?
/*
let funzioneAs= async function(){
    const response = await fetch(requestURL);
    json = await response.json();  
    console.log(json);  
}
funzioneAs();*/
console.log(json);



bottone=document.querySelector('button');
bottone.textContent="premimi";
bottone.addEventListener('click',()=>
{

    //json=request.response;

    for(let i=0;i<3;i++){
    let img=document.createElement('img');
    img.setAttribute("src",json.lista[i].immagine)
    img.setAttribute("width","100px");
    document.body.append(img);
    let txt=document.createElement('p');
    txt.textContent= `${json.lista[i].prodotto} ${json.lista[i].descrizione} ${json.lista[i].prezzo}`;
    document.body.append(txt);
    
}
})