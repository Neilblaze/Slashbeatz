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
