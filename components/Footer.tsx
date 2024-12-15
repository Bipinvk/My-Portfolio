import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full h-screen" id="contact">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-8xl">
        <section className="w-full max-w-6xl container mx-auto  py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center justify-center md:justify-start text-center md:text-left">
              <p className="text-xl font-medium">
                Feel free to contact me.
                <br /> {"Let's"} work together to bring your ideas to life! <br />
                Have a great day {":)"}
              </p>
            </div>

            <div className="flex justify-center items-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-20 max-md:w-full max-md:h-24 object-cover rounded-lg webgl-transition-mobile"
                src="/footer/video.mp4"
              ></video>
            </div>
            <div className="flex  items-center justify-center md:items-start gap-4">
              <div className="flex flex-col items-center md:items-start ">
                <Link
                  href="mailto:bipinvk47@gmail.com"
                  className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EMAIL
                </Link>
                <Link
                  href="https://github.com/Bipinvk"
                  className="flex items-center space-x-2 hover:text-gray-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="https://wa.me/9048491610"
                  className="flex items-center space-x-2 hover:text-green-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHATSAPP
                </Link>

                <Link
                  href="https://instagram.com/_3ipin"
                  className="flex items-center space-x-2 hover:text-pink-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INSTAGRAM
                </Link>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="https://linkedin.com/in/bipin-v-k-499b751a6"
                  className="flex items-center space-x-2 hover:text-gray-700 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LINKEDIN
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="absolute bottom-4 px-4 w-full mx-10 flex justify-between text-gray-500 text-xs text-center">
          <p>Built by Bipin with 🤍</p>
          <p>Portfolio © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
