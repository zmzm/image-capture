import { removePhoto, settings } from './util/dom';
import getMedia from './util/getMedia';
import takePhoto from './util/takePhoto';

async function init() {
  const { imageCapture } = await getMedia();

  settings.onsubmit = (e) => {
    e.preventDefault();
    takePhoto({ imageCapture });
    removePhoto.disabled = false;
  };
}

init();
