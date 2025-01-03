"use client";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriterText = () => {
  const [text] = useTypewriter({
    words: ["Desenvolvedor", "Designer"],
    loop: true,
  });
  return (
    <span>
      <span className="font-bold">{text}</span>
      <Cursor />
    </span>
  );
};

export default TypeWriterText;
