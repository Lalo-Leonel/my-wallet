import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={styles.box}>
          <Typography variant="h6" component="div">
            Digital Wallet
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
