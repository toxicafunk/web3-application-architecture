
const classic_audio = document.getElementById('btn-classic');
classic_audio.addEventListener("click", play_classic);

const ambient_audio = document.getElementById('btn-ambient');
ambient_audio.addEventListener("click", play_ambient);

const lofi_audio = document.getElementById('btn-lofi');
lofi_audio.addEventListener("click", play_lofi);

var classic_stream = new Audio("https://storage.googleapis.com/telecomsteve-website/audio/trap_and_ink.wav");
var ambient_stream = new Audio("https://storage.googleapis.com/telecomsteve-website/audio/trap_and_ink.wav");
var lofi_stream = new Audio("https://storage.googleapis.com/telecomsteve-website/audio/trap_and_ink.wav");

var classic_playing = false;
var ambient_playing = false;
var lofi_playing = false;

function play_classic() {
    classic_stream.loop = true;
    ambient_stream.pause();
    ambient_stream.currentTime = 0;
    lofi_stream.pause();
    lofi_stream.currentTime = 0;

    if (!classic_playing){
        classic_stream.play();
        classic_playing = true;
        document.getElementById("btn-classic").classList.add("playing");
        document.getElementById("btn-ambient").classList.remove("playing");
        document.getElementById("btn-lofi").classList.remove("playing");
    } else if (classic_playing){
        classic_stream.pause();
        classic_playing = false;
        document.getElementById("btn-classic").classList.remove("playing");
    } else {
        pass;
    }
}

function play_ambient() {
    ambient_stream.loop = true;
    classic_stream.pause();
    classic_stream.currentTime = 0;
    lofi_stream.pause();
    lofi_stream.currentTime = 0;

    if (!ambient_playing){
        ambient_stream.play();
        ambient_playing = true;
        document.getElementById("btn-classic").classList.remove("playing");
        document.getElementById("btn-ambient").classList.add("playing");
        document.getElementById("btn-lofi").classList.remove("playing");
    } else if (ambient_playing){
        ambient_stream.pause();
        ambient_playing = false;
        document.getElementById("btn-ambient").classList.remove("playing");
    } else {pass;}
}

function play_lofi() {
    lofi_stream.loop = true;
    ambient_stream.pause();
    ambient_stream.currentTime = 0;
    classic_stream.pause();
    classic_stream.currentTime = 0;

    if (!lofi_playing){
        lofi_stream.play();
        lofi_playing = true;
        document.getElementById("btn-classic").classList.remove("playing");
        document.getElementById("btn-ambient").classList.remove("playing");
        document.getElementById("btn-lofi").classList.add("playing");
    } else if (lofi_playing){
        lofi_stream.play();
        lofi_playing = false;
        document.getElementById("btn-lofi").classList.remove("playing");
    } else {pass;}
}
