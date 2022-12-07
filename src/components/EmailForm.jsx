import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Result =() =>{
    return(
        <p> Your message has been submitted!</p>
    )
}


function EmailForm(props) {

    const[result, showResult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_2kviud1', 'template_4e288sg', form.current, 'LeLCq4hKck_i8k6br')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset(); 
          showResult(true);
      };


  return (
    <div>
      <div className="emailus" id="contact">
        <div className="contactOverlay">
          <div className="container">
            <div className="form">
              <form action="" onSubmit= {sendEmail}>
                <div className="formWord">
                  <h2>Say Hello!</h2>
                  <span>Full Name</span>
                  <br />
                  <input
                    classsName="input100"
                    type="text"
                    name="fullName"
                    required
                  />
                  <br />
                  <span>Enter Phone</span>
                  <br />
                  <input
                    classsName="input100"
                    type="text"
                    name="phone"
                    required
                  />
                  <br />
                  <span>Enter Email</span>
                  <br />
                  <input
                    classsName="input100"
                    type="text"
                    name="email"
                    required
                  />
                  <br />
                </div>

                <div className="formWord">
                  <span>Message</span>
                  <br />
                  <textarea name="message" required></textarea>
                  <br />
                  <button> SUBMIT</button>

                  <div className="row">
                    {result ? <Result /> : null}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default EmailForm;

/*

 "service_2kviud1",
        "template_4e288sg",
        form.current,
        "LeLCq4hKck_i8k6br"

*/
