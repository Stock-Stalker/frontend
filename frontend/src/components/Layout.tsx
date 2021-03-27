import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { IonPage, IonContent, IonHeader } from '@ionic/react'
import { useSelector } from 'react-redux';
import { AppState } from '../types'
import SearchBar from './Searchbar'
import SignOut from './SignOut'
import logo from '../assets/logo-tertiary.svg'
import './Layout.css'

interface LayoutProps {
    searchbar?: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
    const history = useHistory()
    const token: string = useSelector((state: AppState) => state.token)

    return (
        <IonPage>
            <IonHeader>
                <div className="header-content">
                    <Link to="/"><img
                        src={logo}
                        className="logo"
                        width="150px"
                        alt="Stock Stalker Logo"
                    /></Link>
                    {props.searchbar && (
                        <div className="searchbar-container">
                            <SearchBar />
                        </div>
                    )}
                    { token ?
                        <SignOut />
                        :
                        <div className="header-buttons">
                            <button
                                className="sign-in text-tertiary"
                                onClick={() => history.push('/signin') }
                            >
                                Sign in
                            </button>
                            <button
                                className="sign-up text-background"
                                onClick={() => history.push('/signup') }
                            >
                                Sign up
                            </button>
                        </div>
                    }
                </div>
            </IonHeader>
            <IonContent fullscreen>
                {props.children && props.children}
            </IonContent>
        </IonPage>
    )
}

export default Layout
