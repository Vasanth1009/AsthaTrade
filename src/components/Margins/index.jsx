import './style.scss';
import Margins1 from '../../assets/images/Margins1.svg';
import Margins2 from '../../assets/images/Margins2.svg';
import Margins3 from '../../assets/images/Margins3.svg';
import MarginsChart from '../../assets/images/MarginsChart.svg';
import { Button } from 'antd';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const Margins = () => {
  return (
    <div className="margins">
      <div className="container">
        <div className="row margins-header">
          <div className="col margins-header-item mh1">
            <img src={Margins1} alt="Paperless Account" />
            <div>Paperless Account Opening</div>
          </div>
          <div className="col margins-header-item mh2">
            <img src={Margins2} alt="Best Margins" />
            <div>Best Margins</div>
          </div>
          <div className="col margins-header-item mh3">
            <img src={Margins3} alt="Quick Payouts" />
            <div>Quick Payouts</div>
          </div>
        </div>
      </div>
      <div className="margins-body">
        <div className="container">
          <div className="row">
            <img
              src={MarginsChart}
              alt="MarginsChart"
              className="col-7 head"
              width="100%"
            />

            <div className="col margins-content">
              <h2>5X margins on equity at 3.99% interest per annum</h2>
              <p>
                Take control of your investments with the best in class delivery
                margins provided by Astha. Stay ahead of the curve with Astha’s
                20 years of experience and maximize your returns now.
              </p>
              <img src={MarginsChart} alt="MarginsChart" className="child" />
              <div className="margins-buttons">
                <Button type="primary" className="button">
                  Learn More
                </Button>
                <Button className="button">Calculate Margin</Button>
              </div>
              <div className="info">
                <AiOutlineInfoCircle />
                <span>Stock & Trading Disclosure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Margins;
