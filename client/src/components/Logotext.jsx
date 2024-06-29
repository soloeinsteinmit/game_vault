import React from "react";

const Logotext = ({ className = "" }) => {
  return (
    <h1 className={"font-playwrite-fr " + className}>
      Game<span className="text-primary">Vault</span>
      <span className="text-3xl">🎮</span>
    </h1>
  );
};

export default Logotext;
