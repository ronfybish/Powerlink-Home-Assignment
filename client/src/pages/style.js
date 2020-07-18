
import { makeStyles } from '@material-ui/core/styles';

export const useTeamsStyles  = makeStyles(theme => ({
	table: {
		minWidth: 360,
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