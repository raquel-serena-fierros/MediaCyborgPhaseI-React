import styles from "../style";
import { mediarobot } from "../images";

const Header = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={"flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6"}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Optimized <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Stardom</span>{" "}
        </h1>
      </div>

      <p className={`${styles.paragraph} max-w-[470px] mt-9`}>
       The difference between a content creator and a celebrity 
       is the amount of earned media obtained. MediaCyborg's AI publicist,
        Sola, will help get you on the path of securing mass media attention.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={mediarobot}
        alt="mcrobot"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* gradient start */}
      <div className="absolute z-[0] w-[70%] h-[75%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[70%] h-[70%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Header;

/*
<div className="ss:flex hidden md:mr-4 mr-0">
            <WaitingList />
          </div>

          */
