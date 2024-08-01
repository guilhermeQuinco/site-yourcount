import React from "react";

const Video = () => {
  return (
    <section className="w-full overflow-hidden mb-[100px] ">
      <div className="max-container padding-container flexCenter flex-col gap-8">
        <div className="flex flexCenter flex-col gap-5 text-center text-white">
          <h1 className="font-bold text-4xl">O seu negócio vai evoluir!</h1>
          <div className="w-[25%] bg-[#f22e9a] h-[3px]" />
          <p className="text-gray-300">
            Soluções desenvolvidas para quem quer se destacar no mercado
          </p>
        </div>

        <div className="w-[80%]  bg-black h-[500px] rounded-xl border-t-2 border-t-[#f22e9a] overflow-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BcI-CfX0LWs?si=Cz3Ydh9unyj4cn9Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
