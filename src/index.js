import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<meta name="google-site-verification" content="Km8ScyKbzvT4F-whT8o1W-W0u0DfkwIOymZCyIbPtzQ" />
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
