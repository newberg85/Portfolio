import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div className="w-[298px] h-[298px] xl:w-[550px] xl:h-[550px]">
        <Image
          src="/assets/right-image.png"
          priority
          quality={100}
          fill
          alt=""
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Photo;
