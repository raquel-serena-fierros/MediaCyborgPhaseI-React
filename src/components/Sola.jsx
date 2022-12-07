import React from 'react'
import { features } from '../constants';
import styles, {layout} from "../style"; 

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[65%] h-[65%] object-contain" />
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

const Sola = () =>  (
  <section id="sola" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      To get more Media Coverage, metrics
 <br className="sm:block hidden" />  now matter more than connections. MediaCyborg recognizes that.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      MediaCyborg's AI publicists, Sola, covers media to fit today's
data-driven, high-efficiency era. Unlike traditional publicists, Sola works 24/7 to ensure you are always getting the best possible media coverage at all times.
      </p>

    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);
export default Sola