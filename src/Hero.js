import Carousel from './Carousel';

const Hero = () => (
  <div className="hero min-h-screen max-w-4xl m-auto">
    <div className="flex-col hero-content lg:flex-row-reverse mb-8">
      <Carousel />
      <div>
        <h1 className="text-5xl font-bold">London Varsity Series</h1>
        <p className="py-6">
          Sports teams from King’s College London Students’ Union (KCLSU) and
          University College London Union (UCLU) will compete in the great
          tradition that is the London Varsity Series.
        </p>
        <p className="mb-6">
          Historically a friendly rugby game between King’s and UCL, Varsity has
          evolved into a full week of fixtures spanning several sports.
        </p>

        <span className="bg-purple font-bold text-white text-xl font-medium px-2.5 py-0.5 rounded">
          17-21 March 2021
        </span>
      </div>
    </div>
  </div>
);

export default Hero;
