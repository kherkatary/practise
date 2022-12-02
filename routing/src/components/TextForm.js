import React, { useState } from 'react'
export default function TextForm(props) {

    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const lowerCase = () => {
        setText(text.toLowerCase());
    }

    const upperCase = () => {

        setText(text.toUpperCase());
    }
    const to200 = () => {

         setText(text.slice(0,300));

    }

    const toCopy=()=>{

        let msg= document.getElementById("myBox");
        msg.select();
        navigator.clipboard.writeText(msg.value);


    }

    const [cut,txt]=useState("");
    const [text, setText] = useState("");


    return (


        <>

            <div className='container'>

                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"></label>
                    <textarea className="form-control" value={text} id="myBox" style={{backgroundColor: props.mode==="light"?"white":"black",color:props.mode==="light"? "black":"white"}} onChange={handleOnChange} placeholder='enter text' rows="8"></textarea>
                </div>
                <button className='btn btn-primary' onClick={upperCase}> convert to Upper Case </button>
                <button className='btn btn-primary mx-3' onClick={lowerCase}> convert to Lower Case </button>
                <button className='btn btn-primary mx-3' onClick={to200}> to 300 words </button>
                <button className='btn btn-primary mx-3' onClick={toCopy}> Copy to clipboard </button>

            </div>
            <hr />
            <div className='container'>
                <h2>Your Text Summary</h2>
                <ul>
                    <li><p>{text.length} Characters, {text.split(" ").length - 1} words</p></li>
                    <li><p>{0.00555 * (text.split(" ").length)} minutes to read(on average)</p></li>
                    <hr />
                    
                    <li>
                        <div className='container'>
                            <h3>Preview</h3>
                             <h4>{cut}</h4>
                            <p>{text}</p>
                        </div>
                    </li>
                </ul>


            </div>

        </>
    )

}




