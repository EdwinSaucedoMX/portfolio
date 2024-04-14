export const getMonocromaticSequenceRGB = (
	color: `rgb(${number},${number},${number})`,
	size = 1
) => {
	const [r, g, b] = color.match(/\d+/g)?.map(Number) ?? [255, 255, 255];
	const sequence = [];
	let rResult = r / size;
	let gResult = g / size;
	let bResult = b / size;

	for (let i = 0; i < size + 1; i++) {
		sequence.push(`rgb(${rResult},${gResult},${bResult})`);
		rResult += r / size;
		gResult += g / size;
		bResult += b / size;
	}
	return sequence;
};
export const getMonocromaticSequenceHSL = (
	color: `hsl(${number} ${number}% ${number}%)` | string = "hsl(255 255% 255%)",
	size = 1
) => {
	const [h, s, l] = color.match(/(\d+(\.\d+)?)/)?.map(Number) ?? [
		255, 255, 255,
	];
	console.log({ h, s, l });
	const sequence = [];
	let hResult = h / size;
	let sResult = s / size;
	let lResult = l / size;

	for (let i = 0; i < size + 1; i++) {
		sequence.push(`hsl(${hResult}deg ${sResult}% ${lResult}%)`);
		hResult += h / size;
		sResult += s / size;
		lResult += l / size;
	}
	return sequence;
};
