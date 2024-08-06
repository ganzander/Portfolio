import React from "react";

export default function Card({ image, title, subtitle, link }) {
  return (
    <a
      href={link}
      className="m-4 block max-w-sm overflow-hidden rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full" />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb- text-2xl font-semibold">{title}</h2>
          <p className="mb-4 text-sm ">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}
