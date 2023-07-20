import { useState } from "react";

type GifImageProps = {
  src?: string;
  title?: string;
};

const GifImage = ({ src, title }: GifImageProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <li
      className="lg:w-1/3 md:w-1/2 w-full flex justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={!src ? "https://placeholder.co/200x200" : src}
        width={200}
        height={200}
        alt="Gif"
        className="object-contain"
        loading="lazy"
      />
      <div
        className={`absolute px-4 py-2 bg-slate-400 text-gray-600 top-[-10%] right-[-10%] rounded ${
          isHovered ? "block" : "hidden"
        }`}
      >
        <span>{title}</span>
      </div>
    </li>
  );
};

export default GifImage;
