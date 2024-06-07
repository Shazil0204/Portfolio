import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-8 pt-16 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <img
          src="/MEeee.jpg"
          alt="Shazil Shahid"
          className="w-32 h-40 rounded-full mx-auto mb-4 "
        />
        <h1 className="text-4xl font-bold">Shazil Shahid</h1>
        <p className="text-gray-400">IT-data med speciale i programmering</p>
        <a
          href="mailto:ssq.zbc.23@gmail.com"
          className="text-blue-400 hover:underline"
        >
          ssq.zbc.23@gmail.com
        </a>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Profil</h2>
        <p>
          Jeg er en engageret og passioneret studerende på IT-data med speciale
          i programmering. Jeg har en solid baggrund inden for flere
          programmeringssprog og webteknologier. Jeg er særlig interesseret i
          frontend-design og databasearbejde, og jeg er altid ivrig efter at
          lære og udvikle mine færdigheder yderligere.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Uddannelse</h2>
        <p>
          <strong>IT-data med speciale i programmering</strong> <br />
          ZBC (Zealand Business College) <br />
          Nuværende studerende
        </p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Erhvervserfaring</h2>
        <ul className="list-disc list-inside">
          <li>FC Distribution | Medarbejder | 2017 - 2021</li>
          <li>Fakta (Coop 365) | Medarbejder | 2020 - 2022</li>
          <li>Wolt | Medarbejder | 2023 - Nuværende</li>
          <li>DAO | Medarbejder | 2024</li>
          <li>JustEat | Medarbejder | 2024 - Nuværende</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Færdigheder</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Sprog</h3>
            <ul className="list-disc list-inside">
              <li>Urdu (modersmål)</li>
              <li>Engelsk</li>
              <li>Dansk</li>
              <li>Hindi</li>
              <li>Punjabi</li>
              <li>Hindko</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">
              Programmeringssprog og teknologier
            </h3>
            <ul className="list-disc list-inside">
              <li>C#</li>
              <li>HTML, CSS</li>
              <li>JavaScript, React (TSX)</li>
              <li>MSSQL, MySQL, PostgreSQL (lidt)</li>
              <li>Tailwind CSS, Bootstrap (lidt)</li>
              <li>SweetAlert.js (lidt)</li>
              <li>SCSS (i gang med)</li>
              <li>PHP (i gang med)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personlige Egenskaber</h2>
        <ul className="list-disc list-inside">
          <li>Samarbejdsevner</li>
          <li>Fokus på arbejde</li>
          <li>Venlig</li>
          <li>Passioneret omkring frontend design</li>
          <li>Elsker databasearbejde</li>
          <li>Interesse for astronomi</li>
        </ul>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/shazil0204"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Besøg min GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
