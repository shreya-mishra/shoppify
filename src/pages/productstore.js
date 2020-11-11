import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { InputGroupAddon, } from 'reactstrap';


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function productstore(props) {
    const { classes } = props;
    render()
    return (
        <div>
            <div style={{ paddingTop: "2em" }}>
                <div><Link to="/productform">
                    <InputGroupAddon addonType="append"><Button style={{
                        position: "absolute",
                        left: "80%",
                        flex: 1,
                        border: " 1px solid black"
                    }} color="primary" >Add Product</Button></InputGroupAddon></Link></div>


                <div><h1 color="grey" variant="contained" style={{
                    position: "absolute",
                    right: "63%",
                    flex: 1,
                }} >Products</h1></div></div>
            <Paper className={classes.root}>

                <Table style={{
                    width: "40%", position: "absolute",
                    left: "27%", border: "1px solid black",
                    top: "10em"
                }} className={classes.table}>
                    <TableHead>

                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">PRICE</TableCell>
                            <TableCell align="right">CATEGORY</TableCell>
                            <TableCell align="right">BRAND</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right"><div style={{ direction: "flex" }}><FontAwesomeIcon className="rct-icon rct-icon-expand-close" icon={faEdit} />&nbsp;&nbsp;<FontAwesomeIcon color="red" className="rct-icon rct-icon-expand-close" icon={faTrashAlt} /></div></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper >
        </div>
    );
}



export default withStyles(styles)(productstore);
