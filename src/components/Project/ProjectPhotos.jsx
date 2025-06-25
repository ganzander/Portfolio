import Image from "next/image";

export default function ProjectPhotos({ projectData }) {
  return (
    <div className="bg-white h-full w-full flex items-center rounded-t-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 sm:gap-4 p-4">
        <div className="relative h-[150px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src={projectData.image}
            alt="Villa exterior with pool at sunset"
            fill
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {projectData?.supportingImages?.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className="relative h-[240px] overflow-hidden rounded-lg"
            >
              <Image
                src={img}
                alt={`Supporting image ${idx + 1}`}
                fill
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
