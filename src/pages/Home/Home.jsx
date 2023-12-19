import Banner from "./Banner";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import { AnchorSection } from "react-anchor-navigation";

const Home = () => {
	return (
		<div className="mx-auto">
			<div className="mt-40">
				<Banner></Banner>
			</div>

		<div className="mt-40 pt-20">
    <AnchorSection className="dBlock anchor" id="about">
				<About></About>
			</AnchorSection>
    </div>

			<AnchorSection className="dBlock anchor" id="experience">
				<Experience></Experience>
			</AnchorSection>

			<AnchorSection className="dBlock anchor" id="portfolio">
				<Projects></Projects>
			</AnchorSection>
		</div>
	);
};

export default Home;
