import React from 'react';

function LeftSection({ imageURL, productName, tryDemo, learnMore, googlePlay, appStore, productDesription }) {
  return (

    <div className='container mt-5 '>
      <div className='row '>
        <div className='col-6 '>
          <img src={imageURL} />
        </div>
        
        <div className='col-6 p-5 mt-5'>
          <h1>{productName}</h1>
          <p style={{lineHeight:"2"}}>{productDesription}</p>
          <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo→</a>
          <a href={learnMore} style={{ marginLeft: "50px",textDecoration:"none" }}>Learn More→</a>
          <div className='mt-5 '>
            <a href={googlePlay}><img src="./media/images/googlePlayBadge.svg" /></a>
            <a href={appStore}><img src='./media/images/appstoreBadge.svg' /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;