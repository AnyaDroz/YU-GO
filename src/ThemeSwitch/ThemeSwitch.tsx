const ThemeSwitch = ({ theme, children }: any) => {
	// if (theme === "dark") {
	// 	require("../build/css/DARK.css");
	// } else if (theme === "light") {
	// 	require("../build/css/LIGHT.css");
	// }

	return (
		<div>
			{theme === "dark" && (
				<link rel="stylesheet" href="/DARK.css" type="text/css" />
			)}
			{theme === "light" && (
				<link rel="stylesheet" href="/LIGHT.css" type="text/css" />
			)}
			{children}
		</div>
	);
};

export default ThemeSwitch;
