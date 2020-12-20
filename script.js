let music;
// Сайт загрузился
$(document).ready(function () {
    // Настраиваем музыку
    music = new Howl({
        src: ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3"],
        loop: true,
        volume: 0.5
    });
});
// Если нажали на ноту, играет музыка
$("#tree>img").click(function(e){ 
    $("#tree>img").removeClass("shaking")

    music.stop();
    
    let name = e.target.id;
    if(name == "toy1"){
        $(e.target).addClass("shaking");
        music.play(1);
    }
    else if(name == "toy2"){
        $(e.target).addClass("shaking");
        music.play(2);
    }
    else if(name == "toy3"){
        $(e.target).addClass("shaking");
        music.play(3);
    }
});


// Интервал 
let timer = setInterval(function(){
    // Время нового года
    let newYear = new Date("1 January 2021 00:00:00");
    // Нынешнее время
    let now = new Date();
    // Разность дат
    let diff = newYear - now;

    let days = Math.floor( diff/(24*60*60*1000) );
    let hours = Math.floor( (diff%(24*60*60*1000)) / (60*60*1000) );
    let minutes = Math.floor( (diff%(60*60*1000)) / (60*1000));
    let seconds = Math.floor( (diff%(60*1000)) / 1000);

    $("#seconds").text(seconds);
    $("#minutes").text(minutes + " :");
    $("#hours").text(hours + " :");
    $("#days").text(days + " :");

}, 1000)






