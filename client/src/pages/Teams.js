import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 650,
	},
	tabler: { backgroundColor: 'lightblue' },
}));

const Teams = ({ history }) => {
	const classes = useStyles();
	useEffect(() => {
		getTeams();
	}, []);

	const [teams, setsTeams] = useState([]);

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
			{teams && teams.length ? (
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead className={classes.tabler}>
							<TableRow>
								<TableCell>Team Name</TableCell>
								<TableCell align='right'>Founded</TableCell>
								<TableCell align='right'>Address</TableCell>
								<TableCell align='right'>Visit Page</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{teams.map(team => (
								<TableRow key={team.id}>
									<TableCell component='th' scope='row'>
										{team.name}
									</TableCell>
									<TableCell align='right'>
										{team.founded}
									</TableCell>
									<TableCell align='right'>
										{team.address}
									</TableCell>
									<TableCell >
										<Link to={`/teams/${team.id}`} style={{textDecoration:'none'}}>
											<IconButton  color="primary">
												<SendSharpIcon />
											</IconButton>
										</Link>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Teams;
