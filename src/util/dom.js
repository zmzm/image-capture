// утилиты
// получаем элемент по селектору
export const getElement = (selector, parent = document) =>
  parent.querySelector(selector);
// создаем элемент

export const create = (template) => {
  if (typeof template !== 'string') return;
  return new Range().createContextualFragment(template).children[0];
};

// рендерим элемент
export const render = (parent, child, place = 'beforeend') => {
  parent.insertAdjacentElement(place, child);
};
// добавляем атрибуты
// `attrs` - объект
// ключи объекта - названия атрибутов
// значения ключей - значения атрибутов
export const setAttrs = (element, attrs) => {
  if (attrs && (typeof attrs !== 'object' || Array.isArray(attrs))) return;
  Object.keys(attrs).forEach((key) => {
    element.setAttribute(key, attrs[key]);
  });
};

// удаляем атрибуты
// `attrs` - массив
// элементы массива - названия атрибутов
export const removeAttrs = (element, attrs) => {
  if (!Array.isArray(attrs)) return;
  attrs.forEach((name) => {
    element.removeAttribute(name);
  });
};

// DOM-элементы
export const loaderContainer = getElement('.loader-container');
export const app = getElement('#app');
export const video = getElement('video');
export const image = getElement('.result img');
export const photoLink = getElement('.photo-link');
export const canvas = getElement('.result canvas');
export const canvasLink = getElement('.canvas-link');
export const controls = getElement('.controls');
export const grabFrame = getElement('.grab-frame');
export const removePhoto = getElement('.remove-photo');
export const clearCanvas = getElement('.clear-canvas');
export const settings = getElement('.settings');

// хранилище для инпутов
export const inputs = [];
// контекст рисования
export const ctx = canvas.getContext('2d');

// настройки для фото
export const settingDictionary = {
  brightness: 'Яркость',
  colorTemperature: 'Цветовая температура',
  contrast: 'Контрастность',
  saturation: 'Насыщенность',
  sharpness: 'Резкость',
  pan: 'Панорамирование',
  tilt: 'Наклон',
  zoom: 'Масштаб',
};
