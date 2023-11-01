function setup(){
    canvas=createCanvas(300,300);
    canvas.center();}

    function preload(){
    }

    function draw(){
        image(video, 0, 0, 300, 300);
    }

    function take_snapshot(){
        save('myFilterImage.png');
    }