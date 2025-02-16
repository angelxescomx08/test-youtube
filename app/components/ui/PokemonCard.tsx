import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Pokemon } from '@/app/interfaces/pokemon';

export default function PokemonCard({ name, url }:Pokemon) {
  return (
    <Card className='col-span-3 bg-slate-400'>
      <CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardContent>
    </Card>
  );
}
