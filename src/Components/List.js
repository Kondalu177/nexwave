import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
function List() {
    const [data, setData] = useState([]);
    const [isShown, setIsShown] = useState(false);
    const [loading, setLoading] = useState(true)
        console.log(data);
        useEffect(() => {
            fetch('https://apis.ccbp.in/list-creation/lists')
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                setData(json.lists);
                setLoading(false)
            });
            
        
        },[]);
        const handleClick = event => {
          
            setIsShown(current => !current);
        
          };

       if(loading) {
        return (
            <div>
                <div className="loader"></div>
            </div>
        )
       } 
  return (
    <div>
        
        
       
        
                  
        <h2>List Creation</h2>
        <Stack spacing={2} direction="row" style={{justifyContent:'center'}}>
            
            <Button variant="contained" onClick={handleClick}>Create a new list</Button>

            
        </Stack>
        
            <Box sx={{ flexGrow: 1 }} style={{marginTop:"30px"}}>
                <Grid container spacing={2} xs={12}>
                   
                        <Grid item xs={2} style={{backgroundColor:'#edf6fb',margin:'10px',padding:'10px',marginLeft:'30px'}}>
                    <FormGroup>
                        <FormControlLabel  control={<Checkbox />} label="List 1 (24)" />
                        
                    </FormGroup>
                    

                    
                        {data.map((item) => (
                            
                             
                                <Card xs={12} style={{borderRadius:"15px",margin:'10px'}}>
                                <CardContent>
                                    
                                    <Typography variant="body2" key={item.id}>
                                    <h4>{item.name}</h4>
                                    {item.description}
                                    </Typography>
                                </CardContent >
                                    
                                    <Button style={{float:'right',marginRight:'10px'}}><ArrowRightAltIcon  /></Button>
                                
                                </Card>
                        ))}
                            
                        
                        
                    </Grid>
                    {isShown && (
                    <Grid item xs={2} id='list3' style={{backgroundColor:'#edf6fb',margin:'10px',padding:'10px'}}>
                    <FormGroup>
                        <FormControlLabel  control={<Checkbox />} label="List 3" />
                        
                    </FormGroup>
                    
                    </Grid>
                    )}
                    
                    
                    <Grid item xs={2} style={{backgroundColor:'#edf6fb',margin:'10px',padding:'10px'}}>
                    <FormGroup onSubmit={handleClick}>
                        <FormControlLabel  control={<Checkbox />} label="List 2 (24)" />
                        
                    </FormGroup>
                    {data.map((item) => (
                            
                             
                            <Card xs={12} style={{borderRadius:"15px",margin:'10px'}}>
                            <CardContent>
                                
                                <Typography variant="body2" key={item.id}>
                                <h4>{item.name}</h4>
                                {item.description}
                                </Typography>
                            </CardContent >
                                
                                <Button style={{float:'right',marginRight:'10px'}}><ArrowRightAltIcon  /></Button>
                            
                            </Card>
                    ))}
                    </Grid>
                    
                </Grid>
            </Box>
    </div>
  )
}

export default List
