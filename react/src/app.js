import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Header from './views/header';
import Portada from './views/portada';
import Menu from './views/menu';

const App = () => {

    const { pathname } = useLocation();
    
    return (
        <Box>
            { pathname !== '/' &&
                <Header />
            }
            <Routes>
                <Route path='/' element={<Portada />}/>
                <Route path='/menu' element={<Menu />}/>
                <Route path='/carrito' element={<Typography variant='h1'>Carrito</Typography>}/>
                <Route path='*' element={<Typography variant='h3'>Oops!</Typography>}/>
            </Routes>
        </Box>
    )
}
export default App;