import express from 'express';
import path from 'path';
import webpack from 'webpack';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import mongoconfig from '../src/api/config/dbconfig';
import config from '../webpack.config.dev';
import mentorContoller from '../src/api/controller/mentor';
import categoryController from '../src/api/controller/category';

const app = express();
const port = process.env.PORT || 4000;
const compiler = webpack(config);

app.use(bodyparser.json());
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

mongoose.connect(mongoconfig.db, (err) => {
  err ? console.log('Error connecting to the database') : console.log('Connected to database');
});

app.post('/api', mentorContoller.create);
app.post('/category', categoryController.create);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    console.log('Listening on port: ' + port);
});
