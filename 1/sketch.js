let windowHeight = window.innerHeight;
let windowWidth = window.outerWidth;
let canvasContainer = document.querySelector('#canvas-container'); 
let head1, head2, head3, head4, head5, head6, head7, head8, head9, head10, head11, head12, head13, head14;

let sketch = canvas => { 
  canvas.preload = function() {
    head1 = canvas.loadImage('img/head1.png');
    head2 = canvas.loadImage('img/head2.png');
    head3 = canvas.loadImage('img/head3.png');
    head4 = canvas.loadImage('img/head4.png');
    head5 = canvas.loadImage('img/head5.png');
    head6 = canvas.loadImage('img/head6.png');
    head7 = canvas.loadImage('img/head7.png');
    head8 = canvas.loadImage('img/head8.png');
    head9 = canvas.loadImage('img/head9.png');
    head10 = canvas.loadImage('img/head10.png');
    head11 = canvas.loadImage('img/head11.png');
    head12 = canvas.loadImage('img/head12.png');
    head13 = canvas.loadImage('img/head13.png');
    head14 = canvas.loadImage('img/head14.png');
    console.log("Images loaded");
  };

  //creates canvas  
  canvas.setup = () => {   
    console.log("Setup");
    noCanvas();
    canvas.createCanvas(windowWidth, windowHeight); 
    canvas.background(218, 215, 205);  
    
  };  
  
  //draw function  
  canvas.draw = () => {   
    console.log("Draw");
    canvas.frameRate(12);
    canvas.generateImage(); 
    
  };
  
  canvas.setImage = function() {
    let images = [head1, head2, head3, head4, head5, head6, head7, head8, head9, head10, head11, head12, head13, head14];
    let img = canvas.random(images);
    canvas.tint(255, 210);
    canvas.imageMode(canvas.CENTER);
    return img;
  };
  
  canvas.generateImage = function() {
    canvas.image(this.setImage(), canvas.random(10, canvas.width-10), canvas.random(30, windowHeight-30), 140, 175);
  };
};

function setup() {  
  new p5(sketch, canvasContainer);
}