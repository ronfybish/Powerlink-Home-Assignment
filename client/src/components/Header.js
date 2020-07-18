import React from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import { useHeaderStyles } from './style';

const Header = ({ name, image, to }) => {
	const classes = useHeaderStyles();

	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{ backgroundImage: `url(${image})` }}
		>
			{<img style={{ display: 'none' }} src={image} />}
			<div className={classes.overlay} />
			<Link to={`${to}`}>
				<Button variant='contained' color='primary'>
					Back
				</Button>
			</Link>
			<Grid container>
				<Grid item>
					<Typography
						component='h1'
						variant='h3'
						color='inherit'
						style={{ paddingLeft: '5rem', paddingTop: '2rem' }}
						className={classes.headerContent}
					>
						{name}
					</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default Header;
