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
