const videoWidth = 500;
const videoHeight = 500;
const video = document.getElementById('myVideo');
const imageScaleFactor = 0.5;   // 0.5 because (0.5 + 0.5) = 1
const outputStride = 16;
const flipHorizontal = false;   // Otherwise face flipping hobe

async function setupCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
            'Browser API navigator.mediaDevices.getUserMedia is not available');
    }

    video.width = videoWidth; // Eta basically object & subject body k same frame e impose korche
    video.height = videoHeight;

    const stream = await navigator.mediaDevices.getUserMedia({
        'audio': false,
        'video': {
        facingMode: 'user',
        width: videoWidth,
        height: videoHeight,
        },
    });
    video.srcObject = stream;

    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
        resolve(video);
        };
    });
}

async function loadVideo() {
    const video = await setupCamera();
    video.play();
    return video;
}

loadVideo();

// https://stackoverflow.com/questions/48234696/how-to-put-a-gif-with-canvas/48348567
/* var Img = [];
for (var i = 0; i < 5; i++) {
  Img[i] = new Image();
  Img[i].src = "/images/up/f"+i+".png";
}


function drawAnimatedImage(arr,x,y,angle,factor,changespeed) {
    if (!factor) {
        factor = 1;
    }
    if (!changespeed) {
        changespeed = 1;
    }
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    if (!!arr[Math.round(Date.now()/changespeed) % arr.length]) {
    ctx.drawImage(arr[Math.round(Date.now()/changespeed) % arr.length], -(arr[Math.round(Date.now()/changespeed) % arr.length].width * factor / 2), -(arr[Math.round(Date.now()/changespeed) % arr.length].height * factor / 2), arr[Math.round(Date.now()/changespeed) % arr.length].width * factor, arr[Math.round(Date.now()/changespeed) % arr.length].height * factor);
    }
    ctx.restore();
}

function yop() {
    ctx.clearRect(0,0,1000,1000)
              if (Img.length == 6) {
                  drawAnimatedImage(Img,300,100,0,1,60)
              }
  requestAnimationFrame(yop);
  }
  requestAnimationFrame(yop); */

// For Boxes
const DOMboxes = document.getElementById('boxes');
// For Score
const DOMscore = document.getElementById('score');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// const upBoxArrow = new Image();
const upArrow = new Image();
upArrow.src = 'images/blocks/static/up.png';

// const downBoxArrow = new Image();
const downArrow = new Image();
downArrow.src = 'images/blocks/static/down.png';

// const leftBoxArrow = new Image();
const leftArrow = new Image();
leftArrow.src = 'images/blocks/static/left.png';

// const rightBoxArrow = new Image();
const rightArrow = new Image();
rightArrow.src = 'images/blocks/static/right.png';

// Here comes the special part
const w = canvas.width;
const h = canvas.height;

const centerX = w/2;
const centerY = h/2;

const breakableZoneStart = centerX;
const breakableRightZoneEnd = centerX + (centerX/1.5);
const breakableLeftZoneEnd = centerX - (centerX/1.5);

let boxes = 0;
let score = 0;

let oldX = 0;
let oldY = 0;
let xDirection = '';
let yDirection = '';
let movements = [];     // init array

let direction;

function mostDirection(arr) {
    var max = 1,
        m = [],
        val = arr[0],
        i, x;
    for( i = 0; i < arr.length; i ++ ) {
        x = arr[i]
        if (m[x]) {
            ++m[x] > max && (max = m[i], val = x);
        } else {
            m[x] = 1;
        }
    } return val;    
}

function getDirection(e) {
    xDirection = (oldX < e.x) ? 'right' : 'left' ;
    yDirection = (oldY < e.y) ? 'down' : 'up' ;
    ( Math.abs((e.y - oldY)) > Math.abs((e.x - oldX )) ) ? movements.push(yDirection) : movements.push(xDirection);
    oldX = e.x;
    oldY = e.y;
}

const breakDirections = ['slashDown', 'slashUp', 'slashLeft', 'slashRight'];
const directions = ['right', 'left'];

function showGameData() {
    DOMboxes.textContent = boxes;
    DOMscore.textContent = score;
}

