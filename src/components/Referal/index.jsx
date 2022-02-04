import './style.scss';
import ReferalImg from '../../assets/images/Referal.svg';
import { Button } from 'antd';

const Referal = () => {
  return (
    <div className="referal">
      <div className="container-sm">
        <div className="row">
          <div className="referal-body">
            <div className="referal-image">
              <img src={ReferalImg} alt="Referal" width="100%" />
            </div>
            <div className="col-5 referal-content">
              <h5>Spread the word and get Rs 100/-</h5>
              <h2>Refer your friends to earn</h2>
              <p>
                Refer your friends to trade with Astha & get Rs 100 instantly
              </p>
              <Button type="primary" className="button">
                Refer Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referal;
