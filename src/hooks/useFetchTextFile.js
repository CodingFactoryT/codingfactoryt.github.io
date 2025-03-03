import { useState, useEffect } from "react";

function useFetchTextFile(filePath) {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchFile = async () => {
			try {
				const response = await fetch(filePath);
				if (!response.ok) {
					throw new Error(`Error fetching file: ${response.statusText}`);
				}
				const text = await response.text();
				setData(text);
			} catch (error) {
				console.error(error);
			}
		};

		fetchFile();
	}, [filePath]);

	return { data };
}

export default useFetchTextFile;
