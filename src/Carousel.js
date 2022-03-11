import { useEffect, useRef, useState } from 'react';

const imageSrcs = [
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/Varsity1_ge2q6n',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsity2_urk9ld',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsiy3_anacdo',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsity5_ejg5ay',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsity7_ttfufs',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsity6_r34nac',
  'https://res.cloudinary.com/kclsu-media/image/upload/c_fill,f_auto,fl_any_format,h_380,w_300/v1/temporary/varsity8_mwytva',
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(imageSrcs.length / 2)
  );
  let carouselEl = useRef(null);
  const [elements, setElements] = useState([]); // contains HTMLImageElements

  useEffect(() => {
    const imgs = carouselEl.querySelectorAll('img');
    imgs[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setElements(imgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function shiftRight() {
    try {
      if (!elements[activeIndex + 1] === undefined) throw new Error();
      elements[activeIndex + 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
      setActiveIndex(activeIndex + 1);
    } catch (e) {
      console.log('End of carousel');
      // DO NOTHING
    }
  }

  function shiftLeft() {
    try {
      if (!elements[activeIndex - 1] === undefined) throw new Error();
      elements[activeIndex - 1].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
      setActiveIndex(activeIndex - 1);
    } catch (e) {
      console.log('ERROR');
      // DO NOTHING
    }
  }

  return (
    <div className="mt-1">
      <div
        ref={(el) => (carouselEl = el)}
        className="max-w-7xl p-4 space-x-4 carousel carousel-center bg-white rounded-box relative"
      >
        {imageSrcs.map((src, i) => (
          <div key={i} className="carousel-item">
            <img alt="" src={src} className="rounded-box" />
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mb-30 left-1/2">
        <button
          type="button"
          className="btn btn-sm btn-outline btn-error"
          onClick={shiftLeft}
        >
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
          </svg>
        </button>
        <button
          type="button"
          className="btn btn-sm btn-error btn-outline"
          onClick={shiftRight}
        >
          <svg
            className="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
