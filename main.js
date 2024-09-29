var div1 =document.getElementById('match');
var div2 =document.getElementById('messg');
var display1=0;
var display2=0;

function hideShow1(){
    if(display1){
        div1.style.display='flex';
        display1=0;
        display2=1;
        div2.style.display='none';
    }
    else{
        // div1.style.display='none';
        display1=1;
        display2=0;
    }
}

function hideShow2(){
    if(display2){
        div2.style.display='flex';
        div1.style.display='none';
        display2=0;
        display1=1;
        
    }
    else{
        // div2.style.display='none';
        display2=1;
        display1=0;
    }
}

var grid =document.getElementById('grid');
var ungrid =document.getElementById('ungrid');
var displaygrid=0;

function hideShowgrid(){
    console.log('grid');
    if(displaygrid){
        grid.style.display='flex';
        ungrid.style.display='none';
        displaygrid=0;
    }
    else{
        grid.style.display='none';
        ungrid.style.display='flex';
        displaygrid=1;
    }
}

setTimeout(() => {
    document.querySelector('.loader-container').style.display = 'none';
}, 3000);
  