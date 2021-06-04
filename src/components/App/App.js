import React, { Suspense} from 'react'

import {Grid} from "@material-ui/core"
import './App.scss'

const Settings = React.lazy(() => import("./pages/settings/settings"));
const Cards = React.lazy(() => import("./pages/cards/cards"));
const Timer = React.lazy(() => import("./pages/timer/timer"));


import {store} from '../../store/store';
import {Provider, useSelector} from 'react-redux';


const App = () => {
        return (
            <>  
                <Provider store={store}>
                    <PageWrapper/>
                </Provider>
            </>
        );
}

const PageWrapper=()=>{
    const isDarkTheme = useSelector(state=>state.isDarkTheme)
    return(
<Grid container className={isDarkTheme?"appContainer dark":"appContainer"} direction='column' justify="center" alignItems="center">
            <Grid item className="appWpap">
      <Suspense fallback={<div >Загрузка...</div>}>
      <GetGameProgress/>

      </Suspense>

            </Grid>
            </Grid>
    )
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

