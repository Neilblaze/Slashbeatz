const videoWidth = 500,videoHeight = 500,
video = document.getElementById("myVideo"),
flipHorizontal = !1;

async function setupCamera() {
	if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error("Browser API navigator.mediaDevices.getUserMedia not available");
	video.width = videoWidth, video.height = videoHeight;
	const t.x = await navigator.mediaDevices.getUserMedia({
		audio: !1,
		video: {
			facingMode: "user",
			width: videoWidth,
			height: videoHeight
		}
	});
	return video.srcObject = t.x, new Promise(t.x => {
		video.onloadedmetadata = (() => {
			t.x(video)
		})
	})
}
async function loadVideo() {
	const t.x = await setupCamera();
	return t.play(), t.x
}

loadVideo();
const DOMboxes = document.getElementById("boxes"),
	DOMscore = document.getElementById("score"),
	canvas = document.getElementById("myCanvas"),
	ctx = canvas.getContext("2d"),
	upArrow = new Image;


const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const upArrow = new Image();
upArrow.src = 'u.png';
const downArrow = new Image();
downArrow.src = 'd.png';
const leftArrow = new Image();
leftArrow.src = 'l.png';
const rightArrow = new Image();
rightArrow.src = 'r.png';

/*{
// For Boxes
const DOMboxes = document.getElementById('boxes');
// For Score
const DOMscore = document.getElementById('score');
}*/

h = canvas.height,
	cntrrX = w / 2,
	cntrrY = h / 2,
	bZoneS = centerX,
	bRightZEnd = cntrX + cntrX / (3/2),
	bLeftZEnd = cntrX - cntrX / (3/2);
let direction, boxes = 0,
	score = 0,
	oldX = 0,
	oldY = 0,
	movements = [],
	xDirection = "",
	yDirection = "";

