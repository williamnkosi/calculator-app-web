"use client";

import React from "react";

type Props = {
  buttonText: string;
  onClick: () => void;
};

const Button = ({ buttonText, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-zinc-900 text-white font-semibold py-3 rounded-lg hover:bg-zinc-800 transition mb-8"
    >
      {buttonText}
    </button>
  );
};

export default Button;
