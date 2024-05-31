import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
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
            />
            <button className='border border-my-blue bg-my-blue text-white text-lg font-normal'>
              Shorten URL
            </button>
          </div>
          <div className='flex justify-center'>
            URL Shortener is a free tool to shorten URLs and generate short
            links
          </div>
          <div className='flex justify-center'>
            URL Shortener allows to create a shortened link making it easy to
            share
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
