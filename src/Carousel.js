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
    console.log('INDEX');
    console.log(activeIndex);
    const imgs = carouselEl.querySelectorAll('img');
    imgs[activeIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setElements(imgs);
  }, []);

  return (
    <div
      ref={(el) => (carouselEl = el)}
      className="max-w-md p-4 space-x-4 carousel carousel-center bg-white rounded-box"
    >
      {imageSrcs.map((src) => (
        <div className="carousel-item">
          <img alt="" src={src} className="rounded-box" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
