import { Button, Carousel } from 'antd';
import Avatar from '../../assets/images/Avatar.svg';
import './style.scss';

const Customers = () => {
  return (
    <div className="customers container-sm">
      <div className="customer-body">
        <div className="col-5 customer-left">
          <h2>
            Why Invest with <br />
            AsthaTrade?
            <br /> Ask our clients..
          </h2>
          <p className="col-10">
            For 20 years, AsthaTrade has empowered our clients by helping them
            to take control of their financial lives by providing them with a
            wealth of market knowledge and experience.
          </p>
          <Button type="primary" size="large">
            Open Free Account
          </Button>
        </div>
        <div className="col-7 customers-review-normal">
          <div className="row customers-review">
            <div className="col-4 customer-review review1 p-4">
              <p>
                Loved the Pay Later feature of Astha. My returns have increased
                4 times since I started using it. No one else has this product
                at this low interest rate.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Shubhankar</h5>
                  <h6>Marker At Ambuja Cement</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review review2 p-4">
              <p>
                I started trading 1 year back. Soon, many housewives started
                approaching me to learn trading.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Priyanka Abhishek</h5>
                  <h6>Manager At ANZ</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review review3 p-4">
              <p>
                This is the best platform for expert traders. Best high margin
                features available with them.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Ajay Singh</h5>
                  <h6>Businessman</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review review4 p-4">
              <p>
                Best MTF product in the market. Initially I got confused with
                the name "Pay Later" but then I realised it is the lowest
                interest MTF.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Santosh Gupta</h5>
                  <h6>Business Head At Nobroker</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review review5 p-4">
              <p>
                Have been using Astha Trade for the past 10 years. I recommend
                them as the safest brokers I trust in the market.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Naveen</h5>
                  <h6>SDE At Amazon</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review review6 p-4">
              <p>
                Easy to use mobile application means I can trade from anywhere
                at anytime and stay on top of my game at all times even on the
                go.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Chirag Lunawat</h5>
                  <h6>Product At Fashinza</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers-review-carousel">
          <Carousel autoplay>
            <div className="col-4 customer-review p-4">
              <p>
                Loved the Pay Later feature of Astha. My returns have increased
                4 times since I started using it. No one else has this product
                at this low interest rate.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Shubhankar</h5>
                  <h6>Marker At Ambuja Cement</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review p-4">
              <p>
                I started trading 1 year back. Soon, many housewives started
                approaching me to learn trading.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Priyanka Abhishek</h5>
                  <h6>Manager At ANZ</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review p-4">
              <p>
                This is the best platform for expert traders. Best high margin
                features available with them.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Ajay Singh</h5>
                  <h6>Businessman</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review p-4">
              <p>
                Best MTF product in the market. Initially I got confused with
                the name "Pay Later" but then I realised it is the lowest
                interest MTF.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Santosh Gupta</h5>
                  <h6>Business Head At Nobroker</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review  p-4">
              <p>
                Have been using Astha Trade for the past 10 years. I recommend
                them as the safest brokers I trust in the market.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Naveen</h5>
                  <h6>SDE At Amazon</h6>
                </div>
              </div>
            </div>
            <div className="col-4 customer-review p-4">
              <p>
                Easy to use mobile application means I can trade from anywhere
                at anytime and stay on top of my game at all times even on the
                go.
              </p>
              <div className="d-flex align-items-center gap-4">
                <img src={Avatar} alt="Avatar" />
                <div>
                  <h5>Chirag Lunawat</h5>
                  <h6>Product At Fashinza</h6>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Customers;
