import React from "react";
import transition from "../Components/transition";

const ICan: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technologies I Have Worked With
        </h2>
        <div className="space-y-8 leading-10">
          <div>
            <h3 className="text-xl font-semibold">
              Learned and Worked a Lot With:
            </h3>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className=" font-semibold text-blue-500">MSSQL:</span> A
                relational database management system.
                <a
                  href="https://github.com/Shazil0204/Nordic-Nest/tree/Database"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-yellow-500">MYSQL:</span>{" "}
                Another popular relational database management system.
                <a
                  href="https://github.com/MagnusHLund/H2_Davids_book_club/blob/main/Database/3.%20Procedures.sql"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-green-500">C#:</span> A
                modern, object-oriented programming language developed by
                Microsoft.
                <a
                  href="https://github.com/Shazil0204/OOP"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-orange-500">HTML:</span> The
                standard markup language for creating web pages.
                <a
                  href="https://github.com/Shazil0204/Nordic-Nest"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-purple-500">CSS:</span> A
                style sheet language used for describing the presentation of a
                document written in HTML.
                <a
                  href="https://github.com/Shazil0204/Nordic-Nest"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-red-500">ASP.NET:</span> A
                web framework for building modern web apps and services with
                .NET.
                <a
                  href="https://github.com/Shazil0204/Nordic-Nest"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-indigo-500">
                  Tailwind CSS:
                </span>{" "}
                A utility-first CSS framework for rapidly building custom user
                interfaces.
                <a
                  href="https://github.com/Shazil0204/Portfolio"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Worked a Little With:</h3>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-yellow-500">
                  JavaScript (JS):
                </span>{" "}
                A programming language commonly used in web development.
                <a
                  href="https://github.com/Shazil0204/H2-JavaScript"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-blue-500">React TSX:</span>{" "}
                A JavaScript library for building user interfaces, using
                TypeScript.
                <a
                  href="https://github.com/Shazil0204/H2-JavaScript"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-cyan-500">PostgreSQL:</span>{" "}
                An advanced, open-source relational database.
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-gray-500">
                  Bootstrap CSS:
                </span>{" "}
                A popular framework for building responsive, mobile-first
                websites.
                <a
                  href="https://github.com/Shazil0204/VendingMachine_ASP.Net"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-pink-500">
                  SweetAlert.js:
                </span>{" "}
                A library to create beautiful, responsive, customizable alert
                boxes.
                <a
                  href="https://github.com/Shazil0204/Portfolio"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Currently Learning:</h3>
            <ul className="list-disc list-inside space-y-4 mt-4">
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-cyan-500">SCSS:</span> A
                preprocessor scripting language that is interpreted or compiled
                into CSS.
              </li>
              <li className="bg-gray-900 p-1 rounded-xl">
                <span className="font-semibold text-purple-500">PHP:</span> A
                popular general-purpose scripting language that is especially
                suited to web development.
                <a
                  href="https://github.com/Shazil0204/PHP-Learning"
                  className="text-blue-500 hover:underline ml-2"
                >
                  [GitHub Link]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(ICan);
