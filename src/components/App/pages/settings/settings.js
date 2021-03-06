import React, { useState } from "react";
import { Typography, Box, Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import "./settings.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setHumans,
  setTimer,
  setTheme,
  setSpys,
  setLocation,
  setSpysArray,
  setGameProgress,
} from "../../../../store/actions";
import locations from "../../../../store/locations";
import { makeStyles } from "@material-ui/core/styles";
import startSound from "../../../../sounds/start.mp3";
import toggleSound from "../../../../sounds/toggle.mp3";
import clickSound from "../../../../sounds/click.mp3";
const sound = new Audio(startSound);
const toggle = new Audio(toggleSound);
const click = new Audio(clickSound);

const settings = () => {
  function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  const onSubmit = (data) => {
    sound.play();
    getSpyArray();
    dispatch(setLocation(locations[randomInteger(0, locations.length - 1)]));
    dispatch(setGameProgress("cards"));
  };
  const humans = useSelector((state) => state.humans);
  const spys = useSelector((state) => state.spys);
  const dispatch = useDispatch();
  let spyLost = spys;
  const getSpyArray = () => {
    let arr = [];
    let humansIsSpy = [];
    let hums = 0;
    while (hums != humans) {
      arr.push(hums);
      humansIsSpy.push(false);
      hums++;
    }
    while (spyLost) {
      const rnd = randomInteger(0, humans - 1);
      if (!humansIsSpy[rnd]) {
        humansIsSpy[rnd] = true;
        spyLost--;
      }
    }
    dispatch(setSpysArray(humansIsSpy));
  };
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  const toggleTheme = () => {
    if (isDarkTheme == false) {
      dispatch(setTheme(true));
    } else {
      dispatch(setTheme(false));
    }
    toggle.play();
  };

  return (
    <div className="ratings">
      <Typography component="h2" variant="h4">
        Параметры
      </Typography>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Количество игроков: {humans}</Typography>
        {/* //<span style={{fontSize: "1.5rem", cursor:"pointer"}}>🧒🧒</span> */}
        <Rating
          name="humans"
          value={humans}
          className="humans"
          icon="🧒"
          max={10}
          onChange={(event, newValue) => {
            if (newValue < 3) {
              newValue = 3;
            }
            const floor = Math.floor(newValue / 2);
            if (floor <= spys) {
              dispatch(setSpys(floor));
            }
            click.play();
            dispatch(setHumans(newValue));
            dispatch(setTimer(2 + newValue));
          }}
        />
      </Box>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Количество шпионов: {spys}</Typography>
        <Rating
          name="spys"
          className="spys"
          value={spys}
          icon="🕴️"
          max={Math.floor(humans / 2)}
          onChange={(event, newValue) => {
            click.play();
            if (newValue < 1) {
              newValue = 1;
            }
            dispatch(setSpys(newValue));
          }}
        />
      </Box>
      <Button variant="contained" onClick={onSubmit}>
        Начать игру
      </Button>
      <Button
        variant="outlined"
        className={isDarkTheme ? "themeButton dark" : "themeButton"}
        onClick={toggleTheme}
      >
        <span>☀️</span>
        <span>🌙</span>
      </Button>
    </div>
  );
};
export default settings;
