import React from 'react'
import { Button } from 'antd'
import './ShareButton.scss'


const ShareButton = () => {
  return (
    <div className='shareButton'>
    <Button>
        <div className='share'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="pointer-events-none max-h-full max-w-full"><path d="M18 15a3 3 0 00-2.46 1.29l-6.92-2.87a2.84 2.84 0 000-2.84l6.92-2.87A3 3 0 1015 6a3 3 0 00.12.8L8 9.76a3 3 0 100 4.48l7.14 3A3 3 0 1018 15zm0-11a2 2 0 11-2 2 2 2 0 012-2zM6 14a2 2 0 112-2 2 2 0 01-2 2zm12 6a2 2 0 112-2 2 2 0 01-2 2z" fill="currentColor"></path></svg>
        <p>Paylaş</p>
        </div>
    </Button>
    </div>
  )
}

export default ShareButton