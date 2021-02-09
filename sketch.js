// Moving your mouse will change the size of the stroke, while left clicking will change the 
// direction and color.
// In this piece, I've been looking at holding symmetry by having balls bounce at the 
// same time symmetrically through the x and y axis through the center. Size of the stroke
// is changeable through movement of the mouse and color and direction are changable
// through a mouse click. 

let x = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let y = 0;
let y1 = 0;
let y2 = 0;
let y3 = 0;
let speed = 5;
let speedx = speed;
let speedx1 = speed;
let speedx2 = speed;
let speedx3 = speed;
let speedy = speed;
let speedy1 = speed;
let speedy2 = speed;
let speedy3 = speed;
let radiusX = 0;
let radiusY = 0;
let color = true;
let clicked = false;
let mode = 0;
let oldspeedx = speed;
let oldspeedx1 = speed;
let oldspeedx2 = speed;
let oldspeedx3 = speed;
let oldspeedy = speed;
let oldspeedy1 = speed;
let oldspeedy2 = speed;
let oldspeedy3 = speed;



function setup() {
    createCanvas(windowWidth, windowHeight);
    x1 = windowWidth;
    y2 = windowHeight;
    x3 = windowWidth;
    y3 = windowHeight;
    background(22, 199, 222);
    fill(75, 130, 180);
    stroke(0, 0, 0, 0);
    alert("This is the statement for the piece titled: Symmetrical Bouncing. Moving your mouse will change the size of the stroke, while left clicking will change the direction and color. In this piece, I've been looking at holding symmetry by having balls bounce at the same time symmetrically through the x and y axis through the center. Size of the stroke is changeable through movement of the mouse and color and direction are changable through a mouse click. ");
}
  
function draw() {
    radiusX = mouseX / 5 + 10;
    radiusY = mouseY / 5 + 10;
    ellipse(x, y, radiusX, radiusY);
    ellipse(x1, y1, radiusX, radiusY);
    ellipse(x2, y2, radiusX, radiusY);
    ellipse(x3, y3, radiusX, radiusY);
    if (x > windowWidth || x < 0) {
        speedx = speedx * -1;
        if (clicked == false) {
            if (color == false) {
                fill(75, 130, 180);
                color = true;
            } else {
                fill(0, 191, 255);
                color = false;
            }
        } else {
            if (color == false) {
                fill(220, 20, 60)
                color = true;
            } else {
                fill(255, 69, 0);
                color = false;
            }
        }
        // fill(25, 0, 255)
        // background(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    }
    if (x1 > windowWidth || x1 < 0) {
        speedx1 = speedx1 * -1;
    }
    if (x2 > windowWidth || x2 < 0) {
        speedx2 = speedx2 * -1;
    }
    if (x3 > windowWidth || x3 < 0) {
        speedx3 = speedx3 * -1;
    }
    if (y > windowHeight || y < 0) {
        speedy = speedy * -1;
        if (clicked == false) {
            if (color == false) {
                fill(75, 130, 180);
                color = true;
            } else {
                fill(0, 191, 255);
                color = false;
            }
        } else {
            if (color == false) {
                fill(220, 20, 60)
                color = true;
            } else {
                fill(255, 69, 0);
                color = false;
            }
        }
        // background(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
    }
    if (y1 > windowHeight || y1 < 0) {
        speedy1 = speedy1 * -1;
    }
    if (y2 > windowHeight || y2 < 0) {
        speedy2 = speedy2 * -1;
    }
    if (y3 > windowHeight || y3 < 0) {
        speedy3 = speedy3 * -1;
    }

    x = x + speedx;
    x1 = x1 + speedx1;
    x2 = x2 + speedx2;
    x3 = x3 + speedx3;
    y = y + speedy;
    y1 = y1 + speedy1;
    y2 = y2 + speedy2;
    y3 = y3 + speedy3;

}

function mouseClicked() {
    // speedx = speedx * -1;
    // speedx1 = speedx1 * -1;
    // speedx2 = speedx2 * -1;
    // speedx3 = speedx3 * -1;
    if (mode == 0) {
        oldspeedx = speedx;
        oldspeedx1 = speedx1;
        oldspeedx2 = speedx2;
        oldspeedx3 = speedx3;
        speedx = 0;
        speedx1 = 0;
        speedx2 = 0;
        speedx3 = 0;
        speedy = speedy * -1;
        speedy1 = speedy1 * -1;
        speedy2 = speedy2 * -1;
        speedy3 = speedy3 * -1;
        mode = 1;
    } else if (mode == 1) {
        speedx = oldspeedx;
        speedx1 = oldspeedx1;
        speedx2 = oldspeedx2;
        speedx3 = oldspeedx3;
        oldspeedy = speedy;
        oldspeedy1 = speedy1;
        oldspeedy2 = speedy2;
        oldspeedy3 = speedy3;
        speedy = 0;
        speedy1 = 0;
        speedy2 = 0;
        speedy3 = 0;
        mode = 2;
    } else {
        speedy = oldspeedy;
        speedy1 = oldspeedy1;
        speedy2 = oldspeedy2;
        speedy3 = oldspeedy3;
        mode = 0;
    }
    
    if (clicked == true) {
        clicked = false;
    } else {
        clicked = true;
    }
    // if (color = true) {
    //     color = false;
    // } else {
    //     color = true;
    // }
    // if (clicked == false) {
    //     if (color == true) {
    //         fill(75, 130, 180);
    //         color = false;
    //     } else {
    //         fill(0, 191, 255);
    //         color = true;
    //     }
    // } else {
    //     if (color == true) {
    //         fill(220, 20, 60)
    //         color = false;
    //     } else {
    //         fill(255, 160, 122);
    //         color = true;
    //     }
    // }
}

// function mouseReleased() {
//     speedx = speedx * -1;
//     speedx1 = speedx1 * -1;
//     speedx2 = speedx2 * -1;
//     speedx3 = speedx3 * -1;
//     speedy = speedy * -1;
//     speedy1 = speedy1 * -1;
//     speedy2 = speedy2 * -1;
//     speedy3 = speedy3 * -1;
// }