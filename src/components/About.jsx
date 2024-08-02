import React from "react";
const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Robert Butcher, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export default function About() {
  return (
    <div className="container mx-auto" id="about">
      <h2 className="mt-20 text-center text-4xl font-semibold">About</h2>
      <h3 className="p-4 text-6xl uppercase lg:text-[8rem]">{ABOUT.text1}</h3>
      <p className="mr-24 pl-4 text-lg leading-loose">{ABOUT.text2}</p>
    </div>
  );
}
