// pickup inputs values

var sets = parseInt(document.getElementById('set').value);

var studyMin = parseInt(document.getElementById('studyMin').value);
var studySec = parseInt(document.getElementById('studySec').value);

var restMin = parseInt(document.getElementById('restMin').value);
var restSec = parseInt(document.getElementById('restSec').value);

// add events to buttons

const setsLess = document.getElementById('setsLess').addEventListener('click', function(){ decrease('sets')});
const setsMore = document.getElementById('setsMore').addEventListener('click', function(){ increase('sets')});

const studyLess = document.getElementById('studyLess').addEventListener('click', function(){ decrease('study')});
const studyMore = document.getElementById('studyMore').addEventListener('click', function(){ increase('study')});

const restLess = document.getElementById('restLess').addEventListener('click', function(){ decrease('rest')});
const restMore = document.getElementById('restMore').addEventListener('click', function(){ increase('rest')});

const btnStudy = document.getElementById('study').addEventListener('click', function(){

    sets = parseInt(document.getElementById('set').value);

    studyMin = parseInt(document.getElementById('studyMin').value);
    studySec = parseInt(document.getElementById('studySec').value);

    restMin = parseInt(document.getElementById('restMin').value);
    restSec = parseInt(document.getElementById('restSec').value);

    document.getElementById('modal').classList.replace('hide', 'modal');
    
    start();
});

// functions

function output(id, value) {

    (value < 10 && id != 'set') ? value = '0' + value : value;

    document.getElementById(id).value = value;
}

function decrease(id){

    switch(id){
        case 'sets':
            (sets === 0) ? sets = 60 : sets -= 1;
            output('set', sets);
        break;

        case 'study':
            (studySec === 0) ? (studySec = 60, studyMin -= 1) : studySec -= 1;
            output('studyMin', studyMin);
            output('studySec', studySec);
        break;

        case 'rest':
            (restSec === 0) ? (restSec = 60, restMin -= 1) : restSec -= 1;
            showInput('restMin', restMin);
            output('restSec', restSec);
        break;
    }
}

function increase(id){

    switch(id){
        case 'sets':
            (sets === 60) ? sets = 0 : sets += 1;
            output('set', sets);
        break;

        case 'study':
            (studySec === 60) ? (studySec = 0, studyMin += 1) : studySec += 1;
            output('studyMin', studyMin);
            output('studySec', studySec);
        break;

        case 'rest':
            (restSec === 60) ? (restSec = 0, restMin += 1) : restSec += 1;
            output('restMin', restMin);
            output('restSec', restSec);
        break;
    }
}