import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
const Team = () => {
	const { id } = useParams();
	useEffect(() => {
		console.log(id)
		getTeamByid(id);
	}, []);

	const getTeamByid = async id => {
		try {
			const res = await axios.get(`/api/teams/${id}`);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<Link to='/teams'>back to Teams !</Link>
			<h1>Team Page</h1>
		</div>
	);
};

export default Team;
