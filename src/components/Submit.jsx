import { useRef } from "react";
import WaitingListForm from "./WaitingListForm";
import emailjs from '@emailjs/browser';

const Sumbit = () => {

  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2kviud1', 'template_4e288sg', form.current, 'LeLCq4hKck_i8k6br')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type="text" name="user_name" />
    <label>Email</label>
    <input type="email" name="user_email" />

    <label>Number</label>
    <input type="text" name="user_phone" />

    <label>Message</label>
    <textarea name="message" />

    <button type="submit" className="font-poppins h-10 px-5 text-fuchsia-100 bg-fuchsia-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-fuchsia-800">
      Send email
     </button>
  </form>
    
  );
};

export default Sumbit;

/*

<form ref={form} onSubmit={sendEmail}>
      <WaitingListForm />
    </form>





    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />

      <label>Number</label>
      <input type="text" name="user_phone" />

      <label>Message</label>
      <textarea name="message" />

      <button type="submit" className="font-poppins h-10 px-5 text-fuchsia-100 bg-fuchsia-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-fuchsia-800">
        Send email
       </button>
    </form>
*/