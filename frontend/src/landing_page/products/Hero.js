import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row mb-5 border-bottom'>
                <div className='col p-3 mt-5 text-center'>
                    <h1>Zerodha Products</h1>
                    <h5 className='mt-3 text-muted'>Sleek, modern, and intuitive trading platforms</h5>
                    <h6 className='mt-3 text-muted'>Check out our<a href='' style={{textDecoration:"none"}}> Investment offerings →</a></h6>
                </div>
            </div>
        </div>
     );
}

export default Hero;