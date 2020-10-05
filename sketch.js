const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var sanitizerimg,maskimg,glovesimg;
var virusimg,trubishimg,bg
var virus,sanitizer,mask,gloves,trubish; 

function preload(){
 sanitizerimg=loadImage("images/sanitizer.png");
 maskimg=loadImage("images/mask.png");
 virusimg=loadImage("images/corona.png");
 trubishimg=loadImage("images/trubish.png");
 glovesimg=loadImage("images/gloves.png");
 
}

function setup(){
createCanvas(1200,800)
bg= new Bg();

}

function draw(){
    showsanitizer();
    showmask();
    showtrubish();
    showgloves();
    showvirus();
    bg.display();
    background(bg);
    drawSprites();
}   
function showsanitizer(){
    if(frameCount % 90 === 0){
        sanitizer=createSprite(random(20,1180),850,50,50);
        sanitizer.addImage(sanitizerimg);
        sanitizer.scale=0.15;
        sanitizer.velocityY=-2;
        if(sanitizer.y<200){
           // sanitizer.velocityY=sanitizer.velocityY=+2
        }
        
    }
}
function showmask(){
     if(frameCount% 90===0){
        mask=createSprite(random(20,1180),850,50,50);
        mask.addImage(maskimg);
        mask.scale=0.16;
        mask.velocityY=-2;
        }

}
function showvirus(){
    if(frameCount% 300===0){
        virus=createSprite(random(20,1180),850,50,50);
        virus.addImage(virusimg);
        virus.scale=0.5;
        virus.velocityY=-2;
}
}
function showtrubish(){
    if(frameCount% 150===0){
       trubish=createSprite(random(20,1180),850,50,50);
       trubish.addImage(trubishimg);
       trubish.scale=0.07;
       trubish.velocityY=-2;
}
}
function showgloves(){
    if(frameCount% 90===0){
        gloves=createSprite(random(20,1180),850,50,50);
        gloves.addImage(glovesimg);
        gloves.scale=0.1;
        gloves.velocityY=-2;
}
}