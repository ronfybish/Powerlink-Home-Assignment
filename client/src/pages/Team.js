import React, { useState, useEffect } from 'react';

import PlayersTable from '../components/PlayersTable';
import Spinner from '../components/Spinner';
import axios from 'axios';
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Grid,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';

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
			<Link to='/teams'>
				<Button variant='outlined' color='primary'>
					back to Teams !
				</Button>
			</Link>
			<Grid container spacing={3} justify='center' alignItems='center'>
				<Grid item>
					<h1>{name}</h1>
				</Grid>
				<Grid item>
					<img
						src={crestUrl}
						alt={name}
						width='100px'
						height='200px'
					/>
				</Grid>
			</Grid>

			<Grid
				container
				alignItems='center'
				justify='space-evenly'
				style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
			>
				<Grid item>
					<Card>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								image='https://images-na.ssl-images-amazon.com/images/I/61a3rUDbU7L._AC_SX425_.jpg'
								height='200px'
								width='200px'
								title={venue}
							/>
							<CardContent>
								<Typography component='h6' variant='h6'>
									Staduim: {venue}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>

				<Grid item>
					<Card>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								image='https://getwetsurf.com/wp-content/uploads/2015/09/locations-icon.png'
								height='200px'
								width='200px'
								title={address}
							/>
							<CardContent>
								<Typography component='h6' variant='h6'>
									address : {address}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
				<Grid item>
					<Card>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								image='https://us.123rf.com/450wm/pxlprostudio/pxlprostudio1901/pxlprostudio190104085/116381884-soccer-ball-icon-on-black-background-for-graphic-and-web-design-modern-simple-vector-sign-internet-c.jpg?ver=6'
								height='200px'
								width='200px'
								title={venue}
							/>
							<CardContent>
								<Button
									variant='outlined'
									color='primary'
									href={website}
								>
									Official Website
								</Button>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
			</Grid>

			{squad && squad.length ? (
				<PlayersTable squad={squad} />
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default Team;
