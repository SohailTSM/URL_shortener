import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const Shorten = () => {
  const location = useLocation();
  const shortUrl = location.state.shortUrl;
  const [buttonStatus, setButtonStatus] = useState(true);

  const copyHandler = (e) => {
    setButtonStatus(!buttonStatus);
    navigator.clipboard.writeText(shortUrl);
    setTimeout(() => {
      setButtonStatus(true);
    }, 5000);
  };

  return (
    <div className='flex bg-slate-100 h-screen items-center justify-center'>
      <div className='w-full max-w-2xl mx-auto p-5 bg-white border border-gray-200 rounded-lg shadow'>
        <div className='flex justify-center text-3xl font-bold mb-7 mt-2'>
          Shortened Link
        </div>
        <div className='flex justify-center mx-10 mb-4'>
          <input
            type='text'
            className='border border-gray-300 text-lg w-full p-3 focus:border-my-blue focus:ring-0 focus:outline-none'
            value={shortUrl ? shortUrl : ''}
            disabled
          />
          <button
            className={`border ${
              buttonStatus
                ? 'border-my-blue bg-my-blue'
                : 'border-green-600 bg-green-600'
            } text-white text-lg font-normal w-24`}
            onClick={copyHandler}
            disabled={!buttonStatus}
          >
            {buttonStatus ? 'Copy' : 'Copied'}
          </button>
        </div>
        <div className='flex justify-center'>
          Save your link somewhere for future use
        </div>
      </div>
    </div>
  );
};
export default Shorten;
