import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import PlayersTable from '../components/PlayersTable';
import Spinner from '../components/Spinner';
import axios from 'axios';

const Team = ({ history, match }) => {
	const [squad, setSquad] = useState(null);
	const { name, address, crestUrl, venue, website } = history.location.state;

	useEffect(() => {
		getTeamByid(match.params.id);
		// eslint-disable-next-line
	}, []);

	const getTeamByid = async id => {
		try {
			const res = await axios.get(`/api/teams/${id}`);
			const { squad } = res.data;
			setSquad(squad);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Header name={name} image={crestUrl} to={'/teams'} />
			<Cards cards={(address, venue, website)} />
			{squad && squad.length ? (
				<PlayersTable squad={squad} />
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Team;
