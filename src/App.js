import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    height: "100vh",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      className={classes.root}
      style={{ background: "#333" }}
    >
      <Grid item xs={12} md={6} style={{ background: "red" }}>
        teste
      </Grid>
      <Grid item xs={12} md={6} style={{ background: "blue" }}>
        teste
      </Grid>
      <Grid item xs={12} style={{ background: "black" }}>
        teste
      </Grid>
    </Grid>
  );
}
