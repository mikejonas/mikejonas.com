import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  const renderSocialIcons = () => (
    <div className="flex mt-4">
      <a
        href="https://github.com/mikejonas"
        className="text-3xl mr-4 hover:text-gray-600 transition-colors"
      >
        <FaGithub aria-label="GitHub" />
      </a>
      <a
        href="https://www.linkedin.com/in/mikejonas"
        className="text-3xl mr-4 hover:text-gray-600 transition-colors"
      >
        <FaLinkedin aria-label="LinkedIn" />
      </a>
      <a
        href="https://www.instagram.com/mikejonas_"
        className="text-3xl hover:text-gray-600 transition-colors"
      >
        <FaInstagram aria-label="Instagram" />
      </a>
    </div>
  );

  const body = () => {
    return (
      <p className="typewriter text-base font-normal max-w-prose">
        <span>
          Passionate about building scalable software solutions and seamless
          user interfaces that drive business and user engagement.
        </span>
        <span className="typing-cursor"></span>
      </p>
    );
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col  items-start px-10 py-20 space-y-6">
      <h1 className="text-5xl font-serif font-bold">Mike Jonas</h1>
      <p className="text-2xl font-normal">Software Engineer</p>
      {renderSocialIcons()}
    </div>
  );
}
