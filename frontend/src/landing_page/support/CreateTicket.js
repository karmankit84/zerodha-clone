import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row p-5 mt-5 text-muted '>
                <h1 className='fs-3 ps-5'>To create a ticket, select a relevant topic</h1>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-circle-plus fs-5"></i>Account Opening</h4>

                    <div style={{lineHeight:"2.5"}}> <a href=''> Getting started</a><br />
                        <a href=''> Online</a><br />
                        <a href=''>Offline</a><br />
                        <a href=''>Charges</a><br />
                        <a href=''> Company, Partnership and HUF</a><br />
                        <a href=''>Non Resident Indian (NRI) </a><br /></div>

                </div>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-user fs-5"></i> Your Zerodha Account</h4>

                    <div style={{lineHeight:"2.5"}}>  <a href=''> Login credentials</a><br />
                        <a href=''>Your Profile</a><br />
                        <a href=''>Account modification and segment addition</a><br />
                        <a href=''>CMR & DP ID
                        </a><br />
                        <a href=''> Nomination</a><br />
                        <a href=''>Transfer and conversion of shares</a><br /></div>

                </div>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-money-bill-trend-up fs-5"></i> Trading and Markets</h4>

                    <div style={{lineHeight:"2.5"}}><a href=''> Trading FAQs</a><br />
                        <a href=''> Kite</a><br />
                        <a href=''>Margins</a><br />
                        <a href=''>Charges</a><br />
                        <a href=''> Corporate actions</a><br />
                        <a href=''>Kite features </a><br /></div>

                </div>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-credit-card fs-5"></i>Funds</h4>

                    <div style={{lineHeight:"2.5", textDecoration:"none"}}><a href=""> Fund withdrawal</a><br />
                        <a href=""> Adding funds</a><br />
                        <a href="">Adding bank accounts</a><br />
                        <a href="">eMandates</a><br /></div>


                </div>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-terminal fs-5"></i>Console</h4>

                    <div style={{lineHeight:"2.5"}}><a href="">IPO</a><br />
                        <a href="">Portfolio</a><br />
                        <a href="">Funds statement</a><br />
                        <a href="">Profile</a><br />
                        <a href=""> Reports</a><br />
                        <a href="">Referral program</a><br /></div>

                </div>
                <div className='col-4 p-5'>
                    <h4 className='mb-3'><i class="fa-solid fa-coins fs-5"></i>Coin</h4>

                    <div style={{lineHeight:"2.5"}}><a href=""> Understanding mutual funds and Coin</a><br />
                        <a href=""> Coin app</a><br />
                        <a href="">Coin web</a><br />

                        <a href=""> Transactions and reports</a><br />
                        <a href="">National Pension Scheme (NPS) </a><br /></div>

                </div>

            </div>
        </div>
    );
}

export default CreateTicket;