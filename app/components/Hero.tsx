import heroImage from "../images/Hero-image.jpg";

export default async function Hero() {
  // TODO: should use background-image instead https://www.w3schools.com/howto/howto_css_parallax.asp
  // TODO: try parallax effect? https://blog.logrocket.com/create-parallax-scrolling-css/
  
  console.log(heroImage.src)
  return (
    <div style={{
      backgroundColor: 'maroon',
      backgroundImage: `url(${heroImage.src})`
    }}
    className="bg-fixed bg-center bg-no-repeat bg-cover w-full h-screen overflow-hidden flex flex-col justify-between">
      <div className="w-full h-0 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></div>
      <div className="w-full h-0 shadow-[0_0_15px_15px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
}