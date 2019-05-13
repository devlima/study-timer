// variables

var modalSets, modalStudyMin, modalStudySec, modalRestMin, modalRestSec;

const modalRest = 'rest';

// event button

const reset = document.getElementById('reset').addEventListener('click', function(){
    document.location.reload(true)
})

// functions

function start() {
    modalSets = sets;
    modalStudyMin = studyMin;
    modalStudySec = studySec;

    modalRestMin = restMin;
    modalRestSec = restSec;

    setInterval(studyDecrease, 1000);
}

function stop(value){
    clearInterval(value);
    setTimeout(function(){
        document.getElementById('modalContainer').classList.add('fadeOut');
        document.getElementById('congratulations').classList.replace('hide', 'congratulations');
    }, 1000);

    resetModal();
}

function resetModal() {

    sets = 3;

    studyMin = 50;
    studySec = 00;

    restMin = 10;
    restSec = 00;

    setTimeout(function(){
        document.getElementById('modal').classList.add('goDown');
    }, 5000);

    setTimeout(function(){
        document.location.reload(true)
    },6000);
}

function modalOutput(id, value) {

    (value < 10 && id != 'modalSets') ? value = '0' + value : value;

    document.getElementById(id).textContent = value;
}

function studyDecrease(){
    modalOutput('modalSets', modalSets);
    modalOutput('modalMin', modalStudyMin);
    modalOutput('modalSec', modalStudySec);

    if(modalStudySec == 0 && modalStudyMin > 0){
        modalStudySec = 60;
        modalStudyMin -= 1;
    } else if((modalStudySec) == 0 && (modalStudyMin == 0) && (modalSets) > 1) {
        restDecrease();
    } else if((modalStudySec == 0) && (modalStudyMin == 0) && (modalSets == 1)){
        stop('studyDecrease');
    } else {
        modalStudySec -= 1;
    }
}


function restDecrease() {
    modalOutput('modalSets', modalRest);
    modalOutput('modalMin', modalRestMin);
    modalOutput('modalSec', modalRestSec);

    if(modalRestMin > 0 && modalRestSec == 0){
        modalRestSec = 60;
        modalRestMin -= 1;
    } else if(modalRestMin == 0 && modalRestSec == 0){
        modalSets -= 1;
        modalStudySec = studySec;
        modalStudyMin = studyMin;
        modalRestMin = restMin;
        modalRestSec = restSec;
        return;
    } else {
        modalRestSec -= 1;
    }

}