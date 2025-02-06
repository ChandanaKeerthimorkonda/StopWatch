//creating variables
const playerNameInput = document.getElementById('playerName');
const startGameButton = document.getElementById('startGame');
const gameSection = document.querySelector('.game-section');
const hl = document.querySelector('.hlo');


startGameButton.addEventListener('click', () => {
    const playerName = playerNameInput.value.trim();
    if (playerName) {
        startGameButton.style.display = 'none';
        playerNameInput.style.display = 'none';
        gameSection.style.display = 'block';
        hl.style.display = 'none';
       
    
    } else {
        alert('Please enter your name to start the clock.');
    }
});



let startbtn=document.getElementById('st');
let stopbtn=document.getElementById('sto');
let resetbtn=document.getElementById('res');

let h=0;
let m=0;
let s=0;
let c=0;
let timer=false;
// adding event listeners to the buttons
startbtn.addEventListener('click',()=>{
    timer=true;
    stopclock();
});
stopbtn.addEventListener('click',()=>{
    timer=false;
    stopclock();
})
resetbtn.addEventListener('click',()=>{
    timer=false;
    h=0;
    m=0;
    s=0;
    c=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML = "00";
});
// stop watch function
function stopclock(){
    if (timer){
        c++;
        if(c==100){
            s++;
            c=0;
        }
        if(s==60){
            m++;
            s=0;
        }
        if(m==60){
            h++;
            s=0;
            m=0;
        }

        let hrstr=h;
        let mins=m;
        let se=s;
        let countStr=c;
        if(hrstr<10){
            hrstr="0"+hrstr;
        }
        if(mins<10){
            mins="0"+mins;
        }
        if(se<10){
            se="0"+se;
        }
        if (count < 10) {
            countStr = "0" + countStr;
        }
        document.getElementById('hr').innerHTML=hrstr;
        document.getElementById('min').innerHTML=mins;
        document.getElementById('sec').innerHTML=se;
        document.getElementById('count').innerHTML = countStr;
        setTimeout(stopclock,10);


    
    }
}


