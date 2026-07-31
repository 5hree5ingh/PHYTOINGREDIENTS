import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    background: 'linear-gradient(135deg, #1a5c1a 0%, #2d7a2d 100%)',
    color: theme.palette.common.white,
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    letterSpacing: '0.3px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "'Inter', sans-serif",
    color: '#4a5568',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f8fdf8',
  },
  '&:hover': {
    backgroundColor: '#e8f5e9',
    transition: 'background-color 0.2s ease',
  },
}));

export default function CustomizedTables(props) {
  return (
    <Paper
      sx={{
        marginLeft: '5%',
        width: '90%',
        marginTop: 3,
        marginBottom: '50px',
        overflowX: 'auto',
        border: '1px solid rgba(45, 122, 45, 0.12)',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(45, 122, 45, 0.12)',
      }}
    >
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
              {
                  props.head.map((val, i) => (
                    <StyledTableCell key={i} style={{fontWeight:'bold'}}>{val}</StyledTableCell> 
                  ))
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row, i) => (
            <StyledTableRow key={i}>
                {row.map((val, j) => (
                    <StyledTableCell key={j}>{val}</StyledTableCell>
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
