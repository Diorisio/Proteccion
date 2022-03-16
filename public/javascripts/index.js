    window.onload=function(){
    pboton=document.querySelector('.boton')
    phoras=document.querySelector('.horas')
    pminutos=document.querySelector('.minutos')
    psegundos=document.querySelector('.segundos')
    pserie=document.querySelector('.serie')
    const serie=[]
    

    const fecha= new Date();
    const horas = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();

    phoras.innerText = horas;
    pminutos.innerText += minutos;
    psegundos.innerText += segundos;
    
    const sminutos=minutos.toString();
    serie.push(sminutos[0])
    typeof sminutos[1]!='undefined'?serie.push(sminutos[1]):serie.push(0)
    
    for(let i=0;i<segundos;i++){
        serie.push(parseInt(serie[i])+parseInt(serie[i+1]))
        

    }
    pserie.innerText = serie;
}