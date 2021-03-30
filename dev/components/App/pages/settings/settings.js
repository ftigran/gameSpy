import React, { useState } from "react";
import {Typography, Box, Button} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import './settings.scss'
import {useSelector, useDispatch} from 'react-redux'
import {setHumans, setSpys, setLocation, setSpysArray, setGameProgress} from '../../../../store/actions'
import locations from '../../../../store/locations'
import { useHistory } from "react-router";

const settings = () => {
  const history = useHistory();
    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      const onSubmit = (data) => {
        getSpyArray()
        dispatch(setLocation(locations[randomInteger(0,locations.length-1)]))
        dispatch(setGameProgress("cards"))
      };
    const humans = useSelector(state=>state.humans)
    const spys = useSelector(state=>state.spys)
    const dispatch = useDispatch();
    let spyLost=spys;
    const getSpyArray=()=>{
    let arr=[];
    let humansIsSpy=[]
    let hums=0;
    while(hums!=humans){
      arr.push(hums);
      humansIsSpy.push(false)
      hums++
    }
    while(spyLost){
      const rnd = randomInteger(0, humans-1)
      if(!humansIsSpy[rnd]){
        humansIsSpy[rnd]=true;
        spyLost--
      }
    }
    dispatch(setSpysArray(humansIsSpy))
  }

  return (
        <>  
<Typography component="h2" variant="h4">
        Параметры
      </Typography>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" >Количество игроков</Typography>
        🧒🧒
        <Rating 
        name="humans" 
        value={humans-2} 
        icon="🧒" 
        max={8}
        onChange={(event, newValue) => {
          if(newValue>2){dispatch(setHumans(newValue+2));}
        }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" >Количество шпионов</Typography>
        <Rating 
        name="spys" 
        value={spys} 
        icon="🕴️" 
        max={Math.floor(humans/2)}
        onChange={(event, newValue) => {
          dispatch(setSpys(newValue))
        }}
        />
      </Box>
        <Button onClick={onSubmit}>Next</Button>
        </>
    )
}
export default settings