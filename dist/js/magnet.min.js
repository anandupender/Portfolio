let mu = 35;
let muSFriction = .15;
let muKFriction = .01;
let g = -9.8;
let movers = [];
let totalMovers = 23;
let magnet;
let magnetQ = 30000;
let magnetPosition;
let magnetDiameter = 100;

let pressed = false;
var started = false;

function setup(){
    cnv = createCanvas(window.innerWidth,window.innerHeight);
    reset();
    noLoop();

    // frameRate(100);
}

function startMagnets(){
    started = true;
    loop();
 }

function draw(){
    if(started){

        // if(pressed){
        //     // background(0);
        //     background(255,255,255);
        // }
        // else{
        //     background('#EAE4D7');
        // }
        background('#EAE4D7');

        //set magnet position
        magnetPosition = createVector(mouseX,mouseY);

        push();

        for (let i = 0; i < movers.length; i++) {

            //calculate magnet force
            let distance =  movers[i].position.dist(magnetPosition);
            let f = mu*magnetQ*movers[i].q/(4*Math.PI*Math.pow(distance,4));
            let magnetForce;

            //repel force (change direction)
            if(pressed){
                magnetForce = p5.Vector.sub(movers[i].position,magnetPosition);
            }
            //attract
            else{
                magnetForce = p5.Vector.sub(magnetPosition,movers[i].position);
            }

            // get direction between magnet and mover, then multiply by magnitude of force
            magnetForce.normalize();
            magnetForce.mult(f);

            //setup static friction
            let staticDirectionUnit = createVector(magnetForce.x,magnetForce.y);
            staticDirectionUnit.normalize();

            //setup kinetic friction (based on mass)
            let velUnit = createVector(movers[i].velocity.x,movers[i].velocity.y);
            velUnit.normalize();    //direction of mover

            //static friction: if not moving...
            if(movers[i].velocity.mag() == 0){
                let staticForce = p5.Vector.mult(staticDirectionUnit, movers[i].mass*muSFriction*g);

                //if magnet is stronger than static force, apply magnet force
                if(magnetForce.mag() > staticForce.mag()){
                    if(distance > movers[i].radius + magnetDiameter/2){
                        movers[i].applyForce(magnetForce);
                        movers[i].update(i);
                    }else if (distance < movers[i].radius + magnetDiameter/2){
                        movers[i].adjust(magnetPosition,magnetDiameter);
                    }else{
                        movers[i].stop();
                    }
                }
            }else{ //kinetic force if already moving!
                let kineticForce = p5.Vector.mult(velUnit, movers[i].mass*muKFriction*g);

                if(magnetForce.mag() > kineticForce.mag()){
                    if(distance > movers[i].radius + magnetDiameter/2){
                        movers[i].applyForce(magnetForce);
                        movers[i].update(i);

                        
                    }else if (distance < movers[i].radius + magnetDiameter/2){
                        movers[i].adjust(magnetPosition,magnetDiameter);
                    }else{
                        movers[i].stop();
                        
                    }
                }else{
                    if(movers[i].velocity.mag() < .1){
                        movers[i].applyForce(kineticForce);  //apply this force until velocity reaches zero - as in, dont cross over to the other direction
                        movers[i].update(i);
                        
                    }else{
                        movers[i].stop();

                    }
                }
            }
            movers[i].display();
        }

        //draw magnet
        if(pressed){
            // stroke(245);
            stroke(0);
        }
        else{
            stroke(0);
        }
        noFill();
        strokeWeight(4);
        circle(magnetPosition.x,magnetPosition.y,magnetDiameter);


        pop();
    }
}

function mousePressed(){
    pressed = true;
}

function mouseReleased() {
    pressed = false;
  }
  

// Restart all the Mover objects randomly
function reset() {
    for (let i = 0; i < totalMovers; i++) {
      movers[i] = new Mover(random(0, width),random(0, height),random(15,25),color(random(0,255),random(0,255),random(0,255)));
    }
  }

function Mover(x, y,r,c) {
    this.radius = r;
    this.mass = r/100;
    this.q = r*100;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.prevVelocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.color = c;
  }

  // Newton's 2nd law: F = M * A
// or A = F / M
Mover.prototype.applyForce = function(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
};

Mover.prototype.update = function(pos) {
    // Velocity changes according to acceleration
    this.prevVelocity = createVector(this.velocity.x,this.velocity.y);
    this.velocity.add(this.acceleration);

    // position changes by velocity - BUT check to make sure the future circle position and the magnet position don't overlap
    let futurePosition = p5.Vector.add(this.position, this.velocity);
    if(p5.Vector.dist(futurePosition,magnetPosition) < magnetDiameter/2 + this.radius){
        this.adjust(magnetPosition,magnetDiameter);
    }else{
        this.position.add(this.velocity);
    }

    //check for collisions - yay! it works!
    for (let j = 0; j < movers.length; j++) {
        if(j != pos && p5.Vector.dist(futurePosition,movers[j].position) < movers[j].radius + this.radius){
            this.adjust(movers[j].position,movers[j].radius*2);
            console.log("anan");
        }
    }

    // We must clear acceleration each frame
    this.acceleration.mult(0);
};


Mover.prototype.stop = function() {
    this.velocity = createVector(0, 0);
};

Mover.prototype.adjust = function(comparedPosition, comparedDiameter) {
    //unit vector direction between magnet and point
    let unit = p5.Vector.sub(this.position,comparedPosition).normalize();
    unit.mult(comparedDiameter/2 + this.radius);
    this.position = p5.Vector.add(comparedPosition, unit);
    this.velocity = createVector(0, 0);
};

Mover.prototype.display = function() {
    noStroke();
    if(pressed){
        fill(color("#E94F37"));
    }
      else{
        fill(color("#195CC8"));
    }
    circle(this.position.x, this.position.y, this.radius*2);
};

Mover.prototype.collide = function(){
    
}