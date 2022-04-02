import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Movimiento from "./Movimiento";
import styles from "./DetailCard.module.scss";

function saldoTotal(data) {
  let sumaTotal = 0;
  for (let i in data) {
    if (data[i].operacion === "ingreso") {
      sumaTotal += data[i].monto;
    }
    if (data[i].operacion === "gasto") {
      sumaTotal -= data[i].monto;
    }
  }
  return sumaTotal;
}
export default function DetailCard({ data }) {
  const [open, setOpen] = React.useState(false);
  const [operacion, setOperacion] = React.useState("");
  const [monto, setMonto] = React.useState(0);
  const [saldo, setSaldo] = React.useState(saldoTotal(data));

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setOperacion(event.target.value);
  };
  const handleChangeMonto = (event) => {
    setMonto(event.target.value);
  };
  const registrar = () => {
    const fechaRegistrada = new Date();
    data.push({
      id: data.length + 1,
      operacion: operacion === 10 ? "ingreso" : "gasto",
      monto: parseFloat(monto),
      fecha: fechaRegistrada.toISOString(),
    });
    setMonto(0);
    setSaldo(saldoTotal(data));
    handleClose();
  };
  return (
    <Box sx={{ minWidth: 275 }} className={styles.box}>
      <Card variant="outlined" className={styles.card}>
        <React.Fragment>
          <CardContent>
            <Typography component="div" className={styles.text}>
              Saldo
            </Typography>
            <Typography sx={{ mb: 1.5 }} className={styles.textnumber}>
              {saldo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={handleOpen} className={styles.btn}>
              Registrar
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="parent-modal-title"
              aria-describedby="parent-modal-description"
            >
              <Box className={styles.box_modal}>
                <Grid>
                  <Grid>
                    <FormControl>
                      <InputLabel id="demo-simple-select-label">
                        Operación
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={operacion}
                        label="Operacion"
                        onChange={handleChange}
                        className={styles.select}
                      >
                        <MenuItem value={10}>ingreso</MenuItem>
                        <MenuItem value={20}>gasto</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      id="outlined-basic"
                      label="Monto"
                      variant="outlined"
                      onChange={handleChangeMonto}
                    />
                  </Grid>
                  <Grid className={styles.btns}>
                    <Button
                      onClick={handleClose}
                      className={styles.btn_cancelar}
                    >
                      Cancelar
                    </Button>
                    <Button onClick={registrar} className={styles.btn_guardar}>
                      Guardar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Modal>
          </CardActions>
        </React.Fragment>
      </Card>
      <Movimiento data={data} />
    </Box>
  );
}
