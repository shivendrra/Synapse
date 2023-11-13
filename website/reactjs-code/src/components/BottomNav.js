import React from 'react';

export default function BottomNav(props) {
  return (
    <>
      <div className={`nav-btm container ${!props.state && 'd-none'}`}>
        <nav className='navbar-nav bg-light py-3 mt-1 bottom-nav rounded mb-4' role='navigation'>
          <div id="innerNav" className='container text-center mt-2'>
            <div className="audio-container">
              <h2>{props.audioTitle}</h2>
              <audio src={props.video?.audioID} id='current-song' preload='true' autoPlay />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

// AIzaSyBhbYzOh_B3snsiBlCEwI4DdUZbKJVHass
