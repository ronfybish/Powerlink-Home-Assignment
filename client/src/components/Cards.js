import React from 'react';
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
	Grid,
	Paper,
} from '@material-ui/core/';

const Cards = ({ address, venue, website }) => {
	return (
		<Paper elevation={20} style={{ margin: '2rem', padding: '2rem' }}>
			<Grid container alignItems='center' justify='space-evenly'>
				<Grid item>
					<Card>
						<CardActionArea>
							<CardMedia
								component='img'
								alt='Contemplative Reptile'
								image='https://images-na.ssl-images-amazon.com/images/I/61a3rUDbU7L._AC_SX425_.jpg'
								height='140px'
								width='140px'
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
								height='140px'
								width='140px'
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
								height='140px'
								width='140px'
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
		</Paper>
	);
};

export default Cards;
