import Banner from "./Banner";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import { AnchorSection } from "react-anchor-navigation";
import Contact from "../../components/Contact";
import ProfileLink from "../../components/profileLink";

const Home = () => {
	return (
		<div className="max-w-7xl  mx-auto">
			<div className="mt-20">
				<ProfileLink></ProfileLink>
			</div>
			<div className="mt-40">
				<Banner></Banner>
			</div>

			<div className="mt-60 pt-40">
				<AnchorSection className="dBlock anchor" id="about">
					<About></About>
				</AnchorSection>
			</div>

			<AnchorSection className="dBlock anchor" id="experience">
				<Experience></Experience>
			</AnchorSection>

			<div className="mt-60 pt-40">
			<AnchorSection className="dBlock anchor" id="portfolio">
				<Projects></Projects>
			</AnchorSection>
			</div>
			<div className="mt-60 pt-40 mb-20">
			<AnchorSection className="dBlock anchor" id="contact">
				<Contact></Contact>
			</AnchorSection>
			</div>
		</div>
	);
};

export default Home;
