import { Button, Input } from 'antd';
import TrackChanges from '../../assets/images/TrackChanges.svg';
import Chart from '../../assets/images/Chart.svg';
import Payouts from '../../assets/images/Payouts.svg';
import AsthaFlowImg from '../../assets/images/AsthaFlow.svg';
import AppStore from '../../assets/images/AppStore.svg';
import './style.scss';

const AsthaFlow = () => {
  return (
    <div className="asthaflow container-sm">
      <div className="asthaflow-header">
        <h2>
          Evolve your investments <br />
          with AsthaFlow
        </h2>
      </div>
      <div className="row asthaflow-body">
        <div className="col">
          <div className="asthaflow-investway">
            <img src={TrackChanges} alt="TrackChanges" />
            <div className="ms-3">
              <h5>Track Market Changes</h5>
              <p>
                Set custom alerts to get notified of any market changes for a
                faster, smarter way of monitoring the market. Now manage
                multiple investments effortlessly.
              </p>
            </div>
          </div>
          <div className="asthaflow-investway">
            <img src={Chart} alt="Chart" />
            <div className="ms-3">
              <h5>Chart Based Trading</h5>
              <p>
                Make informed trading decisions with a full view of market
                trends on a comprehensive chart-based dashboard.
              </p>
            </div>
          </div>
          <div className="asthaflow-investway">
            <img src={Payouts} alt="Payouts" />
            <div className="ms-3">
              <h5>Faster Payouts</h5>
              <p>
                Enjoy greater liquidity with faster payout through multiple
                transaction methods directly in your bank account.
              </p>
            </div>
          </div>
          <div className="asthaflow-input">
            <div></div>
            <Input.Group compact>
              <Input
                style={{ width: 'calc(100% - 350px)' }}
                size="large"
                placeholder="Enter Your Mobile Number"
              />
              <Button type="primary" size="large">
                Send App Link
              </Button>
            </Input.Group>
          </div>
        </div>
        <div className="col asthaflow-image">
          <img src={AsthaFlowImg} alt="AsthaFlow" width="100%" />
        </div>
      </div>
      <div className="app-store">
        <img src={AppStore} alt="AppStore" />
      </div>
    </div>
  );
};

export default AsthaFlow;
