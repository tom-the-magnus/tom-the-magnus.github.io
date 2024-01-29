import React from "react";

function article_1() {
	return {
		date: "28 Jan 2023",
		title: "The Purpose of This Website",
		description:
			"A short reflection on my intentions for this website.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tom Magnus",
			"Tom",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">This is just a test to see what happens.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
					<div className="paragraph">So here is another paragraph.</div>
					<div className="paragraph">So here is another paragraph.</div>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1, article_2];

export default myArticles;
