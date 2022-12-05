import { missionstatement } from "../constants";
import styles from "../style";
import MissionCard from "./MissionCard";

const Founders = () => (
  <section id="founders" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Our mission for the <br className="sm:block hidden" /> future of public relations.
      </h2>
      <div className="w-full md:mt-0 mt-6">
       
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full mission-container relative z-[1]">
      {missionstatement.map((card) => <MissionCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Founders;