import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Link from 'next/link'; 

export default function BookCard({image, title, shortDescrip, id, url}) {

    const renderFewCharacters = (str, size=100) => str ? str.slice(0, size) : "No data"
    
  

  return (
    <Card sx={{ maxWidth: 270, margin: 5, textAlign: "center" }}>
      <CardMedia
        component="img"
        alt={title || "No data"}
        height="300"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body5" color="text.secondary">
          {renderFewCharacters(shortDescrip)}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`${url}/${id}`}>Learn More</Link>
      </CardActions>
    </Card>
  );
}

