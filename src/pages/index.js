import Header from '../components/header'
import Typography from '@mui/material/Typography';

export default function Home() {
    return (
      <main>
        <Header/>
        <Typography variant="h4">This is a first Mock-Up</Typography>
        <p>First I'm going to make sure everything is working properly with the backend...</p>
        <p>Then I'm going to make this frontend pritter</p>
        <Typography variant="h5">Made by: Santiago Ramírez</Typography>
      </main>
    )
  }