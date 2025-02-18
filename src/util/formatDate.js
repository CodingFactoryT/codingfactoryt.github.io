export default function formatDate(date) {
	return date
		.toLocaleString("default", {
			day: "2-digit",
			month: "2-digit",
			year: "numeric",
		})
		.replace("/,/g", ".");
}
