import { Card, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Form_valid } from '../Daily Tasks/Form event/Form_component';
import { CenterFocusStrong } from '@mui/icons-material';



const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const BasicMUI = () => {

            const [anchorElNav, setAnchorElNav] = React.useState(null);
            const [anchorElUser, setAnchorElUser] = React.useState(null);
        
            const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
            };
            const handleOpenUserMenu = (event) => {
            setAnchorElUser(event.currentTarget);
            };
        
            const handleCloseNavMenu = () => {
            setAnchorElNav(null);
            };
        
            const handleCloseUserMenu = () => {
            setAnchorElUser(null);
            };










    return ( <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-6 mt-3 p-2 p'>
                        <div>
                                <nav class="navbar navbar-expand-lg navbar-light bg-info font-weight-bold ">
                                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                    <div class="collapse navbar-collapse ml-5" id="navbarTogglerDemo01">
                                            <a class="navbar-brand " href="#">Bootstrap</a>
                                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                                            <li class="nav-item active ml-5">
                                                <a class="nav-link" href="#">SignUp </a>
                                            </li>
                                            <li class="nav-item active ml-5">
                                                <a class="nav-link" href="#">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                        </div>

                        <div className='row justify-content-center'>
                            <div className='card col-lg-6 mt-5'>

                                <div className='card-body col-lg-6'>    
                                    <label>Username</label>
                                    <input type="text" placeholder='Username'/>
                                    <label>Password</label>
                                    <input type="password" placeholder="password"/>
                                    <button type='button' className='btn btn-primary'>Login</button>
                                </div>    

                            </div>

                        </div>


                </div>


                <Grid AppBar xs={6} container spacing={3} padding={6}>
                    <AppBar position="static">
                        <Container maxWidth="xl">
                            <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                MUI
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                >
                                <MenuIcon />
                                </IconButton>
                                <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                                >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                }}
                            >
                                MUI
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                                </Tooltip>
                                <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                </Menu>
                            </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>

                    <Stack direction="column" mt={5} marginLeft={20}>
                        <Card variant='outlined' direction="column">
                                <TextField id="outlined-basic" label="email" variant="outlined" mt={3} sx={{width: 350}}/> <br/> <br/>

                                <TextField id="outlined-basic" label="password" variant="outlined" sx={{width: 350}} /><br/> <br/>

                                <Button variant='contained' direction="row" >Login</Button>
                        </Card>            
                    </Stack>    



                </Grid>

            </div>

        </div>
    </>)
}

