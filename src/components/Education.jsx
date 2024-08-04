"use client";
import React, { useEffect, useState } from "react";

export default function Education() {
  return (
    <div className="container mx-auto pt-5" id="education">
      <h2 className=" mb-12 mt-20 text-center text-4xl font-semibold">
        Education
      </h2>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <img
              src="/J.C. Bose UST.png"
              className="h-20 w-20 rounded-lg"
              alt="J.C Bose UST"
            />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2021 - Present</time>
            <div className="text-lg font-semibold">
              B-Tech course in Computer Engineering
            </div>
            <div className="text-lg font-semibold">
              J.C. Bose University of Science and Technology, YMCA
            </div>
            <div>CGPA: 8.98 / 10</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src="/Lions Public School.png"
              className="h-20 w-30 rounded-lg"
              alt="J.C Bose UST"
            />
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2021</time>
            <div className="text-lg font-semibold">Class XII (CBSE)</div>
            <div className="text-lg font-semibold">Lions Public School</div>
            <div>Percentage: 96.6%</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img src="/Ryan Intl School.png" className="h-20 rounded-lg w-20" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2019</time>
            <div className="text-lg font-semibold">Class X (CBSE)</div>
            <div className="text-lg font-semibold">
              Ryan International School
            </div>
            <div>Percentage: 95.8%</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
