import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const Proyect = ({datos}) => {
    console.log(datos)
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={datos.imagen}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {datos.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.description}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {datos.url}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Proyect