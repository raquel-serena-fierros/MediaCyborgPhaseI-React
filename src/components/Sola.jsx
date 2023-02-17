import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="lowercost" className="w-[65%] h-[65%] object-contain" />
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

const Sola = () => (
  <section id="sola" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
         Sola generates, maintains and manages fame
        <br className="sm:block hidden" /> for only $10 a month.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      1. Download the app and sign up in less than five minutes.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      2. Sola will work to increase your engagement.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px]">
        3.
      </h4>
         Once a certain level of engagement is reached, Sola can begin booking media coverage
         for you.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      4. Once you have been booked, Sola will give you advice on how to carry yourself in front
         of the media.
      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      5. You can keep track of your engagement and media coverage via weekly reports
         provided by Sola.
      </p>

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);
export default Sola;
