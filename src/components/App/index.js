import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader } from '../Loader'
import { ErrorBox } from '../ErrorBox'
import { WeatherList } from '../WeatherList'
import { getWeather, changeCityName } from '../../actions'


const App = (props) => {
  const { defaultText,
          loading,
          isError,
          onSubmite,
          data,
          cityName,
          onChange
        } = props
        // debugger
  let textInput = null

  const handleSubmite = (e) => {
    e.preventDefault();
    onSubmite(cityName)
  }
  return (
      <div className='container'>
        <h2>{defaultText}</h2>
        <form action="#">
          <input type="text" placeholder='input city'
                 value={props.cityName}
                 onChange={ (e) => onChange(e.target.value)}
            />
        <button onClick={handleSubmite}>submite</button>
        </form>
        <WeatherList data={data} />
        { isError && <ErrorBox/> }
        { loading && <Loader/> }
      </div>
  )
}




const mapStateToProps = (state) => ({
  defaultText: state.get('defaultText'),
  cityName: state.get('cityName'),
  loading: state.get('loading'),
  isError: state.get('isError'),
  // data: state.get('data')
    data: state.getIn(['weather', 'main', 'temp'])
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    onSubmite: (params) => getWeather(params),
    onChange: (value) => changeCityName(value)
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App)
