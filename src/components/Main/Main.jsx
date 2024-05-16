import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src='https://lh3.google.com/u/0/ogw/AF2bZyjONPljSNxXNhGfltQPGN751keYY6OvVo3hKbpK5c7P7A=s64-c-mo' alt=""/>
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Abhijit</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest a Python library to solve a problem</p>
              <img src={assets.code_icon} alt="" />
            </div>
            <div className="card">
              <p>Plan a low-carb meal with what's available in my fridge</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Suggest beaches to visit in a city, including details</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Find YouTube videos with inspiring best man speeches</p>
              <img src={assets.message_icon} alt="" />
            </div>
          </div>
          <div className="main-bottom">
            <div className="search-box">
              <input type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses.<u>Your privacy and Gemini Apps</u>
            </p>
          </div>

        </div>

    </div>
  )
}

export default Main