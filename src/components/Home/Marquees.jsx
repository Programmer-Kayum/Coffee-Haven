import Marquee from "react-fast-marquee";

const Marquees = () => {
  return (
    <div>
      <section className="my-2">
        <div className="bg-gradient-to-r from-yellow-800 via-orange-500 to-red-500 py-1">
          <Marquee gradient={false} speed={50} className="text-white">
            <span className="text-lg font-semibold mx-2 text-black">
              ☕ Welcome to Coffee House - Your Daily Dose of Happiness!
            </span>
            <span className="text-lg font-semibold mx-2 text-yellow-100">
              🌟 Brewed to Perfection, Just for You!
            </span>
            <span className="text-lg font-semibold mx-2 text-green-300">
              🍂 Try Our Seasonal Specials Today!
            </span>
            <span className="text-lg font-semibold mx-2 text-red-400">
              ❤️ Every Sip is a Hug in a Cup.
            </span>
            <span className="text-lg font-semibold mx-2 text-purple-300">
              ☕ Coffee is Always a Good Idea!
            </span>
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Marquees;
