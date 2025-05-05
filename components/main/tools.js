import Lottie from "lottie-react";
import htmlLottie from "../styles/html.json";
import cssLottie from "../styles/css.json";
import jsLottie from "../styles/js.json";
import pyLottie from "../styles/py.json";
import dockerLottie from "../styles/docker.json";
import githubLottie from "../styles/github.json";

function Tools() {
  return (
    <section className="bg-transparent h-screen pt-48 xsm:pt-12">
      <div className="text-left word-wrap">
        <h1 className="text-6xl xsm:text-3xl font-extrabold tracking-tight leading-none text-white text-center mb-2">
          Tools
        </h1>
        <div className="grid justify-center grid-cols-4 gap-4">
          <Lottie
            className="h-70 w-70"
            animationData={htmlLottie}
            loop={true}
          />
          <Lottie className="h-70 w-70" animationData={cssLottie} loop={true} />
          <Lottie className="h-70 w-70" animationData={jsLottie} loop={true} />
          <Lottie className="h-70 w-70" animationData={pyLottie} loop={true} />
          <Lottie
            className="h-70 w-70"
            animationData={dockerLottie}
            loop={true}
          />
          <Lottie
            className="h-70 w-70"
            animationData={githubLottie}
            loop={true}
          />
          <img
            className="h-60 w-60 xsm:h-12 xsm:w-12 rounded-full object-cover object-center"
            src="django.png"
            alt="django image"
          />
          <img
            className="h-60 w-60 xsm:h-12 xsm:w-12 rounded-full object-cover object-center"
            src="laravel.png"
            alt="laravel image"
          />
        </div>
      </div>
    </section>
  );
}
export default Tools;
