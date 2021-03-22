import React, { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { useSelector, connect } from 'react-redux';
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

// Redux
import { loadWatchlist } from './actions/watchlist'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
/* Theme variables */
import './theme/variables.css'
import './theme/global.css'

interface AppProps {
    loadWatchlist: () => void
}

interface AppState {
    token: string
    watchlist: Array<string>
}
const App: React.FC<AppProps> = (props) => {
    const state: AppState = useSelector((state: AppState) => state)
    useEffect(() => {
        if (state.token !== null && state.watchlist === null)
            props.loadWatchlist()
    }, [state.token])
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/signin">
                        <SignIn />
                    </Route>
                    <Route exact path="/signup">
                        <SignUp />
                    </Route>
                    <Route exact path="/welcome">
                        <Welcome />
                    </Route>
                    <Route exact path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route exact path="/stock/:symbol">
                        <Stock />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/welcome" />
                    </Route>
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}

export default connect(
  null,
  { loadWatchlist }
) (App)
