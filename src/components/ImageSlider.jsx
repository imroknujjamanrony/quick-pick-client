import { useEffect, useState } from "react";

export default function Carousel({ carouselItems, isOrganic, offer }) {
  console.log(carouselItems);
  const [currentSlider, setCurrentSlider] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === carouselItems.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [carouselItems.length, currentSlider]);

  return (
    <div className="relative">
      <div
        className="flex h-60 w-full transform flex-col items-center justify-center gap-5 bg-cover bg-center duration-1000 ease-linear sm:h-96 md:h-[540px] lg:gap-10"
        style={{ backgroundImage: `url(${carouselItems[currentSlider]})` }}
      >
        {/* Tags in top left corner */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {offer && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {offer} OFF
            </span>
          )}
          {isOrganic && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              ORGANIC
            </span>
          )}
        </div>
      </div>

      {/* Slider indicators */}
      <div className="flex items-center justify-center gap-3 p-2 mt-5">
        {carouselItems.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide}
            className={`h-6 w-10 cursor-pointer rounded-md object-cover sm:h-8 md:h-12 md:w-20 ${
              currentSlider === inx ? "ring-2 ring-black" : "opacity-50"
            }`}
            alt={slide.title}
          />
        ))}
      </div>
    </div>
  );
}
