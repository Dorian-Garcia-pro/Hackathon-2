import Depot from "./Depot";
import Exploitation from "./Exploitation";
import Finances from "./Finances";
import Hall from "./Hall";
import Home from "./Home";

const Main = ({ selectPage }) => {
  switch (selectPage) {
    case 1:
      return (
        <div>
          <Home />
        </div>
      );
    case 2:
      return (
        <div>
          <Depot />
        </div>
      );
    case 3:
      return (
        <div>
          <Hall />
        </div>
      );
    case 4:
      return (
        <div>
          <Exploitation />
        </div>
      );
    case 5:
      return (
        <div>
          <Finances />
        </div>
      );
    default:
      return <div>Erreur 404, I guess.</div>;
  }
};

export default Main;
