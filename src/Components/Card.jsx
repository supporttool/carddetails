
import React from 'react';
import Lockicon from './images/lock.png';

function Card(){
    return(
        <main>
            <div className="formbxmain">
                <div className="cardformbx">
                    <div className="payementtitle">
                        <p><span className="payicon"><img src={Lockicon} /></span> Payment</p>
                    </div>
                    <section className="formbx">
                        <div className="inputbx">
                            <label>Card Holders Name</label>
                            <input type="text" name="name" placeholder="Name On Card" />
                        </div>
                        <div className="inputbx inputbxcard">
                            <label>Card Number</label>
                            <input type="text" name="name" placeholder="---- ---- ---- ----" />
                        </div>
                        <div className="ccvexpiery flex-container"> 
                            <div className="inputbx">
                                <label>CCV</label>
                                <input type="text" name="name" placeholder="Code" />
                            </div>  
                            <div className="inputbx">
                                <label>EXPIRY</label>
                                <input type="text" name="name" placeholder="mm/yyyy" />
                            </div>  
                        </div>
                        <div className="inputbx">
                            <button>Pay Now</button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Card;

