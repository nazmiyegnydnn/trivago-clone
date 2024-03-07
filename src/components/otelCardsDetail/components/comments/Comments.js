import React, { useState } from 'react';
import './Comments.scss'
import CloseButton from '../../../closeButton/CloseButton'
import { Slider } from 'antd';


const Comments = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className='comments'>
        <div className='commentsText'>
        <h3>Değerlendirme</h3>
        <span>9.10/10</span>
        <p>Mükemmel</p>
        </div>
        <div className='commentsList'>
          <div className='commentsListLeft'>
          <ul>
            <li> 
              <p>Odalar</p>
              <Slider defaultValue={30} disabled={disabled} />
              </li>
              <li> 
              <p>Servis</p>
              <Slider defaultValue={30} disabled={disabled} />
              </li>
          </ul>
          </div>
          <div className='commentsListRight'>
          <ul>
            <li> 
              <p>Odalar</p>
              <Slider defaultValue={30} disabled={disabled} />
              </li>
              <li> 
              <p>Servis</p>
              <Slider defaultValue={30} disabled={disabled} />
              </li>
          </ul>
          </div>
        </div>
        <CloseButton></CloseButton>
    </div>
  )
}

export default Comments