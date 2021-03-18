import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Welcome from './pages/Welcome'
import Stock from './pages/Stock'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css'
import './theme/global.css'

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/welcome">
                    <Welcome />
                </Route>
                <Route exact path="/stock/:symbol">
                    <Stock />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/">
                    <Redirect to="/welcome" />
                </Route>
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>
)

export default App
