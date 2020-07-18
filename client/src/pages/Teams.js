import React, { useEffect, useState, Fragment } from 'react';
import Header from '../components/Header';
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
		<Fragment>
			<Header
				image='https://i.pinimg.com/originals/e1/35/e0/e135e010aff26bd49da8f6c8dd0ad0bc.jpg'
				name='Teams Page'
				to='/'
			/>
			{teams && teams.length ? <TeamsTable teams={teams} /> : <Spinner />}
		</Fragment>
	);
};

export default Teams;
