import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BottomNav from './BottomNav';

export default function VideoCard(props) {
  const [audioUrl, setAudioUrl] = useState(null);
  const [bottomNav, setbottomNav] = useState(null);

  const handlePlay = async () => {
    const videoId = extractVideoId(props.videoUrl);

    if (videoId) {
      const url = `https://www.youtube.com/watch?v=${videoId}`;
      console.log(url)
      setAudioUrl(url);
      setbottomNav(' ');

      return url;
    } else {
      setAudioUrl(null);
      return null;
    }
  };

  function extractVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }

  return (
    <>
      <div className="container m-auto">
        <div className="card text-start mb-3 mx-auto" onClick={handlePlay} style={{ maxWidth: '80%', cursor: 'pointer' }}>
          <div className="row g-0">
            <div className="col-md-4 col-xs-4">
              <img src={props.imageUrl} className="object-fit-cover img-fluid img-thumbnail" style={{ objectFit: 'contain' }} alt="..." />
            </div>
            <div className="col-md-8 col-xs-8">
              <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.channel}</p>
                <p className="card-text"><small className="text-body-secondary">hello</small></p>
              </div>
            </div>
          </div>
        </div>
        {bottomNav && <BottomNav state={bottomNav} audioUrl={audioUrl} audioTitle={props.title}/>}
      </div>
    </>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string,
  channel: PropTypes.string,
  imageUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  audioUrl: PropTypes.string,
  duration: PropTypes.string,
};
