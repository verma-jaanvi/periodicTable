import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        periodicly
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          {" "}
          a place for every element.
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora blanditiis voluptatibus illum quasi quam sequi ratione, minus explicabo rem non culpa reiciendis. Repudiandae amet blanditiis magnam reiciendis fugit odio rerum?
        Assumenda accusantium ipsam cupiditate corporis minima, optio earum ratione tenetur necessitatibus nam nesciunt illum provident fuga? Aspernatur provident, quos quo suscipit ipsa dignissimos voluptate nemo asperiores tempore nostrum distinctio sint!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="https://www.thoughtco.com/cool-chemistry-experiments-604271"
          className="bg-gradient-to-r from-blue-900 to-green-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore Documentation
        </a>
        <a href="https://learning-center.homesciencetools.com/article/color-change-chemistry/" className="py-3 px-4 mx-3 rounded-md border">
          Gallery of Colors
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-900 shadow-sm shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-900 shadow-sm shadow-yellow-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
