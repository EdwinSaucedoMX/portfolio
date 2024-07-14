const NoteApp = (function () {
	let instance;

	function createInstance() {
		return {
			start: function () {
				const { exec } = require("child_process");
				exec("cd frontend/ && npm start", (error, stdout, stderr) => {
					if (error) {
						console.error(`Frontend start server failed!: ${error.message}`);
						return;
					}

					if (stderr) {
						console.error(`Frontend error log: ${stderr}`);
						return;
					}
					console.log(`Frontend: ${stdout}`);
				});
			},
		};
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

// Usage:
const app = NoteApp.getInstance();
app.start();
