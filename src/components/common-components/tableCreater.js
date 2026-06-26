import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    background: 'linear-gradient(135deg, #1a5c1a 0%, #2d7a2d 100%)',
    color: theme.palette.common.white,
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    letterSpacing: '0.3px',
  },
  body: {
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    color: '#4a5568',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#f8fdf8',
    },
    '&:hover': {
      backgroundColor: '#e8f5e9',
      transition: 'background-color 0.2s ease',
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
        marginLeft: '5%',
        width: '90%',
        marginTop: theme.spacing(3),
        marginBottom: '50px',
        overflowX: 'auto',
        border: '1px solid rgba(45, 122, 45, 0.12)',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(45, 122, 45, 0.12)',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
              {
                  props.head.map(val => (
                    <StyledTableCell style={{fontWeight:'bold'}}>{val}</StyledTableCell> 
                  ))
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map(row => (
            <StyledTableRow>
                {row.map(val => (
                    <StyledTableCell>{val}</StyledTableCell>
                ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

// format of data==>
// state = {
//     data : [
//         ["1",	"Kalmegh (Andrographis paniculata)",	"Andrographolide NLT 95%",	"HPLC",	"Liver support"],
//         ["2",	"Curcumin RSF(Curcuma longa) Residue solvent NMT50 ppm",	"Curcuminoid NLT 95%",	"HPLC", "Anti-oxidant, anti-inflammatory and anti -cancer"],
//         ["3",	"Curcumin complex(Curcuma longa)",	"Lecithin complex 20% – 70%",	"HPLC",	"Antioxidant, anti-inflammatory, anti cancer"],
//         ["4",	"Curcumin (Curcuma longa)",	"Curcuminoid NLT 95%",	"HPLC",	"Antioxidant, anti-inflammatory, anti cancer"],
//         ["5",	"Natural Caffeine (Coffea robusta)",	"Caffeine NLT 95%",	"HPLC",	"Anti-oxidant"],
//         ["6",	"Piperine (Piper nigrum)",	"Piperine NLT 95%",	"HPLC",	"Treats gastrointestinal disorders, Intermittent fever"],
//         ["7",	"Tetra-hydrocurcumin (Curcuma longa)",	"Tetrahydrocurcuminoid NLT 95%",	"HPLC",	"Skin care cosmetic ingredient"],
//         ["8",	"Steviosides (Stevia rebaudiana)",	"Stevioside NLT 90%",	"HPLC",	"Healthy natural sweetener"],
//         ["9",	"AKBA (Boswellia serrata)",	"AKBA NLT 40%",	"HPLC",	"Antirheumatic, anti-inflammatory"]
//         ],
//     head : ["S. No", "Product (Botanical Name)", "Bio -Markers and Limits", "Testing method", "Major Application"],
//     name: "PHYTOCHEMICALS"
// }
//              
