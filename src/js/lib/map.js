export const markersCollection = [
  {
    coordinate: [37.8830065, 55.710063069038036],
  },
];

async function initMap(ymap) {
  await ymaps3.ready;

  const coords = ymap.dataset.coordinates.trim().split(',');
  const center = ymap.dataset.center.trim().split(',');

  const {
    YMap,
    YMapDefaultSchemeLayer,
    YMapDefaultFeaturesLayer,
    YMapMarker,
    YMapCenterLocation,
  } = ymaps3;
  const map = new YMap(ymap, {
    location: {
      center: [center[0], center[1]],
      zoom: 15,
    },
    behaviors: ['default', 'drag', 'scrollZoom', 'multiTouch'],
  });

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer({ zIndex: 1800 }));

  markersCollection.forEach(el => {
    let content = document.createElement('div');
    content.dataset.index = el.idx;
    content.classList.add('marker', el.type);
    content.innerHTML = `
 <svg viewBox="0 0 100 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="100" height="100" transform="translate(0 0.44043)" fill="#EE1B24"/>
<path d="M75.85 39.3869L76.0009 75.6006H25V39.3869H50.5005M75.85 39.3869H50.5005M75.85 39.3869L50.5005 25.2032V39.3869" stroke="white" stroke-width="1.81068"/>
<path d="M32.2577 57.2059V47.3694H34.1407L38.3283 54.3112H37.3306L41.4479 47.3694H43.3309L43.3449 57.2059H41.209L41.1949 50.6435H41.6025L38.3002 56.1661H37.2884L33.9159 50.6435H34.3936V57.2059H32.2577Z" fill="white"/>
<path d="M46.8398 51.3321H51.5754V53.1027H46.8398V51.3321ZM47.0084 55.3791H52.3623V57.2059H44.746V47.3694H52.1796V49.1961H47.0084V55.3791Z" fill="white"/>
<path d="M53.7225 57.2059V47.3694H60.6644L60.6503 49.2243H55.451L55.9709 48.7043L55.985 57.2059H53.7225Z" fill="white"/>
<path d="M59.2882 57.2059L63.6725 47.3694H65.9209L70.3192 57.2059H67.9303L64.333 48.5216H65.2323L61.6209 57.2059H59.2882ZM61.4804 55.0981L62.0846 53.3697H67.1434L67.7617 55.0981H61.4804Z" fill="white"/>
<path d="M34.8939 66.3746V64.6321H39.7559V66.3746H34.8939ZM36.1867 60.4726C36.9267 60.4726 37.6059 60.5991 38.2242 60.852C38.8425 61.0956 39.3812 61.4469 39.8402 61.906C40.2993 62.365 40.6553 62.9037 40.9082 63.522C41.1612 64.1403 41.2876 64.8195 41.2876 65.5596C41.2876 66.2996 41.1612 66.9788 40.9082 67.5971C40.6553 68.2154 40.2993 68.7541 39.8402 69.2131C39.3812 69.6722 38.8425 70.0282 38.2242 70.2811C37.6059 70.5247 36.9267 70.6465 36.1867 70.6465C35.3154 70.6465 34.5285 70.4966 33.8259 70.1968C33.1326 69.897 32.5518 69.4614 32.0834 68.8899L33.5308 67.5409C33.8774 67.9344 34.2615 68.2295 34.6831 68.4262C35.1046 68.6136 35.5684 68.7073 36.0742 68.7073C36.4958 68.7073 36.8846 68.6323 37.2406 68.4824C37.6059 68.3232 37.9151 68.1077 38.168 67.836C38.4303 67.555 38.6271 67.2224 38.7582 66.8383C38.8987 66.4542 38.969 66.028 38.969 65.5596C38.969 65.0911 38.8987 64.6649 38.7582 64.2808C38.6271 63.8967 38.4303 63.5688 38.168 63.2971C37.9151 63.0161 37.6059 62.8006 37.2406 62.6507C36.8846 62.4915 36.4958 62.4118 36.0742 62.4118C35.5684 62.4118 35.1046 62.5102 34.6831 62.7069C34.2615 62.8943 33.8774 63.1847 33.5308 63.5782L32.0834 62.2292C32.5518 61.6577 33.1326 61.2221 33.8259 60.9223C34.5285 60.6225 35.3154 60.4726 36.1867 60.4726Z" fill="white"/>
<path d="M44.5319 70.4778V61.9762L45.0519 62.4962H41.3983V60.6413H49.928V62.4962H46.2744L46.7803 61.9762V70.4778H44.5319Z" fill="white"/>
<path d="M57.7523 70.4778L54.6889 65.7422L56.5297 64.6321L60.3379 70.4778H57.7523ZM51.3585 70.4778V60.6413H53.6209V70.4778H51.3585ZM52.9605 66.5151V64.6181H56.3892V66.5151H52.9605ZM56.7405 65.8125L54.6467 65.5596L57.8366 60.6413H60.2395L56.7405 65.8125Z" fill="white"/>
<path d="M50 115.44L37.0096 92.9404L62.9904 92.9404L50 115.44Z" fill="#EE1B24"/>
</svg>


      `;

    content.style.height = window.innerWidth <= 768 ? '15.6rem' : '11.6rem';
    content.style.width = window.innerWidth <= 768 ? '14rem' : '10rem';
    content.style.position = 'relative';
    content.style.top = window.innerWidth <= 768 ? '-15.6rem' : '-11.6rem'; // вверх - на высоту маркера
    content.style.left = window.innerWidth <= 768 ? '-7rem' : '-5rem'; // влево - на половину ширины

    const marker = new YMapMarker(
      {
        coordinates: [coords[0], coords[1]],
        draggable: false,
      },
      content
    );
    map.addChild(marker);
  });
}

if (document.getElementById('ymap')) {
  initMap(document.getElementById('ymap'));
}