function drawScene() {
    ctx.lineWidth = '1';
    ctx.strokeStyle = '#999999';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(0, 0);
    ctx.lineTo(w, 0);
    ctx.lineTo(centerX, centerY);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.lineTo(centerX, centerY);
    ctx.closePath();
    ctx.stroke();
}

function ctxDrawImage(img, x, y, w, h) {
    ctx.drawImage(img, x, y, w, h);
}

function Box() {
    this.x = centerX;
    this.y = centerY;
    this.breakDirection = breakDirections[Math.floor(Math.random() * breakDirections.length)];
    this.direction = directions[Math.floor(Math.random() * directions.length)];
    // this.speed = Math.round(Math.random() * 3) + 2; // Random speed ?
    this.speed = 4;
    this.w = this.h = 1;
    this.isHandInside = false;
}

Box.prototype.updatePosition = function() {
    if ( this.direction === 'right' ) {
        this.x += this.speed;
    } else {
        this.x -= this.speed * 2;
    }
    this.w += this.speed;
    this.y = centerY - (this.h / 2);
    this.h += this.speed;
    this.drawBox();
};

Box.prototype.drawBox = function() {
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    let image = null;
    switch ( this.breakDirection ) {
        case 'slashDown':
            image = downArrow;
            break;
        case 'slashUp':
            image = upArrow;
            break;
        case 'slashLeft':
            image = leftArrow;
            break;
        case 'slashRight':
            image = rightArrow;
            break;
    }
    ctxDrawImage(image, this.x, this.y, this.w, this.h);
    ctx.fillRect(this.x, this.y, this.w, this.h);

    if ( this.isBreakable() ) {
        ctx.lineWidth = '1';
        ctx.strokeStyle = '#fff'; // Task pending
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    }

};

Box.prototype.isBreakable = function(e) {
    if ( this.direction === 'right' ) {
        return true;
        // return this.x > breakableZoneStart && this.x < breakableRightZoneEnd;
    } else {
        return true;
        // return this.x < breakableZoneStart && this.x > breakableLeftZoneEnd;
    }
};

Box.prototype.isOutOfScreen = function() {
    return this.x > w || this.x + this.w < 0;
};

let aBox = new Box();

const rightHandPosition = {
    x: null,
    y: null
};

const leftHandPosition = {
    x: null,
    y: null
};

function tryToBreak(hand) {

    if( aBox.isHandInside === false 
        && hand.y > aBox.y
        && hand.y < aBox.y + aBox.h
        && hand.x > aBox.x
        && hand.x < aBox.x + aBox.w
        ) {
        aBox.isHandInside = true;
    }

    if( aBox.breakDirection === 'slashDown'
        && aBox.isBreakable()
        && aBox.isHandInside    // Don't remove
        && direction === 'down'
        && hand.y > aBox.y + aBox.h
        && hand.x > aBox.x 
        && hand.x < aBox.x + aBox.w
        ) {
        boxBroken();
    }
    
    if( aBox.breakDirection === 'slashUp'
        && aBox.isBreakable()
        && aBox.isHandInside    
        && direction === 'up'
        && hand.y < aBox.y
        && hand.x > aBox.x 
        && hand.x < aBox.x + aBox.w
        ) {
        boxBroken();
    }

    if( aBox.breakDirection === 'slashLeft'
        && aBox.isBreakable()
        && aBox.isHandInside    
        && direction === 'left'
        && hand.x < aBox.x
        && hand.y > aBox.y 
        && hand.y < aBox.y + aBox.h
        ) {
        boxBroken();
    }

    if( aBox.breakDirection === 'slashRight'
        && aBox.isBreakable()
        && aBox.isHandInside   
        && direction === 'right'
        && hand.x > aBox.x + aBox.w
        && hand.y > aBox.y 
        && hand.y < aBox.y + aBox.h
        ) {
        boxBroken();
    }
}

posenet
    .load()
    .then(function(net) {
        video.play();
        setInterval(() => {
            net
            .estimatePoses(video, flipHorizontal, outputStride)
            .then(function(pose) {
                draw(pose[0].keypoints);
            });
        }, 60);   
    }
)
.catch(err => {
    console.log(err.message);
});
