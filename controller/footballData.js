const axios = require('axios');
const dotenv = require('dotenv').config();

module.exports = {
	getTeams: async (req, res) => {
		try {
			const config = {
				headers: {
					'X-Auth-Token': '5098566abd574171a3f08ea411ea38a6',
				},
			};
			const response = await axios.get(
				'https://api.football-data.org/v2/teams',
				config
			);
			const { teams } = response.data;
			res.status(200).json(teams);
		} catch (error) {
			res.json(error.response.data);
		}
	},

	getTeamById: async (req, res) => {
		const id = req.params.id;
		console.log(id);
		try {
			const config = {
				headers: {
					'X-Auth-Token': '5098566abd574171a3f08ea411ea38a6',
				},
			};
			const response = await axios.get(
				`https://api.football-data.org/v2/teams/${id}`,
				config
			);

			res.status(200).json(response.data);
		} catch (error) {
			res.json(error.response.data);
		}
	},
};
