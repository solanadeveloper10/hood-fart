import Contract from './Contract'
import AnimatedBackground from './AnimatedBackground'

import './App.css'

function App() {
  return <>
    <div className='color-bg' />
    <div className='wrapper'>
      <header className='header'>
        <a href="https://x.com/RobinHoodFart" target='_blank' className='social-link'>
          X
        </a>
        <a href="https://t.me/RobinHoodFart" target='_blank' className='social-link'>
          Telegram
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/7KVM6kcP8dAJ8YxHS39yviBu4ozMi785mnXCF94hy3Ss?t=1738331221822" target='_blank' className='social-link'>
          Dextools
        </a>
        <a href="https://dexscreener.com/solana/f38gkJzmJ7uiVmBwJ6Rw2FzxZJ66hbTZMzHz4donj9d" target='_blank' className='social-link'>
          Dexscreener
        </a>
        <a href="https://raydium.io/swap/?inputMint=sol&outputMint=f38gkJzmJ7uiVmBwJ6Rw2FzxZJ66hbTZMzHz4donj9d" target='_blank' className='social-link'>
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
