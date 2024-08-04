"use client";
import React, { useEffect, useState } from "react";

export default function Experience() {
  return (
    <div className="container mx-auto pt-5" id="experiences">
      <h2 className=" mb-12 mt-20 text-center text-4xl font-semibold">
        Work Experience
      </h2>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <img
              src="/iFix Tech Global.jpeg"
              className="h-20 w-20 rounded-lg"
              alt="iFix Tech Global"
            />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">March 2024 - July 2024</time>
            <div className="text-lg font-semibold">Software Developer</div>
            <div className="text-lg font-semibold">
              IFix Tech Global Pvt. Ltd.
            </div>
            • As a software developer at Ifix Tech Global, I have honed my
            expertise in backend technologies by developing and deploying robust
            functionalities for the RERA Bihar project using Node.js.
            <br />• My work involved utilizing a diverse tech stack, including
            MySQL, MongoDB, Express, Bcrypt, Nodemailer, Twilio, and Airtel Bulk
            Push API, to deliver efficient and secure solutions.
            <br /> • This experience has equipped me with strong skills in
            managing databases, implementing authentication and communication
            features, and ensuring seamless integration of APIs.
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <img
              src="/Mobile Programming.png"
              className="h-20 w-20 rounded-lg"
              alt="Mobile Programming"
            />
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">June 2023 - July 2023</time>
            <div className="text-lg font-semibold">
              Backend Developer Internship
            </div>
            <div className="text-lg font-semibold">
              Mobile Programming India Pvt. Ltd.
            </div>
            • Implemented CRUD operations for a policy insurance project,
            ensuring data management and integrity.
            <br /> • Gained expertise in database integration and API calls,
            optimizing communication between client & server.
            <br /> • Proficient in using Firebase and OAuth for secure user
            authentication and authorization.
            <br /> • Skilled in MongoDB and MySQL, including designing schemas,
            managing collections and tables, optimizing queries, involving
            complex queries, database normalization, and performance tuning.
          </div>
        </li>
      </ul>
    </div>
  );
}
