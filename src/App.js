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
      <Grid item xs={12} style={{ background: "black", color: "white" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
        finibus sapien. Donec sit amet enim congue, venenatis arcu posuere,
        faucibus nulla. Sed nec ante non orci tincidunt efficitur commodo
        feugiat elit. Vivamus convallis a sem a sagittis. Etiam volutpat lacinia
        risus sed interdum. Donec gravida lorem neque, vel mattis nisi finibus
        quis. Vestibulum pulvinar ligula scelerisque metus accumsan, quis
        pellentesque odio luctus. Nulla iaculis mauris ut aliquet imperdiet.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Pellentesque est ligula, dapibus quis dapibus
        nec, aliquet a nisi. Vivamus erat arcu, pretium pretium interdum ac,
        tempor a dolor. Aenean congue mi tellus, sed consequat nibh tristique
        vitae. Suspendisse nec ex sed nibh volutpat commodo in id massa. Donec
        dictum ultricies convallis. Maecenas ac porta enim. Cras a egestas nisl,
        sit amet tempor ex. Maecenas ac dapibus elit. Etiam fermentum sapien
        purus, dignissim dictum mi pellentesque ut. Phasellus quis varius leo, a
        vulputate tellus. Donec nec malesuada ante. Integer eu blandit dui, sit
        amet pellentesque mauris. Cras ut pulvinar elit, ut tincidunt nunc.
        Mauris ut malesuada est. Nullam iaculis pretium augue sit amet lacinia.
      </Grid>
    </Grid>
  );
}
