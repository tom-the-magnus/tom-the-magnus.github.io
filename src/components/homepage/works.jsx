import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSalesforce } from "@fortawesome/free-brands-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">

						<div className="work">
							<img
								src="./teachable.png"
								alt="Teachable"
								className="work-image"
							/>
							<div className="work-title">Teachable</div>
							<div className="work-subtitle">
								Senior Customer Support Agent
							</div>
							<div className="work-duration">2020 - 2023</div>
						</div>
						
						<div className="work">
							<img
								src="./salesforce.webp"
								alt="Salesforce"
								className="work-image"
							/>
							<div className="work-title">Salesforce</div>
							<div className="work-subtitle">
								Business Development Representative
							</div>
							<div className="work-duration">2017 - 2020</div>
						</div>


					</div>
				}
			/>
		</div>
	);
};

export default Works;
