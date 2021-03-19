import React from 'react'
import { IonPage, IonContent, IonHeader, IonToolbar } from '@ionic/react'
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
                <IonToolbar>
                    <div className="header-content">
                        <img
                            src={logo}
                            className="logo"
                            width="150px"
                            alt="Stock Stalker Logo"
                        />
                        {props.searchbar && <SearchBar />}
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {props.children && props.children}
            </IonContent>
        </IonPage>
    )
}

export default Layout
