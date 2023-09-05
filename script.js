let second1 = 0;
let second2 = 0;
let minute1 = 0; 
let minute2 = 0;

defaultTimer();

function defaultTimer(){
    document.querySelector('.js-timer').innerHTML = '00:00';
}

let timerStart = false;
let intervalID;
document.querySelector('.start-button').addEventListener('click', () => {
    if(timerStart === false){
        clearInterval(intervalID);
        document.querySelector('.start-button').innerHTML = 'Pause'
        intervalID = setInterval(() => {
            second1++;
            if(second1 > 9){
                second2++;
                second1 = 0;
            }
            if(second2 > 5){
                minute1++;
                second2 = 0;
            }
            if(minute1 > 9){
                minute2++;
                minute1 = 0;
            }
            if(minute2 > 5){
                minute2 = 0;
            }
            document.querySelector('.js-timer').innerHTML = `${minute2}${minute1}:${second2}${second1}`;
            timerStart = true;
        }, 1000);
    }else{
        clearInterval(intervalID);
        document.querySelector('.start-button').innerHTML = 'Resume';
        timerStart = false;
    }
});

document.querySelector('.js-reset-button').addEventListener('click', () => {
    defaultTimer();
    clearInterval(intervalID);
    timerStart = false;
    document.querySelector('.start-button').innerHTML = 'Start';
    second1 = 0;
    second2 = 0;
    minute1 = 0; 
    minute2 = 0;
});
