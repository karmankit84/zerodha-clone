import React from 'react';

function Brockerage() {
    return (

        <div className='container'>
            <div className='row text-center p-5 mt-5 border-top'>

                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-4'>Brokerage calculator</h3></a>
                    <ul style={{textAlign:"left", lineHeight:"2"}} className='text-muted mt-5'>
                        <li><p>Call & Trade and RMS auto-aquareoff:Additional charges of Rs.50 + GST per order</p></li>
                        <li><p>Didital contract notes will be sent via e-mail</p></li>
                        <li><p>Physical copies of contract notes, if required, shall be charged Rs.20 per contract notr. Courior charge apply.</p></li>
                        <li><p>For NRI accout(non-PSI),0.5% or Rs.100 per executed order for equity(whichever is lower).</p></li>
                        <li><p>For NRI accout(PSI),0.5% or Rs.200 per executed order for equity(whichever is lower).</p></li>
                        
                    </ul>
                </div>
                <div className='col-4 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-4'>List of charges</h3></a>
                </div>
            </div>
        </div>


    );
}

export default Brockerage;