
import * as constants from '../constants'
import Immutable from 'immutable';


const initialState = Immutable.fromJS({
  loading: false,
  defaultText: 'redux is connected',
  cityName: '',
  isError: false,
  data: {}
})

export default function rootReducer(state = initialState,action) {
  switch (action.type) {
    case constants.CITY_NAME_CHANGE: {
      return state.set('cityName', action.payload)
    }
    break;
    case constants.WEATHER_REQUEST: {
      return state.set('loading', true)
    }
    break;
    case constants.WEATHER_SUCCESS: {
      // const name = action.payload.data.name
      debugger
      return state
                .set('data', Immutable.fromJS(action.payload))
                .set('loading', false)
                .set('isError', false)
// сделать погоду не массиваом а обхектом
// ключ значение  ключ- имя города
    }
    break;
    case constants.WEATHER_FAILURE: {
      return state
                .set('loading', false)
                .set('isError', true)
    }
    break;
  }
  return state
}



// switch (action.type) {
//   case constants.WEATHER_REQUEST: {
//     return  { ...state,loading: true }
//   }
//   break;
//   case constants.WEATHER_SUCCESS: {
//     const name = action.payload.data.name
//     return  { ...state,
//               loading: false,
//               data: [...state.data, { [name]: action.payload.data } ] }
//   }
//   break;
//   case constants.WEATHER_FAILURE: {
//     return  { ...state,
//               loading: false,
//               isError: true,
//             }
//   }
//   break;
// }
