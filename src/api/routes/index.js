import category from './category.js';
import mentor from './mentor.js';
import path from 'path';

export default function(app) {
	category(app);
	mentor(app);
	app.use('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../src/index.html'));
	});
}
