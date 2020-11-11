import './App.css';
import Header from "./components/header"
import SellerForm from "./pages/seller"
import ProductForm from "./pages/productform"
import Footer from "./components/footer"
import ProductStore from "./pages/productstore"
import Signup from "./pages/signup";

import HorizontalLabelPositionBelowStepper from "./components/stepper"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <div>Business Tracker Application</div> */}
        <Switch>
          <Route path="/" exact>
            <Header />
            <Footer />

          </Route>
          <Route path="/seller" exact>

            <Header />
            <h1 style={{
              textAlign: "center",
              flex: 1
            }}>Be A Seller</h1>
            <HorizontalLabelPositionBelowStepper />
            <SellerForm />
            <Footer />

          </Route>
          <Route path="/productform" exact>
            <Header />
            <ProductForm />
            <Footer />

          </Route>
          <Route path="/productstore" exact>
            <Header />
            <ProductStore />
            <Footer />

          </Route>
          <Route path="/signup" exact>

            <Signup />
            <Footer />

          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
