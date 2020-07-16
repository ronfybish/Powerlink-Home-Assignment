const express = require('express');
const app = express();

//middlewere
app.use(express.json({ extended: false }));
app.use('/api/teams', require('./routes/footballData'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
