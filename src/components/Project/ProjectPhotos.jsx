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
          <div className="relative h-[240px] rounded-lg overflow-hidden">
            <Image
              src={projectData.image}
              alt="Modern white villa with pool"
              fill
              className="object-cover object-left-top"
            />
          </div>

          <div className="relative h-[240px] rounded-lg overflow-hidden">
            <Image
              src={projectData.image}
              alt="Aerial view of waterfront development"
              fill
              className="object-cover object-right-top"
            />
          </div>

          <div className="relative h-[240px] rounded-lg overflow-hidden">
            <Image
              src={projectData.image}
              alt="Villa entrance with steps and lighting"
              fill
              className="object-cover object-left-bottom"
            />
          </div>

          <div className="relative h-[240px] rounded-lg overflow-hidden">
            <Image
              src={projectData.image}
              alt="Villa exterior with open plan design"
              fill
              className="object-cover object-right-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
