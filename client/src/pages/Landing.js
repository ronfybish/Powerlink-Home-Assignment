import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@material-ui/core/';
import { useLadingStyles } from '../components/style';

const Landing = () => {
	const classes = useLadingStyles();
	return (
		<div className={classes.test}>
			<Paper
				className={classes.mainFeaturedPost}
				style={{
					backgroundImage: `url(${'https://i.pinimg.com/originals/82/a9/cb/82a9cb48d053275f9a8c013dadbe1ffb.jpg'})`,
				}}
			>
				{
					<img
						style={{ display: 'none' }}
						src={
							'https://i.pinimg.com/originals/82/a9/cb/82a9cb48d053275f9a8c013dadbe1ffb.jpg'
						}
					/>
				}
				<div className={classes.overlay} />
				<Grid
					container
					alignItems='center'
					direction='column'
					style={{ padding: '5rem' }}
				>
					<Grid item>
						<Typography
							component='h1'
							variant='h3'
							color='inherit'
							className={classes.headerContent}
						>
							It's Time To Play!
						</Typography>
					</Grid>
					<Grid item>
						<Link to='/teams'>
							<Button
								size='large'
								variant='contained'
								color='primary'
							>
								Get Started
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Landing;
