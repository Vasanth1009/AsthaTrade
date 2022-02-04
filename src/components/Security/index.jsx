import SecurityHand from '../../assets/images/SecurityHand.svg';
import './style.scss';

const Security = () => {
  return (
    <div className="security">
      <div className="container-sm">
        <div className="security-body">
          <div className="security-img">
            <img src={SecurityHand} alt="securityHand" />
          </div>
          <div className="security-content">
            <h2>Your security is our top priority</h2>
            <p>
              Astha is always working to make your trading experience as smooth
              and efficient as possible.
              <br /> We have built our platform with TLS1.3 encryption to ensure
              that your data is yours alone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
