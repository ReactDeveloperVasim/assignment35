import { Button, Grid } from '@mui/material';
import { navData } from './navData';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <Grid container spacing={2}>
            {
                navData.map((item)=>
                    <Grid item xs={3}>
                    <Link to={item.path}>

                    <Button variant='contained' fullWidth color='secondary' >{item.label}</Button>
                    </Link>
                        
                    </Grid>
                )
            }
        </Grid>
    );
};

export default Nav;