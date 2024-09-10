import Image from "next/image";
const data = [
  {
    title: "March 2024 - July 2024",
    content: (
      <div className="">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">
          Software Developer Intern
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          IFix Tech Global Pvt. Ltd.
        </h2>
        <ul className="text-xs md:text-sm lg:text-xl font-normal mb-8 text-left">
          <li>
            • As a software developer at Ifix Tech Global, I have honed my
            expertise in Backend technologies by developing and deploying
            functionalities for the RERA Bihar Complaints & Grievances
            Management System using Node.js.
          </li>
          <li>
            • My work involved utilizing a diverse tech stack, including MySQL,
            MongoDB, Express, Bcrypt, Nodemailer, Twilio, and Airtel Bulk Push
            API to deliver efficient and secure solutions.
          </li>
          <li>
            • This experience has equipped me with strong skills in managing
            databases, implementing authentication and communication features,
            and ensuring seamless integration of APIs.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://drive.google.com/file/d/1d7RkiD7HJmwJf3-apQqsAMhCrQT6MFcZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/IFix Tech Global.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 w-1/2"
            />
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "June 2023 - July 2023",
    content: (
      <div className="">
        <h1 className="text-2xl md:text-4xl font-semibold mb-2">
          Backend Developer Intern
        </h1>
        <h2 className="text-xl md:text-3xl font-semibold mb-2">
          Mobile Programming India Pvt. Ltd.
        </h2>
        <ul className="text-xs md:text-sm lg:text-xl font-normal mb-8 text-left">
          <li>
            • Implemented CRUD operations for a policy insurance project,
            ensuring data management and integrity.
          </li>
          <li>
            • Gained expertise in database integration and API calls, optimizing
            communication between client and server.
          </li>
          <li>
            • Proficient in using Firebase and OAuth for secure user
            authentication and authorization.
          </li>
          <li>
            • Skilled in MongoDB and MySQL, including designing schemas,
            managing collections and tables, optimizing queries, involving
            complex queries, database normalization, and performance tuning.
          </li>
        </ul>
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://drive.google.com/file/d/1f6wYVkVGv-R2JOZ8-_3I3r4zZN0pKFI2/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Mobile Programming.png"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 w-1/2"
            />
          </a>
        </div>
      </div>
    ),
  },
];

export default data;
