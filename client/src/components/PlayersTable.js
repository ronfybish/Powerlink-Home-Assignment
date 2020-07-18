import React, { Fragment } from 'react';
import { useTeamStyles } from '../pages/style';
import {
	TableContainer,
	TableHead,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Paper,
} from '@material-ui/core/';
const PlayersTable = ({ squad }) => {
	const classes = useTeamStyles();
	return (
		<Fragment>
			<Paper elevation={24}>
				<TableContainer>
					<Table className={classes.table}>
						<TableHead>
							<TableRow className={classes.rowHead}>
								<TableCell className={classes.cellHead}>
									player Name
								</TableCell>
								<TableCell
									className={classes.cellHead}
									align='center'
								>
									Position
								</TableCell>
								<TableCell
									className={classes.cellHead}
									align='center'
								>
									Shirt Number
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{squad
								.filter(player => player.shirtNumber)
								.map(player => (
									<TableRow hover={true} key={player.id}>
										<TableCell align='left'>
											{player.name}
										</TableCell>
										<TableCell align='center'>
											{player.position}
										</TableCell>
										<TableCell align='center'>
											{player.shirtNumber}
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

export default PlayersTable;
