const { webkit } = require("playwright"); // Or 'chromium' or 'webkit'.

(async () => {
	const browser = await webkit.launch();
	const page = await browser.newPage();
	await page
		.goto(
			"https://drive.google.com/drive/u/0/folders/1F8LUJ86CSwOotnzgIYaOWfUJNsrK64v6?fbclid=IwAR1eBVgpPNQ5Lr_Gl2Vq6DmmyM5R1o5GY0JvaWQy7M-_G6BVo8_glykPyx0"
		)
		.catch((err) => console.log(err));

	const folderButton = await page
		.locator("button", { hasText: "Temp 1" })
		.click();
	await page.screenshot({ path: "./click-folder.png" });
	console.log({ folderButton });

	await browser.close();
})();
