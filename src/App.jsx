import Contract from './Contract'
import AnimatedBackground from './AnimatedBackground'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="#" target='_blank' className='social-link'>
          X
        </a>
        <a href="#" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="#" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="#" target='_blank' className='social-link'>
          Raydium
        </a>
      </header>

      <AnimatedBackground />

      <div className='image-wrapper'>
        <img src="/hoodfart.png" alt="Fork" className='image' />
      </div>

      <Contract />
    </div>

  </>
}

export default App
