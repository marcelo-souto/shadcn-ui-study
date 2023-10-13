import Marquee from "react-fast-marquee";

const InfinityTextPage = () => {
  return (
    <Marquee
      className="max-w-7xl mx-auto"
      autoFill={true}
      pauseOnHover={true}
      direction="right"
    >
      <p className="text-xl font-bold mr-4">INSCREVA-SE</p>
    </Marquee>
  );
};

export default InfinityTextPage;
