import React from 'react'
import "./Share.css"
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrapper">
            <div className="sharetop">
                <img  className="shareimg" src="/assets/person/1.jpeg" alt="" />
                <input  placeholder='search your friend' className='shareinput'/>
            </div>
            <hr  className='shareline'/>
            <div className="sharebottom">
                <div className="shareoptions">
                    <div className="shareoption">
                        <VideoCameraBackIcon style={{ color: 'red' }} className='shareicon' />
                        <span className="shareoprtiontext">
                            photo and video
                        </span>
                    </div>
                    <div className="shareoption">
                        <LabelImportantIcon style={{ color: 'blue' }} className='shareicon' />
                        <span className="shareoprtiontext">
                            Tags
                        </span>
                    </div>
                    <div className="shareoption">
                        <LocationOnIcon  style={{ color: 'green' }} className='shareicon'/>
                        <span className="shareoprtiontext">
                             Location
                        </span>
                    </div>
                    <div className="shareoption">
                        <EmojiEmotionsIcon  style={{ color: 'violet' }} className='shareicon'  />
                        <span className="shareoprtiontext">
                            Feelings
                        </span>
                    </div>
                    
                </div>
                <button className="sharebutton">share</button>
            </div>
        </div>
        
    </div>
  )
}
