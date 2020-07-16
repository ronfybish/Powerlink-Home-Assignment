const axios = require('axios');
const dotenv = require('dotenv').config();

module.exports = {
	getTeams: async (req, res) => {
		try {
			const config = {
				headers: {
					'X-Auth-Token': `${process.env.API_SECRET_KEY}`,
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.get(
				'https://api.football-data.org/v2/teams',
				config
			);
			const { teams } = response.data;
			res.status(200).json(teams);
		} catch (error) {
			console.error(error.message);
		}
	},

	getTeamById: (req, res) => {
		try {
		} catch (error) {}
	},
};
