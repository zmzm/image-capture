import {
  app,
  create,
  inputs,
  loader,
  render,
  settingDictionary,
  settings,
  video,
} from './dom';

const defaultConstraints = {
  video: true,
};

async function getMedia() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(
      defaultConstraints
    );
    video.srcObject = stream;
    const videoTrack = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(videoTrack);

    const trackCapabilities = videoTrack.getCapabilities();
    const trackSettings = videoTrack.getSettings();

    console.log(trackSettings);

    Object.keys(settingDictionary).forEach((key) => {
      if (key in trackSettings) {
        const fieldTemplate = `
          <div class="field">
            <label for="${key}">
              ${settingDictionary[key]}
            </label>
            <input
              type="range"
              id=${key}
              name=${key}
              min=${trackCapabilities[key].min}
              max=${trackCapabilities[key].max}
              step=${trackCapabilities[key].step}
              value=${trackSettings[key]}
            />
            <p>${trackSettings[key]}</p>
          </div>
        `;
        const field = create(fieldTemplate);
        const [, input, info$] = field.children;
        input.oninput = ({ target: { value } }) => {
          info$.textContent = value;
        };
        inputs.push(input);
        render(settings, field);
      }
    });

    loader.style.display = 'none';
    app.style.display = 'flex';

    return imageCapture;
  } catch (e) {
    throw new Error(e);
  }
}

export default getMedia;
