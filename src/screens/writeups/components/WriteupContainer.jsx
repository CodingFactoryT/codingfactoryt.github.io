import WriteupGithubLink from "./WriteupGithubLink";

export default function WriteupContainer({ children, githubLink }) {
	return (
		<div
			style={{
				margin: "5vh 15%",
			}}
		>
			{children}

			<WriteupGithubLink link={githubLink}/>
		</div>
	);
}
