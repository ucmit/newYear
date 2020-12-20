let music;
// Сайт загрузился
$(document).ready(function () {
    // Настраиваем музыку
    music = new Howl({
        src: ["audio/1.mp3"],
        loop: true,
        volume: 0.5
    });
});
// Если нажали на ноту, играет музыка
$("#tree>img").click(function(e){ 
    let name = e.target.id;
    console.log(e)
    if(name == "toy1"){
        music.play(0);
    }
    // else if(name == "toy2"){
    //     music.play(1);
    // }
    // else if(name == "toy3"){
    //     music.play(2);
    // }
});





