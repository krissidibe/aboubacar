import { LinkSocial } from "./LinkSocial";
import {
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const FooterSection = () => {
  return (
    <div
      id="contact"
      className="pb-20 flex items-center justify-center flex-col"
    >
      <p className="md:text-4xl font-bold">Stay in touch.</p>
      <p className="text-sm opacity-50 mt-2">
        I enjoy working on mobile and web development projects.{" "}
      </p>
      <p className="text-sm opacity-50">
        Don’t hesitate to get in touch and share more about your ideas.{" "}
      </p>
      <div className="flex gap-4 items-center justify-center sm:justify-center py-10">
        <LinkSocial
          link="https://www.linkedin.com/in/aboubacar-sidiki-sidibe-7504a0165/"
          logo={<LinkedInLogoIcon />}
          name={"Linkedin"}
        />
        <LinkSocial
          link="https://x.com/Kris__Beat"
          logo={<TwitterLogoIcon />}
          name={"Twitter"}
        />
        <LinkSocial
          link="mailto:contact@aboubacar.dev"
          logo={<EnvelopeClosedIcon />}
          name={"Email"}
        />
      </div>
    </div>
  );
};

export default FooterSection;
