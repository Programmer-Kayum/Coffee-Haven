import React from "react";

const Footer = () => {
  return (
    <div className="mt-5">
      <footer className="bg-gray-800 text-white  py-5 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Cup Icon and Website Name */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">
                  <i className="fas fa-coffee"></i>
                </span>
                <h1 className="text-2xl font-bold">Coffee Haven</h1>
              </div>

              {/* About Section */}
              <p className="text-gray-400">
                Welcome to Coffee Haven, your destination for the finest coffee
                experiences. Discover our passion for brewing perfection.
              </p>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              {/* Get in Touch Section */}
              <div className="space-y-2">
                <p>
                  <i className="fas fa-phone-alt mr-2"></i>
                  01890274600
                </p>
                <p>
                  <i className="fas fa-envelope mr-2"></i>
                  kayum.ece.hstu@gmail.com
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  HSTU, Dinajpur, Rangpur.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="flex-1 p-8 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://via.placeholder.com/400x300')`, // Replace with your actual image URL
              }}
            >
              <h2 className="text-xl font-bold mb-4">Contact Us</h2>
              <form className="space-y-4">
                {/* Name Field */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                {/* Email Field */}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />

                {/* Message Field */}
                <textarea
                  placeholder="Your Message"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 h-32"
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gray-600 hover:bg-gray-500 text-white py-3 rounded font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
