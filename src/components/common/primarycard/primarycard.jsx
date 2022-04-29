import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useEffect,useState} from 'react'

 function Materialcard(props) {
    const [name, setName] = useState([]);
    const [body, setBody] = useState([]);
  
    console.log(props.header);
    useEffect(() => {
      setName(props.header);
      setBody(props.data);
    }, [props]);

    return (
      <div style={{ display:'flex', justifyContent:'center' }}>
      <Card sx={{ maxWidth: 345,  padding: 1, marginBottom: 3}}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
          {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </div>
    );
  }
  export default  Materialcard