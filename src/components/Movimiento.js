import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./Movimiento.module.scss";

export default function Movimiento({ data }) {
  const rows = data;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead className={styles.table_head}>
          <TableRow>
            <TableCell className={styles.tablecell_head}>Nro</TableCell>
            <TableCell align="center" className={styles.tablecell_head}>
              Tipo de Operación
            </TableCell>
            <TableCell align="right" className={styles.tablecell_head}>
              Monto
            </TableCell>
            <TableCell align="right" className={styles.tablecell_head}>
              Fecha
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="center">{row.operacion}</TableCell>
              <TableCell align="right">{row.monto}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
