import React, { useEffect, useState } from 'react';
import { useTeamsStyles } from './style';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {
	TableContainer,
	TableHead,
	Table,
	TableBody,
	Avatar,
	TableRow,
	TableCell,
	Paper,
} from '@material-ui/core/';


const Teams = () => {
	const classes = useTeamsStyles();
	useEffect(() => {
		getTeams();
	}, []);

	let history = useHistory();
	const [teams, setsTeams] = useState([]);

	const getTeams = async () => {
		try {
			const res = await axios.get('/api/teams');
			setsTeams(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleClick = id => {
		history.push(`/teams/${id}`);
	};

	return (
		<div>
			<Link to='/'>back to home page !</Link>
			<h1>Teams Page</h1>
			{teams && teams.length ? (
				<Paper elevation={24}>
					<TableContainer>
						<Table className={classes.table}>
							<TableHead>
								<TableRow className={classes.rowHead}>
									<TableCell></TableCell>
									<TableCell className={classes.cellHead}>
										Team Name
									</TableCell>
									<TableCell
										className={classes.cellHead}
										align='center'
									>
										Founded
									</TableCell>
									<TableCell
										className={classes.cellHead}
										align='center'
									>
										Address
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{teams
									.filter(obj => obj.crestUrl !== null)
									.map(team => (
										<TableRow
											hover={true}
											onClick={() => handleClick(team.id)}
											key={team.id}
										>
											<TableCell>
												<Avatar
													className={classes.avatar}
													alt={`${team.id}`}
													src={`${team.crestUrl}`}
												/>
											</TableCell>
											<TableCell align='left'>
												{team.name}
											</TableCell>
											<TableCell align='center'>
												{team.founded}
											</TableCell>
											<TableCell align='center'>
												{team.address}
											</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Teams;
