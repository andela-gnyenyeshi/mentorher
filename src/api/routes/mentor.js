import mentorContoller from '../controller/mentor';

export default function(app) {
	app.post('/api', mentorContoller.create);
	app.put('/api/mentor/update/:id', mentorContoller.updateProfile);
	app.delete('/api/mentor/delete/:id', mentorContoller.deleteUser);
}

