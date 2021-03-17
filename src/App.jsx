import React, { useState } from "react";
import TitleSection from "./sections/titleSection";

function App() {
  return (
    <div className="min-h-screen">
      <TitleSection
        images={[
          {url: "../header_1.jpeg", bgColor: "bg-amber-500", from: "from-amber-500", to: "to-orange-500"},
          {url: "../header_2.jpeg", bgColor: "bg-cyan-500", from: "from-cyan-500", to: "to-blue-500"},
          {url: "../header_4.jpeg", bgColor: "bg-emerald-600", from: "from-emerald-600", to: "to-indigo-500"},
          {url: "../header_3.jpeg", bgColor: "bg-blue-500", from: "from-blue-500", to: "to-teal-500"},
        ]}
        title="CosmicSail"
        content="Replacing global cargo transport<br> with autonomous sailing vessels."
        cta="Read our whitepaper"
      />
    </div>
  );
}

export default App;
