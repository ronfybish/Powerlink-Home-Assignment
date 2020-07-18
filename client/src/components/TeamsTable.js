import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { useTeamsStyles } from './style';
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

const TeamsTable = ({ teams }) => {
	const classes = useTeamsStyles();
	let history = useHistory();
	const handleClick = (id, teamData) => {
		const { name, address, crestUrl, venue, website } = teamData;
		history.push({
			pathname: `/teams/${id}`,
			state: { name, address, crestUrl, venue, website },
		});
	};
	return (
		<Fragment>
			<Paper elevation={24}style={{ margin: '1rem', padding: '1rem' }}>
				<TableContainer>
					<Table className={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Team Name</TableCell>
								<TableCell align='center'>Founded</TableCell>
								<TableCell align='left'>Address</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{teams
								.filter(team => team.crestUrl !== null)
								.map(team => (
									<TableRow
										hover={true}
										onClick={() =>
											handleClick(team.id, team)
										}
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
										<TableCell align='left'>
											{team.address}
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
		</Fragment>
	);
};

export default TeamsTable;
