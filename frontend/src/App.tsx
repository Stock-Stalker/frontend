import React, { useEffect } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { useSelector, connect } from 'react-redux';
import Welcome from './pages/Welcome'
import Stock from './pages/Stock'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import RedirectToWelcome from './pages/Redirect/RedirectToWelcome'
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

interface StockType {
    id: string
    symbol: string
    companyName: string
}

interface AppState {
    token: string
    watchlist: Array<StockType>
}
const App: React.FC<AppProps> = (props) => {
    const state: AppState = useSelector((state: AppState) => state)
    useEffect(() => {
        if (state.token !== null) {
            props.loadWatchlist()
        }
    }, [state.token])
    return (
        <IonApp>
            <IonReactRouter>
                <Switch>
                    <Route exact path="/signin" component={ SignIn } />
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/welcome" component={ Welcome } />
                    <Route exact path="/stock/:symbol" component={ Stock } />
                    <Route exact path="/">
                        <Redirect to="/welcome" />
                    </Route>
                </Switch>
            </IonReactRouter>
        </IonApp>
    )
}

export default connect(
  null,
  { loadWatchlist }
) (App)
