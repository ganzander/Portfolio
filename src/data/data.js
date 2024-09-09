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
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
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
          Mobile Programming LLC Pvt. Ltd.
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
          <Image
            src="https://assets.aceternity.com/templates/startup-1.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
          />
          <Image
            src="https://assets.aceternity.com/templates/startup-2.webp"
            alt="startup template"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];

export default data;
