// pickup inputs values

var sets = parseInt(document.getElementById('set').value);

var studyMin = parseInt(document.getElementById('studyMin').value);
var studySec = parseInt(document.getElementById('studySec').value);

var restMin = parseInt(document.getElementById('restMin').value);
var restSec = parseInt(document.getElementById('restSec').value);

// add events to buttons

var setsLess = document.getElementById('setsLess').addEventListener('click', function(){ decrease('sets')});
var setsMore = document.getElementById('setsMore').addEventListener('click', function(){ increase('sets')});

var studyLess = document.getElementById('studyLess').addEventListener('click', function(){ decrease('study')});
var studyMore = document.getElementById('studyMore').addEventListener('click', function(){ increase('study')});

var restLess = document.getElementById('restLess').addEventListener('click', function(){ decrease('rest')});
var restMore = document.getElementById('restMore').addEventListener('click', function(){ increase('rest')});

var btnStudy = document.getElementById('study').addEventListener('click', function(){
    document.getElementById('modal').classList.replace('hide', 'modal');
});

// functions

function showInput(id, value) {
    document.getElementById(id).value = value;
}

function decrease(id){

    switch(id){
        case 'sets':
            (sets === 0) ? sets = 60 : sets -= 1;
            showInput('set', sets);
        break;

        case 'study':
            (studySec === 0) ? (studySec = 60, studyMin -= 1) : studySec -= 1;
            showInput('studyMin', studyMin);
            showInput('studySec', studySec);
        break;

        case 'rest':
            (restSec === 0) ? (restSec = 60, restMin -= 1) : restSec -= 1;
            showInput('restMin', restMin);
            showInput('restSec', restSec);
        break;
    }
}

function increase(id){

    switch(id){
        case 'sets':
            (sets === 60) ? sets = 0 : sets += 1;
            showInput('set', sets);
        break;

        case 'study':
            (studySec === 60) ? (studySec = 0, studyMin += 1) : studySec += 1;
            showInput('studyMin', studyMin);
            showInput('studySec', studySec);
        break;

        case 'rest':
            (restSec === 60) ? (restSec = 0, restMin += 1) : restSec += 1;
            showInput('restMin', restMin);
            showInput('restSec', restSec);
        break;
    }
}