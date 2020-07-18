import React, { Fragment } from 'react';
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
	return (
		<Fragment>
			<Paper elevation={24} style={{ margin: '1rem', padding: '1rem' }}>
				<TableContainer>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell>player Name</TableCell>
								<TableCell align='center'>Position</TableCell>
								<TableCell align='center'>
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
