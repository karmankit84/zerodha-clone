import React from 'react';

function Hero() {
    return (
        <section id="supportHero">
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <h1 className='p-5 fs-4'>Support Portal</h1>
                        <p className='ps-5 fs-5'>Search for an answer or browse help topics to create a ticket</p>
                        <form className='fs-6 ps-5 mt-4'>
                            <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input>
                        </form>
                        <div className='ps-5 mt-4 mb-5' id='supportLink'>
                            <a href='' className='m-4'>Track account opening</a>
                            <a href='' className='m-4'>Track segment activation</a>
                            <br />
                            <a href='' className='m-4'>Intraday margins</a>
                            <a href='' className='m-4'>Kite user manual</a>


                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row ps-5'>
                            <a href=''> <h4 className='p-5 fs-5'>Track tickets</h4></a>
                            <p className='fs-4'>Featured</p>
                            <ol className='fs-6'>
                                <a href=''>
                                    <li>Surveillance measure on scrips - February 2025</li>
                                    <li className='mt-3'>Current Takeovers and Delisting - February 2025</li>
                                </a>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
            <div className=' p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Ticket</a>
            </div>
            <div className='row p-5' >
                <div className='col-6 p-5 ' >
                    <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket
                    </h1>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'></input><br/>
                    <a href=''>Track account opening </a>
                    <a href=''>Track segment activation</a> 
                    <a href=''>Intraday margins</a>
                    <a href=''>Kite user manual</a>
                </div>


                <div className='col-6 p-5' >
                    <h1 className='fs-3'>Featured
                    </h1>
                    <a href=''>Surveillance measure on scrips - February 2025</a>
                    <a href=''>Current Takeovers and Delisting - February 2025</a>
                </div>
            </div> */}


        </section >
    );
}

export default Hero;