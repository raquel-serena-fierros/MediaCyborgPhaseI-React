import styles from "./style";
import {
  Billing,
  Sola,
  CardDeal,
  Founders,
  ContactUs,
  Footer,
  Navbar,
  Header,
  Submit,
  EmailForm,
  WaitingListForm,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Sola />
        <WaitingListForm/>
        
        <ContactUs />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
