import { Carousel } from 'antd';
import MCX from '../../assets/images/MCX_logo.svg';
import NSDL from '../../assets/images/NSDL_logo.svg';
import './style.scss';

const Trading = () => {
  return (
    <div className="trading">
      <div className="container-sm">
        <div className="trading-header">
          <h2>
            20 years of providing world class <br /> trading experience
          </h2>
        </div>

        <div className="trading-brokers">
          <div className="trading-carousel">
            <Carousel autoplay>
              <div className="trading-broker">
                <h4>Star performer (Highest growth rate)</h4>
                <p>NSDL, 2019</p>
                <img src={NSDL} alt="NSDL" />
              </div>
              <div className="trading-broker">
                <h4>Torchbearers of Commodity Derivatives Market</h4>
                <p>MCX, 2019</p>
                <img src={MCX} alt="MCX" />
              </div>
              <div className="trading-broker">
                <h4>Star performer (Account Opening)</h4>
                <p>NSDL, 2019</p>
                <img src={NSDL} alt="NSDL" />
              </div>
            </Carousel>
          </div>
          <div className="row trading-normal">
            <div className="trading-broker">
              <h4>Star performer (Highest growth rate)</h4>
              <p>NSDL, 2019</p>
              <img src={NSDL} alt="NSDL" />
            </div>
            <div className="trading-broker">
              <h4>Torchbearers of Commodity Derivatives Market</h4>
              <p>MCX, 2019</p>
              <img src={MCX} alt="MCX" />
            </div>
            <div className="trading-broker">
              <h4>Star performer (Account Opening)</h4>
              <p>NSDL, 2019</p>
              <img src={NSDL} alt="NSDL" />
            </div>
          </div>
        </div>
        <div className="row trading-statistics">
          <div className="col-4 trading-statistic">
            <div className="stick"></div>
            <div children="statistic-detail">
              <h3>1 Lakh</h3>
              <h6>Community of Active Traders</h6>
            </div>
          </div>
          <div className="col-4 trading-statistic">
            <div className="stick"></div>
            <div children="statistic-detail">
              <h3>x/10</h3>
              <h6>Complaints with SEBI</h6>
            </div>
          </div>
          <div className="col-4 trading-statistic">
            <div className="stick"></div>
            <div children="statistic-detail">
              <h3>100%</h3>
              <h6>Growth Acheived yoy</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trading;
