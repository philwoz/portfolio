import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Phil.
            <br className="hidden lg:inline-block" />I love to to code.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am Junior Developer in Greater Manchester. My background is in warehousing and production.
            However around 4 years ago I began a new career path by starting a part time Open University degree and this is where discovered my love for programming.

            I self-funded and graduated from Codenation Master Coding Bootcamp course where I gained a valuable insight of being a professional developer and now, I am looking for opportunities so I can further my development and gain the valuable experience I need in the tech industry.

            My aim is to combine my two passions in coding which is data science and web development and my ideal role would be in one of these areas as a Junior Developer.

          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
          <div className="flex justify-center pt-6">
            <a
              href="./new_cv_cn.pdf"
              className="inline-flex text-white bg-green-500 border-0  py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              View My C.V
            </a>
            <a
              href="https://github.com/philwoz"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check out my GitHub
            </a>
          </div>
        </div>
        <div className="lg:max -w-lg lg:w-1/4 md:w-1/4 w-4/6 ">
          <img
            className="object-cover  object-center  rounded-md  "
            alt="hero"
            src="./IMG_4958.jpg"
          />
        </div>
      </div>
    </section>
  );
}
