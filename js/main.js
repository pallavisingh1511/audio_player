var audio = new Audio('media/01. Grenade.mp3');

//Hide Pause
$('#pause').hide();

$('#play').click(function(){
    audio.play();
    $('#play').hide();
    $('#pause').show();
});

$('#pause').click(function(){
    audio.pause();
    $('#pause').hide();
    $('#play').show();
});


$('#stop').click(function(){
    audio.pause();
    audio.currentTime = 0;
    $('#pause').hide();
    $('#play').show();
});
//audio.play();