import React, { useState } from "react";



export default function About(props) {

    const [mystyle, toggleMode] = useState({
        color: "white",
        backgroundColor: '#292726'

    }
    )

    const [btnTxt,setBtnTxt]=useState("Enable Light Mode")

    const toggleStyle = () => {
        if (mystyle.color === "white") {
            toggleMode({

                color: '#292726',
                backgroundColor: "white"

            })

            setBtnTxt("Enable Dark Mode");
        }



        else {
            toggleMode({

                color: "white",
                backgroundColor: '#292726'

            })

            setBtnTxt("Enable Dark Mode");

        }


    }






    return (

        <>

            <div className="accordion accordion-flush container" style={{backgroundColor: props.mode==="light"?"white":"black",color:props.mode==="light"? "black":"white"}} id="accordionFlushExample">
                <h1>About Us</h1>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{backgroundColor: props.mode==="light"?"white":"black",color:props.mode==="light"? "black":"white"}} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button"style={{backgroundColor: props.mode==="light"?"white":"black",color:props.mode==="light"? "black":"white"}} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==="light"?"white":"black",color:props.mode==="light"? "black":"white"}} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>

                <button onClick={toggleStyle} className="btn btn-primary my-5"> {btnTxt}</button>
            </div>

        </>
    )
}
