import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white'} sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          <Link href={"/privaciy-policy#services"}>
            Services
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          <Link href={"/privaciy-policy#contact"}>
            Contact Us
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' component="h6" gutterBottom>
          <Link href={"/privaciy-policy#ppyes"}>
            Privacy
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' component="h6" gutterBottom>
          <Link href={"/privaciy-policy#terms"}>
            Terms
          </Link>
        </Typography>
      </Grid>
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2024 My Company. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          Made with love by Me.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
