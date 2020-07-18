import { makeStyles } from '@material-ui/core/styles';

export const useTeamsStyles = makeStyles(theme => ({
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));

export const useHeaderStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		
		height:'35vh',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	headerContent: {
		position: 'relative',
	},
}));

export const useLadingStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height:'100vh'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	headerContent: {
		position: 'relative',
	},
	test:{
		height:'100vh'
	}
}));
