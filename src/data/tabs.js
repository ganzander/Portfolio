import Image from "next/image";

const tabs = [
  {
    title: "Savor Haven",
    value: "Savor Haven",
    content: (
      <a
        href="https://savor-haven.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="pb-10 tracking-tighter text-2xl md:text-4xl">
            Savor Haven
          </h1>
          <img
            src="/Savor-Haven.png"
            alt="dummy image"
            className="object-contain object-left-top h-[100%] absolute -bottom-10 inset-x-0 w-[90%] rounded-lg mx-auto"
          />
        </div>
      </a>
    ),
  },
  {
    title: "Captionizer",
    value: "Captionizer",
    content: (
      <a
        href="https://captionizer-star.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="pb-10 text-4xl">Captionizer</h1>
          <Image
            src="/Captionizer.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-lg mx-auto"
          />
        </div>
      </a>
    ),
  },
  {
    title: "WhisperGram",
    value: "WhisperGram",
    content: (
      <a
        href="https://whisper-gram.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="pb-10 text-4xl">WhisperGram</h1>
          <Image
            src="/Whisper Gram.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-lg mx-auto"
          />
        </div>
      </a>
    ),
  },
  {
    title: "Weather Forecast",
    value: "Weather Forecast",
    content: (
      <a
        href="https://weather-sigma-mern.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="pb-10 text-4xl">Weather Forecast</h1>
          <Image
            src="/Weather Forecast.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-lg mx-auto"
          />
        </div>
      </a>
    ),
  },
];
export default tabs;
