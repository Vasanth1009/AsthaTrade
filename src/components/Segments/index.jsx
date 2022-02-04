import Stocks from '../../assets/images/Stocks.svg';
import StocksMobile from '../../assets/images/Stocks-Mobile.svg';
import Commodities from '../../assets/images/Commodities.svg';
import CommoditiesMobile from '../../assets/images/Commodities-Mobile.svg';
import Currencies from '../../assets/images/Currencies.svg';
import CurrenciesMobile from '../../assets/images/Currencies-Mobile.svg';
import IPO from '../../assets/images/IPO.svg';
import IPOMobile from '../../assets/images/IPO-Mobile.svg';
import FutureAndOptions from '../../assets/images/FutureAndOptions.svg';
import FutureAndOptionsMobile from '../../assets/images/FutureAndOptions-Mobile.svg';
import './style.scss';
import { Button } from 'antd';

const Segments = () => {
  return (
    <div className="segments container-sm">
      <h2>Explore segments</h2>
      <div className="segment-images">
        <div className="row segment-images-split ">
          <div className="col-lg-4 col mt-4">
            <img src={Stocks} alt="Stocks" className="segment-image-web" />
            <img
              src={StocksMobile}
              alt="StocksMobile"
              className="segment-image-mobile"
            />
          </div>
          <div className="col-lg-4 col mt-4">
            <img
              src={Commodities}
              alt="Commodities"
              className="segment-image-web"
            />
            <img
              src={CommoditiesMobile}
              alt="CommoditiesMobile"
              className="segment-image-mobile"
            />
          </div>
          <div className="col-lg-4 col mt-4">
            <img
              src={Currencies}
              alt="Currencies"
              className="segment-image-web"
            />
            <img
              src={CurrenciesMobile}
              alt="CurrenciesMobile"
              className="segment-image-mobile"
            />
          </div>
        </div>
        <div className="row segment-images-split">
          <div className="col-lg-6 col mt-4">
            <img src={IPO} alt="IPO" className="segment-image-web" />
            <img
              src={IPOMobile}
              alt="IPOMobile"
              className="segment-image-mobile"
            />
          </div>
          <div className="col-lg-6 col mt-4">
            <img
              src={FutureAndOptions}
              alt="FutureAndOptions"
              className="segment-image-web"
            />
            <img
              src={FutureAndOptionsMobile}
              alt="FutureAndOptionsMobile"
              className="segment-image-mobile"
            />
          </div>
        </div>
      </div>
      <div className="segment-button">
        <Button type="primary" className="button">
          Open Free Account
        </Button>
      </div>
    </div>
  );
};

export default Segments;
