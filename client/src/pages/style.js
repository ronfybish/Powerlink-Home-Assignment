
import { makeStyles } from '@material-ui/core/styles';

export const useTeamStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  padding:'2rem'
	},
	paper: {
	  height: '10rem',
	  width: '15rem',
	},
	control: {
	  padding: theme.spacing(1),
	},
	table: {
		minWidth: 350,
		color: theme.palette.common.black,
	},
	rowHead: {
		backgroundColor: theme.palette.common.black,
	},
	cellHead: {
		color: theme.palette.common.white,
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
  }));



export const useTeamsStyles  = makeStyles(theme => ({
	table: {
		minWidth: 350,
		color: theme.palette.common.black,
	},
	rowHead: {
		backgroundColor: theme.palette.common.black,
	},
	cellHead: {
		color: theme.palette.common.white,
	},
	avatar: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
}));