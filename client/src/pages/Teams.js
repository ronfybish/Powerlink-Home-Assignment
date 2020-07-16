import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Teams = () => {
    useEffect(() => {
        getTeams();
	}, []);
    
    const [teams, setsTeams] = useState(null);
    
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
			{teams !== null ? (
				teams.map(team => <div>{team.name}</div>)
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Teams;
