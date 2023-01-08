import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/mazen-mohamed-098180228/"  target="_blank">
        <LinkedinLogo />
      </a>
      <a href="https://github.com/mazen-mohamed2" target="_blank">
        <GithubLogo />
      </a>
    </div>
  );
};
