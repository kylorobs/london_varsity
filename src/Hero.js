const Hero = () => (
  <div className="hero min-h-full max-w-4xl m-auto my-24">
    <div className="flex-col hero-content lg:flex-row-reverse">
      <img
        alt="sports"
        src="https://res.cloudinary.com/the-great-sync/image/upload/c_fit,f_auto,fl_any_format,h_600,w_300/v1645961553/pexels-pixabay-163452_3_fazxmr.jpg"
        className="max-w-sm rounded-lg shadow-2xl"
      />
      <div>
        <h1 className="text-5xl font-bold">London Varsity Series</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <span className="bg-purple text-green-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
          1 - 30 March 2021
        </span>
        {/* <kclsu-countdown
          width="300px"
          msgbg
          margin="0.5em auto"
          text="1- 30 March 2021"
          date="February 28, 2022, 10:00:00"
        /> */}
      </div>
    </div>
  </div>
);

export default Hero;
