export const SET_HUMANS = "SET_HUMANS";
export const SET_SPYS = "SET_SPYS";
export const SET_SPY_ARRAY = "SET_SPY_ARRAY";
export const SET_LOCATION = "SET_LOCATION";
export const SET_TIMER = "SET_TIMER";
export const SHOW_FINAL_MODAL = "SHOW_FINAL_MODAL";
export const SET_GAME_PROGRESS = "SET_GAME_PROGRESS";
export const SET_THEME = "SET_THEME";

export const setTheme = (bool) => {
  return {
    type: SET_THEME,
    payload: bool,
  };
};
export const setHumans = (bool) => {
  return {
    type: SET_HUMANS,
    payload: bool,
  };
};
export const setSpys = (bool) => {
  return {
    type: SET_SPYS,
    payload: bool,
  };
};
export const setSpysArray = (bool) => {
  return {
    type: SET_SPY_ARRAY,
    payload: bool,
  };
};

export const setTimer = (bool) => {
  return {
    type: SET_TIMER,
    payload: bool,
  };
};
export const setLocation = (bool) => {
  return {
    type: SET_LOCATION,
    payload: bool,
  };
};
export const showFinalModal = (bool) => {
  return {
    type: SHOW_FINAL_MODAL,
    payload: bool,
  };
};
export const setGameProgress = (bool) => {
  return {
    type: SET_GAME_PROGRESS,
    payload: bool,
  };
};
