var font1, rand; //random is blocked on p5js so use rand or other words but be consistent
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?,.!' ;
var listLength;

function preload (){
  font1 = loadFont('data/bowboat.otf');
  font2 = loadFont('data/GothamMedium.otf');
  font3 = loadFont('data/GothamBook.otf');
}
function setup() {
  createCanvas (windowWidth, windowHeight);
  background(0);
  fill (225);
  textSize (70);
  noStroke();
  textFont(font1);
  textAlign(CENTER);
  listLength=letters.length;
  
}


function draw() {
push ();
  rand = int(random(0, listLength-1));
  textSize (random (40,90));
  background (0,5); 
  text (letters [rand], random(width), random(height));
  frameRate(10);
  pop ();
  
  push();
  textFont (font3);
  textSize (18);
  fill (150);
  text('press space to continue', width/2, 700);
  text('press 2 to screenshot', width/2, 720);
  pop();

 
}
  function keyPressed(){
  if (key===' '){
    background (225);
    push();
    fill(0);
    textFont (font1);
    textSize (150);
    noStroke();
    textAlign(CENTER);
     text('bowboatfont', width/2, 300);
    push ();
    textFont (font2);
    textAlign (CENTER);
    textSize (20);
    fill (0);
    text ('BowBoat typeface is a sans serif font inspired by the idea of modern typeface which is sharp, bold, sleek,', width/2, 430);
    text ('and stylish and also is inspired by the Bow of ship that is also sharp and bold. I use it to add details to the font.', width/2, 460); 
    text ('This font can be used for title, heading, the base for logo, as well as base for typography and poster.', width/2, 490);
    frameRate (0);
    pop();
    push();
  textFont (font3);
  textSize (18);
  fill (150);
  noStroke();
  text('press B to go back', width/2, 700);
  text('press S to go to font showcase', width/2, 720);
  pop();
  }
  
    else if (key==='b'){
      background (random (0), (0), (0));
    textFont (font1);
    fill (225);
    push ();
  rand = int(random(0, listLength-1));
  textSize (random (40,90));
  background (0,5); 
  
  text (letters [rand], random(width), random(height));
  frameRate(10);
  pop ();
  
  
  push();
  textFont (font3);
  textSize (18);
  fill (150);
  text('press space to continue', width/2, 700);
  text('press 2 to screenshot', width/2, 720);
  pop();
    }
   
   else if (key==='s'){
     background (random (0), (0), (0));
    push ();
    fill (225);
    textFont(font1);
    textSize (90);
  text ('ABCDEFGHIJKL', width/2, 150);
  text ('MNOPQRSTUVWXYZ', width/2, 250);
  text ('abcdefghijkl', width/2, 350);
  text ('mnopqrstuvwxyz', width/2, 450);
  text ('1234567890,.:;?!', width/2, 570);
  frameRate(0);
  pop ();
  
  push();
  fill (150);
  textFont (font3);
  textSize (18);
  text ( 'press B to go back', width/2, 700);
  text ('press 1 to know a little bit about BowBoat Font', width/2, 720);
 
  
   }
   
   else if (key==='1'){
   background (225);
   push ();
   fill (0);
   textFont (font1);
    textSize (150);
    noStroke();
    textAlign(CENTER);
     text('bowboatfont', width/2, 250);
     pop();
     frameRate (0);
     push();
     fill(0);
     textFont (font2);
     textSize(20);
     noStroke ();
     textAlign (CENTER);
     text ('Bowboat Font is inspired by the saying "two sides of the same coin" which means : two things', width/2, 380);
     text ('may seem totally different but is actually related. The 2 different type of tip in each letter : one side being squared', width/2, 410);
     text ('and the other being rounded and pointy, which is inspired by the bow of a ship. This is my attempt on expressing', width/2, 440);
     text ('said idiom through a font : in every letter, the squared tip and the rounded pointy tip may seem like two opposite elements;', width/2, 470);
     text ('however, the both of them are actually a part of the same font. Just like a ship or a boat, both have different type of ends', width/2, 500);
     text ('but is actually a part of a same ship or boat.', width/2, 530);
     pop();
     
     push();
     fill (150);
  textFont (font3);
  textSize (18);
  text ( 'press B to go back', width/2, 700);
   }
  
  else if (key == '2'){
    saveCanvas('bowboatsampler', 'jpg');

  }

}
