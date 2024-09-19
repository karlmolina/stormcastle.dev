import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import stormcastlelogo from "./assets/stormcastlelogo.svg";

function App() {
  return (
    <>
      <div
        className={
          "flex items-center justify-center h-full p-6 flex-col text-xl sm:text-2xl font-thin text-gray-700"
        }
      >
        <img
          width={500}
          src={stormcastlelogo}
          alt="Storm Castle Software Logo"
        />
        <p className="mt-10 text-center">
          Full stack web apps, mobile apps, websites, software consulting.
        </p>
        <p className="mt-3">Bozeman, MT</p>
        <a
          href="mailto:karlgmolina@gmail.com"
          className="mt-10 hover:underline"
        >
          Contact me
        </a>
      </div>
    </>
  );
}

export default App;
