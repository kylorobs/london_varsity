import Carousel from './Carousel';

const Hero = () => (
  <div className="hero min-h-screen max-w-4xl m-auto">
    <div className="flex-col hero-content lg:flex-row-reverse">
      {/* <img
        alt="sports"
        src="https://res.cloudinary.com/the-great-sync/image/upload/c_fit,f_auto,fl_any_format,h_600,w_300/v1645961553/pexels-pixabay-163452_3_fazxmr.jpg"
        className="max-w-sm rounded-lg shadow-2xl"
      /> */}
      <Carousel />
      <div>
        <h1 className="text-5xl font-bold">London Varsity Series</h1>
        <p className="py-6">
          Sports teams from King’s College London Students’ Union (KCLSU) and
          University College London Union (UCLU) will compete in the great
          tradition that is the London Varsity Series.
        </p>
        <p>
          Historically a friendly rugby game between King’s and UCL, Varsity has
          evolved into a full week of fixtures spanning several sports.
        </p>
        <span className="bg-yellow font-bold text-purple text-xl font-medium mr-2 px-2.5 py-0.5 rounded">
          17-21 March 2021
        </span>
      </div>
    </div>
  </div>
);

export default Hero;
