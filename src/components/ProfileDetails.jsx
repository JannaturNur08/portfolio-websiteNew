import { TbBrandGithub } from "react-icons/tb";
import { SlSocialFacebook } from "react-icons/sl";
import { CiLinkedin } from "react-icons/ci";
import { IconContext } from "react-icons";

const ProfileDetails = () => {
    return (
        <div>
        <div className="fixed bg-transparent opacity-75 left-10 bottom-0 flex flex-row md:flex-col gap-5 items-center">
            <IconContext.Provider value={{ size: 20 }}>
                <a href="https://github.com/JannaturNur08">
                <TbBrandGithub />
                </a>
                <a href="https://www.facebook.com/jannatur.nur.505">
                <SlSocialFacebook />
                </a>
                <a href="https://www.linkedin.com/in/jannatur-nur-1848aa16b/">
                <CiLinkedin />
                </a>
            </IconContext.Provider>
            <div className=" w-[0.7px] md:h-24 bg-white"></div>
        </div>
    </div>
    );
};

export default ProfileDetails;