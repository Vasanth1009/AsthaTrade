import { Button, Input } from 'antd';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import './style.scss';
import HomeImg from '../../assets/images/Home-mobile.svg';

const Home = () => {
  return (
    <div className="home">
      <div className="container-sm">
        <div className="home-content">
          <h1>Level Up Your Investment Power</h1>
          <h6>
            Astha combines 20 years of experience with state of the art
            technology to provide our traders with a seamless investing
            experience.
          </h6>
          <div className="home-input">
            <Input.Group compact>
              <Input
                style={{ width: 'calc(100% - 350px)' }}
                size="large"
                placeholder="Enter Your Mobile Number"
              />
              <Button type="primary" size="large">
                Open Free Account
              </Button>
            </Input.Group>
          </div>
          <div className="home-button">
            <Button type="primary" size="large">
              Open Free Account
            </Button>
          </div>
          <div className="info">
            <AiOutlineInfoCircle />
            <span>Stock & Trading Disclosure</span>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={HomeImg} alt="homeImage" width="100%" />
      </div>
    </div>
  );
};

export default Home;
