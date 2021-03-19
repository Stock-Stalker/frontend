import React from 'react'
import { IonPage, IonContent, IonHeader } from '@ionic/react'
import SearchBar from './Searchbar'
import logo from '../assets/logo-tertiary.svg'
import './Layout.css'

interface LayoutProps {
    searchbar?: boolean
}
const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                    <div className="header-content">
                        <img
                            src={logo}
                            className="logo"
                            width="150px"
                            alt="Stock Stalker Logo"
                        />
                        {
                            props.searchbar &&
                            <div className="searchbar-container">
                                <SearchBar />
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
