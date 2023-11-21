import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const ICON_SIZE = 24; // You can change this value to adjust the size

export default function Home() {
  const renderSocialIcons = () => (
    <div className="flex mt-4">
      <a
        href="https://github.com/mikejonas"
        className="text-3xl mr-2 hover:text-gray-300 transition-colors"
        target="_blank"
        style={{ color: "inherit" }} // ensures the color inherits from the parent for easier theming
      >
        <FaGithub aria-label="GitHub" size={ICON_SIZE} />
      </a>
      <a
        href="https://www.linkedin.com/in/mikejonas"
        className="text-3xl mr-2 hover:text-gray-300 transition-colors"
        target="_blank"
        style={{ color: "inherit" }}
      >
        <FaLinkedin aria-label="LinkedIn" size={ICON_SIZE} />
      </a>
      <a
        href="https://www.instagram.com/mikejonas_"
        className="text-3xl hover:text-gray-300 transition-colors"
        target="_blank"
        style={{ color: "inherit" }}
      >
        <FaInstagram aria-label="Instagram" size={ICON_SIZE} />
      </a>
    </div>
  );

  const body = () => {
    return (
      <p className="typewriter text-base font-normal max-w-prose text-gray-300">
        <span>
          Passionate about building scalable software solutions and seamless
          user interfaces that drive business and user engagement.
        </span>
        <span className="typing-cursor"></span>
      </p>
    );
  };

  return (
    <div className="bg-zinc-950 text-gray-100 min-h-screen flex flex-col items-start px-10 py-20 space-y-6">
      <h1 className="text-5xl font-bold">Mike Jonas</h1>
      {renderSocialIcons()}
      {/* {body()} */}
    </div>
  );
}
