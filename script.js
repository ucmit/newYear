let music;
// Сайт загрузился
$(document).ready(function () {
    // Настраиваем музыку
    music = new Howl({
        src: ["https://ruv.hotmo.org/get/cuts/a8/0c/a80cb0f4f75a49ac7dfc2696be0b6e98/48261645/Christmas_Music_Christmas_Songs_Jingle_Bells_Christmas_Hits_Collective_-_Jingle_Bell_Rock_b128f0d132.mp3"],
        loop: true,
        volume: 0.5
    });
});
// Если нажали на ноту, играет музыка
$("#player>img").click(function(e){ 
    if(e.target.id != "isPlaying"){
        music.play();
        e.target.id = "isPlaying";
    }
});