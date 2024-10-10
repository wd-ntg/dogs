import React from "react";

function ContainerPage({children}) {
  return (
    <div
      className={`grid sm:grid-cols-8 sm:grid-rows-1 min-h-screen ${
        mode ? "bg-[#f0e7db]/60 text-black" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default ContainerPage;
