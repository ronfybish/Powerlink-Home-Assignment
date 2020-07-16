import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Teams = () => {
	useEffect(() => {
		getTeams();
	}, []);

	const [teams, setsTeams] = useState([]);

	const getTeams = async () => {
		try {
			const res = await axios.get('/api/teams');
			console.log(res.data);
			setsTeams(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Link to='/'>back to home page !</Link>
			<h1>Teams Page</h1>
			{teams.length > 0 ? (
				teams.map(team => <div key={team.name}>{team.name}</div>)
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Teams;
