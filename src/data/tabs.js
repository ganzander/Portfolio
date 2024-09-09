import Image from "next/image";
const tabs = [
  {
    title: "Savor Haven",
    value: "Savor Haven",
    content: (
      <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
        <p>Savor Haven</p>
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/Savor-Haven.png"
            alt="Savor-Haven"
            width="1000"
            height="1000"
            className="object-cover rounded-lg w-full mx-auto"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Whisper Gram",
    value: "Whisper Gram",
    content: (
      <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
        <p>Whisper Gram</p>
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/Whisper Gram.png"
            alt="Whisper Gram"
            width="1000"
            height="1000"
            className="object-cover rounded-lg w-full mx-auto"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Captionizer",
    value: "Captionizer",
    content: (
      <div className="cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
        <p>Captionizer</p>
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/Captionizer.png"
            alt="Captionizer"
            width="1000"
            height="1000"
            className="object-cover rounded-lg w-full mx-auto"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Weather Forecast",
    value: "Weather Forecast",
    content: (
      <div className="cursor-pointer w-full  sm:h-[50rem] overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-white to-gray-300">
        <p>Weather Forecast</p>
        <div className="flex justify-center items-center mt-10">
          <Image
            src="/Weather Forecast.png"
            alt="Weather Forecast"
            width="1000"
            height="1000"
            className="object-cover rounded-lg w-full mx-auto"
          />
        </div>
      </div>
    ),
  },
];
export default tabs;
