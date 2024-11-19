import pic1 from "../../../public/images/cups/Rectangle 9.png";
import pic2 from "../../../public/images/cups/Rectangle 10.png";
import pic3 from "../../../public/images/cups/Rectangle 11.png";
import pic4 from "../../../public/images/cups/Rectangle 12.png";
import pic5 from "../../../public/images/cups/Rectangle 13.png";
import pic6 from "../../../public/images/cups/Rectangle 14.png";
import pic7 from "../../../public/images/cups/Rectangle 15.png";
import pic8 from "../../../public/images/cups/Rectangle 16.png";

const Instagram = () => {
  return (
    <div>
      <div className="text-center lg:my-8 my-4">
        <p>Follow Us Now</p>
        <h1 className="lg:text-3xl text-2xl font-bold text-orange-500">
          Follow on Instagram
        </h1>
      </div>
      <div className="lg:grid lg:w-3/5 grid w-full gap-2 grid-cols-2 mx-auto  lg:grid-cols-4 lg:gap-3">
        <img className="w-64 h-64" src={pic1} alt="" />
        <img className="w-64 h-64" src={pic2} alt="" />
        <img className="w-64 h-64" src={pic3} alt="" />
        <img className="w-64 h-64" src={pic4} alt="" />
        <img className="w-64 h-64" src={pic5} alt="" />
        <img className="w-64 h-64" src={pic6} alt="" />
        <img className="w-64 h-64" src={pic7} alt="" />
        <img className="w-64 h-64" src={pic8} alt="" />
      </div>
    </div>
  );
};

export default Instagram;
