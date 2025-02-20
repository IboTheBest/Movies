import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { IMAGE_API } from '../hooks/getEnv';

export default function CostumCard({item}) {
    return (
        <Card className='!w-[220px]'>
            <CardActionArea className='!bg-blue-950 !text-white overflow-none !border-[2px] !border-white'>
                <CardMedia className='!md:h-[300px] !w-[220px] object-contain' component="img" height="!50px" image={`${IMAGE_API}/${item.poster_path}`} alt="green iguana"/>
                <CardContent>
                    <Typography className='line-clamp-1' gutterBottom variant="h5" component="div">{item.title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}