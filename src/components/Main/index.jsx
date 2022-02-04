import AsthaFlow from '../AsthaFlow';
import Customers from '../Customers';
import Home from '../Home';
import JoinAsthaTrade from '../JoinAsthaTrade';
import Margins from '../Margins';
import Referal from '../Referal';
import Security from '../Security';
import Segments from '../Segments';
import Trading from '../Trading';

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Margins></Margins>
      <Segments></Segments>
      <AsthaFlow></AsthaFlow>
      <Referal></Referal>
      <Trading></Trading>
      <Security></Security>
      <Customers></Customers>
      <JoinAsthaTrade></JoinAsthaTrade>
    </div>
  );
};

export default Main;
