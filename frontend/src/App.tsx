import React, { useEffect, useState } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { IonApp } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { useSelector, connect } from 'react-redux';
import api from './api'
import Welcome from './pages/Welcome'
import Dashboard from './pages/Dashboard'
import StockComponent from './pages/Stock'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
// import RedirectToWelcome from './pages/Redirect/RedirectToWelcome'
// Redux
import { loadWatchlist } from './actions/watchlist'
import { setToken } from './actions/token'

// Types
import { AppState } from './types'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
/* Theme variables */
import './theme/variables.css'
import './theme/global.css'

interface AppProps {
    loadWatchlist: () => void,
    setToken: (token: string) => void,
}

const App: React.FC<AppProps> = (props) => {
    const state: AppState = useSelector((state: AppState) => state)
    const [refreshCheck, setRefreshCheck] = useState(false)

    async function refreshToken() {
        const rToken = localStorage.getItem('token')
        if (!state.token && rToken) {
            try {
                api.defaults.headers.common.Authorization = 'Bearer ' + localStorage.getItem('token')
                const response: any = await api.post('/api/user/refresh', {
                    refreshToken: rToken,
                })
                localStorage.setItem('token', response.data.token)
                props.setToken(response.data.token)
            } catch (e) {
                localStorage.removeItem('token')
                setRefreshCheck(true)
            }
        } else {
            setRefreshCheck(true)
        }
    }

    useEffect(() => {
        if (state.token !== null) {
            props.loadWatchlist()
        }
        refreshToken()
    }, [state.token])
    return (
        <IonApp>
            <IonReactRouter>
                <Switch>
                    {/* !state.token && refreshCheck ? <Redirect to="/signin" /> : null */}
                    <Route exact path="/signin" component={ SignIn } />
                    <Route exact path="/signup" component={ SignUp } />
                    <Route exact path="/welcome" component={ Welcome } />
                    <Route exact path="/dashboard" component={ Dashboard } />
                    <Route exact path="/stock/:symbol" component={ StockComponent } />
                    <Route exact path="/">
                    { state.token && refreshCheck ?
                        <Redirect to="/dashboard" />
                        :
                        <Redirect to="/welcome" />
                    }
                    </Route>
                </Switch>
            </IonReactRouter>
        </IonApp>
    )
}

export default connect(
  null,
  {
    loadWatchlist,
    setToken
  }
) (App)
