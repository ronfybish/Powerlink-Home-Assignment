import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';

export const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 360,
		color: theme.palette.common.black,
	},
	rowHead: {
		backgroundColor: theme.palette.common.black,
	},
	cellHead: {
		color: theme.palette.common.white,
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));
const Teams = () => {
	const classes = useStyles();
	useEffect(() => {
		getTeams();
	}, []);

	let history = useHistory();
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

	const handleClick = id => {
		history.push(`/teams/${id}`);
	};

	return (
		<div>
			<Link to='/'>back to home page !</Link>
			<h1>Teams Page</h1>
			{teams && teams.length ? (
				<Paper elevation={24}>
					<TableContainer component={Paper}>
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
								{teams.filter(obj=>obj.crestUrl!==null).map(team => (
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
