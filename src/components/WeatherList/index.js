import React from 'react';
import '../App/style.css';

export const WeatherList = (props) => {
  // debugger
  return (


    <div className='weather-list'>
      {/* {props.data.name} */}
    </div>
    // <ul className='weather-list'>
    //   {props.data.map( (item, index) => {
    //     const itemName = Object.keys(item)[0]
    //     return (
    //       <li key={index}>
    //         <span className='left'>{item[itemName].name}</span>
    //         <span className='right'></span>
    //       </li>
    //      )
    //    })
    //  }
    // </ul>
  )
}
// сделать погоду не массиваом а обхектом
// ключ значение  ключ- имя города
