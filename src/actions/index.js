import { createAction } from 'redux-actions'
import axios from 'axios'
import * as constants from '../constants'


const getApiUrl = (cityName) => {
  const key = 'b2f1e640487e3240149ab40f2907d56f'
  return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
}
const weatherRequest = createAction(constants.WEATHER_REQUEST)
const weatherSuccess = createAction(constants.WEATHER_SUCCESS)
const weatherFailure = createAction(constants.WEATHER_FAILURE)


export const getWeather = (params) => (dispatch) => {
  // debugger
  dispatch(weatherRequest())
  axios( getApiUrl( params ) , {method: 'get',})
    .then( response => {
      dispatch(weatherSuccess(response.data))
    })
    .catch( err => {
      console.error('request failure!', err)
      dispatch(weatherFailure())
    })
}
export const changeCityName = createAction(constants.CITY_NAME_CHANGE)

//       changeCityName()
// export const changeCityName = (e) => {
//   e.target.value
// }
