import Image from "next/image";
import { socialMedia } from "@/data";
import bgfooter from "../public/bgfooter.png";
const Footer = () => {
  return (
    <footer className="w-full h-screen" id="contact">
      <div className="w-full h-full flex flex-col items-center justify-center max-w-8xl">
        <div className="text-center mb-12 w-full flex items-center justify-center"></div>

        <main className="w-full max-w-4xl">
          <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="flex items-center justify-center md:justify-start text-center md:text-left">
                <p className="text-xl font-medium">
                  Feel free to contact me if you have any projects to request.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Image
                  src={bgfooter}
                  alt="Blurred Visual"
                  width={300}
                  height={100}
                  className="object-cover rounded-lg shadow-md mx-auto"
                />
              </div>

              <div className="flex flex-col items-center md:items-end space-y-4">
                <div className="flex space-x-4">
                  <a
                    href="mailto:info@example.com"
                    className="flex items-center space-x-2 hover:text-blue-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    EMAIL
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    className="flex items-center space-x-2 hover:text-green-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WHATSAPP
                  </a>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com"
                    className="flex items-center space-x-2 hover:text-gray-700 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB
                  </a>
                  <a
                    href="https://instagram.com"
                    className="flex items-center space-x-2 hover:text-pink-500 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="absolute bottom-4 px-4 w-full mx-10 flex justify-between text-gray-500 text-xs text-center">
          <p>Built by Bipin with 🤍</p>
          <p>Portfolio © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
