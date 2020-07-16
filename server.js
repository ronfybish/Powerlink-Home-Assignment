const express = require('express');
const path = require('path');
const app = express();

//middlewere
app.use(express.json({ extended: false }));
app.use('/api/teams', require('./routes/footballData'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));