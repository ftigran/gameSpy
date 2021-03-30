import React, { createContext, useState, useContext } from 'react'

// import Main from '../pages/main/main'
// import Header from './Header/Header'
// import Footer from './Footer/Footer'
// import Registration from '../pages/Registration/Registration'
// import Cabinet from '../pages/Cabinet/Cabinet'
import {Grid} from "@material-ui/core"
import './App.scss'
//import ScrollSection from './scroll-section/scroll-section'

//import FAQ from '../pages/faq/faq'
import Settings from './pages/settings/settings'
import Cards from './pages/cards/cards'
import Timer from './pages/timer/timer'


const DataContext = createContext()
import {store} from '../../store/store';
import {Provider, useSelector} from 'react-redux';


const App = () => {
    
        return (
            <>  
            <Grid container className='appContainer' direction='column' justify="center" alignItems="center" >
            <Grid item className="appWpap">
                <Provider store={store}>
                    <GetGameProgress/>
                </Provider>
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

