export function remToPx(remValue) {
  var htmlFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );

  var pxValue = remValue * htmlFontSize;

  return Math.round(pxValue) + 'px';
}

export const removeClasses = (array, className) => {
  for (var i = 0; i < array.length; i++) {
    array[i].classList.remove(className);
  }
};
