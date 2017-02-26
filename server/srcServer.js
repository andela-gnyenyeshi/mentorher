import express from 'express';
import webpack from 'webpack';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import mongoconfig from '../src/api/config/dbconfig';
import config from '../webpack.config.dev';
import routes from '../src/api/routes/index';
let appEnv = process.env.NODE_ENV;

const app = express();
const port = process.env.PORT || 4000;
const compiler = webpack(config);

app.use(bodyparser.json());
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	hot: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

if (appEnv === 'development') {
	mongoose.connect(mongoconfig.db, (err) => {
		err ? console.log('Error connecting to the database') : console.log('Connected to database');
	});
}

routes(app);

app.listen(port, (err) => {
    console.log('Listening on port: ' + port);
});

export default app;
