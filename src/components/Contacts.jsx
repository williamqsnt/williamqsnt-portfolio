import styled from '@emotion/styled'
import { useState } from 'react'

const Contacts = () =>{
    
    let cleAPI = process.env.REACT_APP_CLE_API;
    const Airtable = require('airtable');
    const base = new Airtable({apiKey: cleAPI }).base('appLonkibDKT9LuDB');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const createData = async (Name,Email, Message) => {
    base('Portfolio_Contact').create([
        {
          "fields": {
            Name,
            Email,
            Message
          }
        },
      ], function(err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      });
    }

    const [Forms, updateForms] = useState(false);

    return Forms ? (
        <FormsMessage>
            <div class="FormsSuccess">
                <div class="Message">
                    <h2>Your message has been sent.<br/> Thanks, see you soon !</h2>
                    <h3>Do you want to contact me once more? This is my email :</h3>
                    <a href="mailto:quesnot.william@hotmail.com">quesnot.william@hotmail.com</a>
                </div>
            </div>
        </FormsMessage>
    ) : (
        <TextContent>
            <div className="Contact">
                <h3>Are you looking for an ideal <strong style={{color : '#49F2CA'}}>web developer </strong> for a mission?<br></br> Do not hesitate to send me a message, I am at your disposal for more information.</h3>
                <div className="Forms">
                    <form>
                        <label for="name">Name</label>
                        <input type='text' id="name" placeholder={name} onChange={e => setName(e.target.value)}/><br/>
                        <label for="email">Email</label>
                        <input type='text' id="email" placeholder={email} onChange={e => setEmail(e.target.value)} /><br/>
                        <label for="message">Message</label>
                        <input type='text' id="message" placeholder={message} onChange={e => setMessage(e.target.value)} style={{height : '150px', display : 'unset', margin : 'unset'}}/> 
                        <div className="btn">
                            <button onClick={()=> {createData(name,email,message); updateForms(true)}}>Send</button>
                        </div>
                    </form>              
                </div>
            </div>
        </TextContent>
    )  
}

export default Contacts

const FormsMessage = styled.div`

    .FormsSuccess{
       display : flex;
       justify-content :center;
       align-items : center;
       height : 100%;
       width : 100%;
       padding-bottom : 10em;
    }
    .Message h3{
        font-weight : 400;
        margin-left : 1em;
        margin-right : 1em;
        margin-bottom : 2em;
    }
    .Message{
        margin-top : 20em;
        text-align : center;
        color : lightgrey;
    }
    .Message a{
        padding : 0.5em 1em 0.5em 1em;
        color : #49F2CA;
        text-decoration : none;
        border : 2px solid #49F2CA;
    }
    a:hover{
        transition : 1s;
        box-shadow: inset 400px 0 0 0 #49F2CA;
        color :  #0A192F;
      }
    .Message h2{
        position : fixed;
        right : 20px;
        top : 100px;
        z-index : 10000;
        text-align : center;
        font-weight : 400;
        padding : 0.5em;
        opacity : 0.8;
        color : #49F2CA;
        border : 1px solid #49F2CA;
        animation : goodmsg 4s forwards;
        background-color : #0A192F;
        border-radius : 10px; 
    } 
    @keyframes goodmsg{
        0%{opacity : 0}
        20%{opacity : 1}
        30%{opacity : 1}
        50%{opacity : 1}
        90%{opacity : 1}
        100%{opacity : 0}
    }
`
const TextContent = styled.div`

    .Contact h3{
        margin-left : 1em;
        margin-right : 1em;
        text-align : center;
        font-weight : 400;
        color : lightgrey;
        margin-bottom : 2em;
    }
    .Forms{
        width : 30%;
        height : 300px;
    }
    form{
        height : 100%;
    }
    form label{
        font-size : 1.2em;
        color : lightgrey;
        font-weight : 500;
    }
    form input{
        width : 100%;
        height : 30px;
        margin-bottom : 1.5em;
        font-size : 1.5em;
        color : black;
        border : none;
        background-color : white;
    }
    .btn{
        text-align : center;
    }
    .btn button{
        margin : 1em;
        font-size : 1.5em;
        padding : 0.5em 3em 0.5em 3em;
        background-color : #49F2CA;
        color : #0A192F;
        border : none;
    }
    .btn button:hover{
        background-color : #0A192F;
        color : #49F2CA;
        border : 1px solid #49F2CA;
        box-shadow: inset 400px 0 0 0 #0A192F;
        transition : 0.6s;
        cursor : pointer;
    }
    .Contact {
        margin-top : 3em;
        display : flex;
        align-items : center;
        flex-direction : column;
        justify-content : center;

    }
    .Contact h2{
        color : #FF5151;
        font-size : 4em;
        letter-spacing : 5px;  

    }

`
