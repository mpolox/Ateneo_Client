import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { withStyles, TextField, InputLabel, Select, MenuItem, Grid } from '@material-ui/core';


const classes = {
  card: {
    maxWidth: 1110,
    border: 10,
    margin: 14
  },
  media: {
    height: 80,
  },
  text: {
    width: 250
  }
};

class CreateNotication extends Component {

  render() {

    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <TextField
          id="outlined-with-placeholder"
          label="Escriba la notificación"
          className={classes.textField}
          margin="normal"
          multiline
          rows="6"
          variant="outlined"
          fullWidth
        />

        <Grid item xs={4}>
        <InputLabel  className={classes.text}>Enviar mensaje por:</InputLabel>
        <Select>
          <MenuItem value={1}>Calificación</MenuItem>
          <MenuItem value={2}>Alumno</MenuItem>
          <MenuItem value={3}>Profesor</MenuItem>
          <MenuItem value={4}>Materia</MenuItem>
          <MenuItem value={4}>Semestre</MenuItem>
        </Select>
        </Grid>
          <br></br>


      </Card>
    );
  }
}

export default withStyles(classes)(CreateNotication);