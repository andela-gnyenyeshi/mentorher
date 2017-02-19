import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import bodyParser from 'body-parser';
// import routes from '../src/api/routes';
import mentorController from '../src/api/controllers/mentor';

const app = express();
const port = process.env.PORT || 4000;
const compiler = webpack(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.post('/api', mentorController.create);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    console.log('Listening on port: ' + port);
});
