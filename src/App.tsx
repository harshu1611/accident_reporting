import { Redirect, Route } from "react-router-dom";
import "./global.css";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import LoginPage from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import GetInsurance from "./pages/GetInsurance";
import Home from "./pages/Home";
import SOS1 from "./pages/SOS1";
import SOS2 from "./pages/SOS2";
import SOS3 from "./pages/SOS3";
import SOS4 from "./pages/SOS4";
import SOS5 from "./pages/SOS5";
import SOS6 from "./pages/SOS6";
import ClaimHistory from "./pages/ClaimHistory";
import ViewPolicies from "./pages/ViewPolicies";
import AIReport from "./pages/AIReport";


/* Basic CSS for apps built with Ionic */
// import "@ionic/react/css/normalize.css";
// import "@ionic/react/css/structure.css";
// import "@ionic/react/css/typography.css";

// /* Optional CSS utils that can be commented out */
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
// import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <LoginPage />
          </Route>
          <Route exact path="/addInsurance">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
          <Route exact path="/getInsurance" component={GetInsurance}>
          {/* <GetInsurance/> */}
          </Route>
          <Route exact path="/home" component={Home}>
          {/* <GetInsurance/> */}
          </Route>
          <Route exact path="/sos1" component={SOS1}></Route>
          <Route exact path="/sos2" component={SOS2}></Route>
          <Route exact path="/sos3" component={SOS3}></Route>
          <Route exact path="/sos4" component={SOS4}></Route>
          <Route exact path="/sos5" component={SOS5}></Route>
          <Route exact path="/sos6" component={SOS6}></Route>
          <Route exact path="/history" component={ClaimHistory}></Route>
          <Route exact path="/policies" component={ViewPolicies}></Route>
          <Route exact path="/aireport" component={AIReport}></Route>







        </IonRouterOutlet>
       
     
    </IonReactRouter>
  </IonApp>
);

export default App;
