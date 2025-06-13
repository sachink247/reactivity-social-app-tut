import { Group } from "@mui/icons-material";
import { Box,  Button,  Paper, Typography } from "@mui/material";
import { Link } from "react-router";


export default function HomePage() {
  return (
    <Paper sx={{
      color:'white',
      display:'flex',
      flexDirection:'column',
      gap: 6,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'linear-gradient(135deg, #182a73 0%, #218aae 69%, #20a7ac 89%)'
      }}>
        
        <Box sx={{
      color:'white',
      display:'flex',
      
      gap: 3,
      alignItems: 'center',
      alignContent: 'center',
      
      }}><Group sx={{height:110, width:110}}/>
      <Typography variant='h1'>Reactivities</Typography>
      </Box>
      <Typography variant='h2'>Welcome to Reactivities</Typography>
      <Button component={Link} to="/activities"
      size="large"
      variant="contained"
      sx={{height:80, borderRadius:4, fontSize:'1.5rem'}}
      >Take me to activities!</Button>
    </Paper>
  )
}
