import Image from "next/image";

interface Props {
  src: any;
}

const Hero: React.FC<Props> = async ({ src }) => {
  return (
    <div className="relative w-screen ml-[calc(50%-50vw)] h-[50vh] shadow-xl">
      <Image
        src={src}
        alt="Hero Image"
        priority
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
