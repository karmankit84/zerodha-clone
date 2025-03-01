import React from 'react';

function Hero() {
    return ( 
      <div className='container'>
        <div className='row text-center p-5 mt-5'>
            <h1 className='mb-2'>Charges</h1>
            <h4 className='text-muted fs-4 mb-5' style={{opacity:"0.7"}}>List of all charges and taxes</h4>
            <div className='col-4 p-4 mt-5'>
             <img src='./media/images/pricing0.svg' /> 
             <h1 className='text-muted fs-2'>Free equity delivery</h1>
             <p className='mt-4 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4 mt-5'>
             <img src='./media/images/intradayTrades.svg' /> 
             <h1 className='text-muted fs-2'>Intraday and F&O trades</h1>
             <p className='mt-4 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-4 mt-5'>
             <img src='./media/images/pricing0.svg' /> 
             <h1 className='text-muted fs-2'>Free direct MF</h1>
             <p className='mt-4 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
           
        </div>
      </div>
     );
}

export default Hero;