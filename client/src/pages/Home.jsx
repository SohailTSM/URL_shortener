import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const shortenUrl = async (e) => {
    // e.preventDefault();
    const apiEndPoint =
      'https://url-shortener-ig8p.onrender.com/api/v1/shorten';
    const res = await fetch(apiEndPoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        longUrl: url,
      }),
    });

    const data = await res.json();
    if (res.status == 422) {
      return alert(data.message);
    }
    navigate('/shorten', { state: { shortUrl: data.shortUrl } });
  };
  return (
    <div className='flex bg-slate-100 h-screen items-center justify-center'>
      <div className='w-full max-w-2xl mx-auto p-5 bg-white border border-gray-200 rounded-lg shadow'>
        <div className='flex justify-center text-3xl font-bold mb-7 mt-2'>
          Paste the URL to be shortened
        </div>
        <div className='flex justify-center mx-10 mb-4'>
          <input
            type='text'
            className='border border-gray-300 text-lg w-full p-3 focus:border-my-blue focus:ring-0 focus:outline-none'
            placeholder='Enter the link here'
            onChange={urlChangeHandler}
            value={url}
          />
          <button
            className='border border-my-blue bg-my-blue text-white text-lg font-normal'
            onClick={shortenUrl}
          >
            Shorten URL
          </button>
        </div>
        <div className='flex justify-center'>
          URL Shortener is a free tool to shorten URLs and generate short links
        </div>
        <div className='flex justify-center'>
          URL Shortener allows to create a shortened link making it easy to
          share
        </div>
      </div>
    </div>
  );
};
export default Home;
