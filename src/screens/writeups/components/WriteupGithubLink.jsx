import { FaGithub } from "react-icons/fa";

export default function WriteupGithubLink({ link }) {
  return (
    <a href={link} style={{
      position: "fixed",
      bottom: "3vh",
      right: "3vh",
      backgroundColor: "#151b23",
      borderRadius: "50%",
      height: "10vh",
      aspectRatio: 1,
      display: "flex", 
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }}>
      <FaGithub size="80%"/>
    </a>
  );
}