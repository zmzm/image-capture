import { image, photoLink, setAttrs } from './dom';

const defaultSettings = {
  imageHeight: 720,
  imageWidth: 1280,
};

async function takePhoto({ settings = defaultSettings, imageCapture }) {
  try {
    const blob = await imageCapture.takePhoto(settings);
    const photoSrc = URL.createObjectURL(blob);

    image.src = photoSrc;
    setAttrs(photoLink, {
      href: photoSrc,
      download: `my-photo-${Date.now()}.png`,
      style: 'display: block;',
    });
  } catch (e) {
    throw new Error(e);
  }
}

export default takePhoto;
