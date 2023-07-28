import React from "react";
import "./about.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import AboutMissionStatementSection from "./AboutMissionStatementSection";
import AboutTeamSliderSection from "./AboutTeamSliderSection";
import AboutHistorySection from "./AboutHistorySection";
import Footer from "../../components/Footer/Footer";
import History from "./History/History"

/**
 * Renders About Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function About() {
	return (
		<>
			<HeroImage heroTitle="ABOUT" />
			<AboutMissionStatementSection />
			<AboutTeamSliderSection />
			<History />
			{/* <AboutHistorySection /> */}
			<Footer />
		</>
	);
}
