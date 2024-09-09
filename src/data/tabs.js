import Image from "next/image";

const tabs = [
  {
    title: "Savor Haven",
    value: "Savor Haven",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-black bg-gradient-to-br from-purple-700 to-violet-900">
        <h1 className="pb-10 text-4xl">Savor Haven</h1>
        <Image
          src="/Savor-Haven.png"
          alt="dummy image"
          width="1000"
          height="1000"
          className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-lg mx-auto"
        />
      </div>
    ),
  },
  {
    title: "Captionizer",
    value: "Captionizer",
    content: (
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
    ),
  },
  {
    title: "WhisperGram",
    value: "WhisperGram",
    content: (
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
    ),
  },
  {
    title: "Weather Forecast",
    value: "Weather Forecast",
    content: (
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
    ),
  },
];
export default tabs;
