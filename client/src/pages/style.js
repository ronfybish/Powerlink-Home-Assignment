
import { withStyles,makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export const useTeamsStyles = makeStyles(theme => ({
	table: {
		minWidth: 360,
	},
}));
export const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

