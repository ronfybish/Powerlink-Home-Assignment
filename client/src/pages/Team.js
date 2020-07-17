import React, { useEffect } from 'react';
import axios from 'axios';

const Team = ({ match }) => {
	useEffect(() => {
		getTeamByid(match.params.id);
    }, []);
    
	const getTeamByid = async id => {
		try {
            const res = await axios.get(`/api/teams/${id}`);
            console.log(res.data)
		} catch (error) {
			console.log(error);
		}
	};
	
	return (
		<div>
			<h1>Team Page</h1>
		</div>
	);
};

export default Team;
