import React, { useState } from "react";
import TitleSection from "./sections/titleSection";

function App() {
  return (
    <div className="min-h-screen">
      <TitleSection
        images={["../header_1.jpeg", "../header_2.jpeg", "../header_4.jpeg", "../header_3.jpeg"]}
        title="CosmicSail"
        content="Replacing global cargo transport<br> with autonomous sailing vessels."
        cta="Read our whitepaper"
      />
    </div>
  );
}

export default App;
