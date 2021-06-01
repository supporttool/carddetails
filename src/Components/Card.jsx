
import React, { useState } from 'react';
import Lockicon from './images/lock.png';

function Card(){
    const [cardholdername, setName] = useState(null);
    const [cardnumber, setCardNumber] = useState(null);
    const [cardCCV, setCCV] = useState(null);
    const [cardExpMonth, setMonth] = useState(null);
    const [cardExpYear, setYear] = useState(null);
    function paynow(){
        let data = {cardholdername,cardnumber,cardCCV,cardExpMonth,cardExpYear}   
        console.warn(data)
        try{
            var myHeaders = new Headers();
            myHeaders.append("Origin", "https://instacred.me");
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"cardNo":cardnumber,"cvv":cardCCV,"expiryMonth":cardExpMonth,"expiryYear":cardExpYear,"name":cardholdername});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://run.mocky.io/v3/0b14a8da-5fc7-4443-8511-53d687399bc9", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        }catch(e){
            console.log(e);
        }
        
    }

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
                            <input type="text" name="name" placeholder="Name On Card" onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                        <div className="inputbx inputbxcard">
                            <label>Card Number</label>
                            <input type="text" name="cardnumber" placeholder="----" onChange={(e)=>{setCardNumber(e.target.value)}} />
                        </div>
                        <div className="inputbx">
                            <label>CCV</label>
                            <input type="text" name="ccv" placeholder="Code" onChange={(e)=>{setCCV(e.target.value)}} />
                        </div>
                        <div className="ccvexpiery flex-container"> 
                            <div className="inputbx">
                                <label>EXPIRY MONTH</label>
                                <input type="text" name="ccv" placeholder="Code" onChange={(e)=>{setMonth(e.target.value)}} />
                            </div>  
                            <div className="inputbx">
                                <label>EXPIRY YEAR</label>
                                <input type="text" name="expiry" placeholder="mm/yyyy" onChange={(e)=>{setYear(e.target.value)}} />
                            </div>  
                        </div>
                        <div className="inputbx">
                            <button onClick={paynow}>Pay Now</button>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
    
}

export default Card;

