let windowHeight = window.innerHeight;
let windowWidth = window.outerWidth;
let canvasContainer = document.querySelector('#canvas-container'); 
let p;
let title = 'Recollecting Roots';
let x, y;
let head1, head2, head3, head4, head5;
let img1, img2, img3, img4; 

let xOffset = windowWidth*0.12;
let yOffset = windowHeight*0.14;


let sketch = canvas => { 
  canvas.preload = function() {
    //load images
    head1 = canvas.loadImage('img/head2.png'); //l
    head2 = canvas.loadImage('img/head12.png'); //l
    head3 = canvas.loadImage('img/head7.png'); //s
    head4 = canvas.loadImage('img/head10.png'); //s
    head5 = canvas.loadImage('img/head4.png'); //s
    img1 = canvas.loadImage('img/img1.png'); //l
    img2 = canvas.loadImage('img/img2.png'); //l
    img3 = canvas.loadImage('img/img3.png'); //s
    img4 = canvas.loadImage('img/img4.jpg'); //l
  };

  //creates canvas  
  canvas.setup = () => {   
    console.log("Setup");
    noCanvas();
    canvas.createCanvas(windowWidth, windowHeight); 

    //set title
    p = canvas.createP(title);
    p.position(0, (windowHeight/2)-(windowHeight/10));
    p.addClass('display');
  };  
  
  //draw function  
  canvas.draw = () => {   
    console.log("Draw");
    //set background
    canvas.background('#E9DCCF');

    //set positioning
    x = map(pmouseX, 0, windowWidth, 0, 100);  
	  y = map(pmouseY, 0, windowHeight, 0, 100);

    canvas.drawImages(); 
  };

  canvas.drawImages = function() {
    //imgs in back
    canvas.image(head4, (windowWidth-xOffset) - (x/2), (windowHeight-xOffset) - (y/2), 160, 200);
    canvas.image(head5, (windowWidth/2) - (x/2), (xOffset) - y, 160, 200);
    canvas.image(img1, (windowWidth-xOffset-50) - (x/2), (yOffset+50) - (y/2));
    canvas.image(img2, (xOffset) - (x/3), (windowHeight-yOffset-100) - (y/3));
    canvas.image(img3, (xOffset+200) - (x/2), (yOffset*2) - (y/2));
    canvas.image(img4, (windowWidth/2+xOffset) - (x/3), (windowHeight-yOffset-50) - (y/3), 360, 270);
    //imgs in front
    canvas.image(head1, (windowWidth-xOffset-100) - x, (xOffset+100) - y, 240, 300); //top
    canvas.image(head2, (xOffset+200) - x, (windowHeight-xOffset-100) - y, 240, 300); //bottom
    canvas.image(head3, (xOffset) - x, (xOffset) - y, 160, 200);
    

    canvas.imageMode(CENTER);
  };

};

function setup() {  
  new p5(sketch, canvasContainer);
};


 //imgs in back
    //canvas.image(head5, 200 - x/2, 200 - y/2, 160, 200);  
    //imgs in front
//canvas.image(head5, windowWidth/2 - (x/2), windowHeight/2 - (y/2));
    //canvas.image(head1, windowWidth/2 - x, windowHeight/2 - y);