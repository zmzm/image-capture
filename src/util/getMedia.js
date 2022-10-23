import { app, loader, video } from './dom';

const getDefaultConstraints = {
  video: {
    pan: true,
    tilt: true,
    zoom: true,
  },
};

async function getMedia(constraints = getDefaultConstraints) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
    const videoTrack = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(videoTrack);

    loader.style.display = 'none';
    app.style.display = 'flex';

    return { imageCapture, videoTrack };
  } catch (e) {
    throw new Error(e);
  }
}

export default getMedia;
