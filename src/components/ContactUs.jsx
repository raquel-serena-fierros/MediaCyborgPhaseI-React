import styles, {layout} from "../style";
import { contact } from "../constants";

const ContactCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== contact.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="email" className="w-[65%] h-[65%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const ContactUs = () => (
  <section id="contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className={layout.sectionInfo}>
      <div className="center-text"> 
      <h2 className={styles.heading2}> Get in touch!</h2>
      </div>
      {contact.map((info, index) => (
        <ContactCard key={info.id} {...info} index={index} />
      ))} 
    </div>
  </section>
);

export default ContactUs;


/*
<section
    id="contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Get in touch!</h2>

      <div className="flex flex-wrap sm:justify-start justify-center feedback-container relative z-[1]">
        {contact.map((info, index) => (
          <ContactCard key={info.id} {...info} index={index} />
        ))}
      </div>
    </div>
  </section>

   <section id="contact"
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Get in touch!</h2>

      {contact.map((info, index) => (
        <ContactCard key={info.id} {...info} index={index} />
      ))}
    </div>
  </section>
  */
