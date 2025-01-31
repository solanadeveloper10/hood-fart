import { useState } from 'react'

const CONTRACT = "f38gkJzmJ7uiVmBwJ6Rw2FzxZJ66hbTZMzHz4donj9d"

const Contract = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT)
      .then(() => {
        setIsCopied(true);
        // Optionally, reset the copied status after a short delay
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((error) => {
        console.error("Copy failed", error);
      });
  };

  return (
    <div className={'contract-wrapper'}>
      <p>
        {CONTRACT}
      </p>
      <button onClick={handleCopy} className='copy-btn'>Copy</button>
      {isCopied ? <div className='copied-text'>Copied!</div> : null}
    </div>
  )
}

export default Contract
