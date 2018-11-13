import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';


const classes = {
    card: {
        maxWidth: 505,
        border: 10,
        margin: 14
    },
    media: {
      height: 80,
    },
  };

class CreateNotication extends Component {
    
    render() {

        const {classes} = this.props;

        return (
            <Card className={ classes.card }>
            <CardActionArea>
              <CardMedia
                className= { classes.media }
                image="https://quick-catch.com/wp-content/uploads/2017/09/lizard-control-removal.png"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
    }
}

export default withStyles(classes)(CreateNotication);