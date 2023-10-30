const display=document.getElementById('display');
document.querySelectorAll('button').forEach(button=>{
    button.addEventListener('click',()=>HandleButtonClick(button.textContent));
});

function HandleButtonClick (value){
    if(value==='='){
        try{
            display.value=eval(display.value);
        }
        catch(error){
            display.value='Error';
        }
    }
    else if (value==='C'){
        display.value='';
    }
    else if (value==='x'){
        display.value=display.value.slice(0,-1);
    }
    
    else {
        display.value+=value;
    }
}