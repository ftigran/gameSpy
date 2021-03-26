export const SET_HUMANS='SET_HUMANS'
export const SET_SPYS='SET_SPYS'
export const SET_SPY_ARRAY='SET_SPY_ARRAY'
export const SET_LOCATION='SET_LOCATION'
export const SET_CARD_ID='SET_CARD_ID'


export const setHumans = (bool)=>{
  return {
      type: SET_HUMANS,
      payload: bool
}
}
export const setSpys = (bool)=>{
  return {
      type: SET_SPYS,
      payload: bool
}
}
export const setSpysArray = (bool)=>{
  return {
      type: SET_SPY_ARRAY,
      payload: bool
}
}
export const setLocation = (bool)=>{
  return {
      type: SET_LOCATION,
      payload: bool
}
}
export const setCardID = (bool)=>{
  return {
      type: SET_CARD_ID,
      payload: bool
}
}