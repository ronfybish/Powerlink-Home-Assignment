import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TeamsTable from '../components/TeamsTable';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Teams = () => {
	const [teams, setsTeams] = useState([]);
	useEffect(() => {
		getTeams();
	}, []);

	const getTeams = async () => {
		try {
			const res = await axios.get('/api/teams');
			setsTeams(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Link to='/'>back to home page !</Link>
			<h1>Teams Page</h1>
			{teams && teams.length ? <TeamsTable teams={teams} /> : <Spinner />}
		</div>
	);
};

export default Teams;
