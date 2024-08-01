import Image from "next/image";

interface Props {
  src: any;
}

const Hero: React.FC<Props> = async ({ src }) => {

  return (
    <>
    <div className="w-screen absolute left-0 h-[50vh] shadow-xl">
      <Image
        src={src}
        alt="Hero Image"
        priority
        fill
        className="object-cover w-full h-full"
      />
    </div>
    <div className="h-[50vh]"></div>
    </>
  );
};

export default Hero;
