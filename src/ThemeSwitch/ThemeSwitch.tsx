const ThemeSwitch = ({ theme, children }: any) => {
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
