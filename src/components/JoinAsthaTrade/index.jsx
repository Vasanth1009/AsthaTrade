import { Button } from 'antd';
import './style.scss';

const JoinAsthaTrade = () => {
  return (
    <div className="join-astha-trade">
      <div className="container-sm">
        <div className="join-astha-trade-body">
          <div className="join-astha-trade-content">
            <h2>
              Sign up to the AsthaTrade experience <br /> that our traders trust
            </h2>
            <Button type="primary" className="button">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAsthaTrade;
