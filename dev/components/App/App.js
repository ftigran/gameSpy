import React, { createContext, useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import useReactRouter from 'use-react-router'
  import Button from '@material-ui/core/Button';
  import Grid from '@material-ui/core/Grid';

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'

import './App.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import Settings from './pages/settings/settings'
import Cards from './pages/cards/cards'
import Timer from './pages/timer/timer'

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const DataContext = createContext()
import {store} from '../../store/store';
import {Provider, useSelector} from 'react-redux';
import ScrollSection from '../scroll-section/scroll-section'


const App = () => {
    //const { setValues, data } = useData();
    
  //const {location} = useReactRouter()
        return (
            <>  
            <Grid container className='appContainer' direction='column' justify="center" alignItems="center" >
            <Grid item>
                <Provider store={store}>
                    <GetGameProgress/>
                </Provider>
                
                    <ScrollSection/>
            </Grid>
            </Grid>
                    
            </>
        );
}

const GetGameProgress=()=>{
    const gameProgress = useSelector(state=>state.gameProgress)
    switch(gameProgress){
        case "settings":
            return <Settings/>
        case "cards":
            return <Cards/>
        case "timer":
            return <Timer/>
    }
}
export default App;

