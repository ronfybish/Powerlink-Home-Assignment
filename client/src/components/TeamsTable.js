import React, { Fragment } from 'react';
import {useHistory} from 'react-router-dom'
import { useTeamsStyles } from '../pages/style';
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


const TeamsTable = ({teams}) => {
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
									align='left'
								>
									Address
								</TableCell>
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
