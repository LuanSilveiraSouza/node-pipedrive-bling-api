import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Hello World!' });
});

app.listen(3030, () => console.log('Server started at port 3030'));
