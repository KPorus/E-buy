const Icdirection = ({
	width,
	height,
	bgColor,
}: {
	width?: string;
	height?: string;
	bgColor?: string;
}) => {
	return (
		<svg
			width={width ? width : "11"}
			height={height ? height : "16"}
			viewBox="0 0 11 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.7637 0.333588C10.1815 0.741772 10.1815 1.42208 9.77223 1.83026L3.5905 7.99554L9.7637 14.1608C10.1815 14.5775 10.1815 15.2493 9.7637 15.666C9.3459 16.0827 8.67231 16.0827 8.25451 15.666L1.16897 8.59931C0.836434 8.26767 0.836434 7.73192 1.16897 7.40027L8.25451 0.333588C8.67231 -0.0831001 9.3459 -0.0831001 9.7637 0.333588Z"
				fill={bgColor ? bgColor : "#333333"}
			/>
		</svg>
	);
};

export default Icdirection;
