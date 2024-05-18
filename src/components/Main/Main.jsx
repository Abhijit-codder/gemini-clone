import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

   const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)


  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src='https://lh3.googleusercontent.com/a/ACg8ocJB_Ax1fin_iFTv3Y-N5cjH7dkJky03ztDacJSAHGEh_cfO9OwC=s432-c-no' alt=""/>
        </div>
        <div className="main-container">

          {!showResult
          ?<>
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
          
          
          
          </>
          :<div className='result'>
            <div className="result-title">
              <img src='https://lh3.googleusercontent.com/a/ACg8ocJB_Ax1fin_iFTv3Y-N5cjH7dkJky03ztDacJSAHGEh_cfO9OwC=s432-c-no' alt=""/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt=""/>
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            </div>
            
          </div>

          }
          
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
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