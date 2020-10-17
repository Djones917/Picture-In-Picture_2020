const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      videoElement.srcObject = mediaStream;
      videoElement.onloadedmetadata = () => {
        videoElement.play();
      }
    } catch (error) {
      console.log('Whoops, error here:', error);
    }
}

button.addEventListener('click', asyn () => {
  // Disable Button
  button.disabled = true;
  // Start Pictue In Picture
  await videoElement.requestPictureInPictue();

});

// On Load
selectMediaStream();
