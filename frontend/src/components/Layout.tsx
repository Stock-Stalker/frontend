import React from 'react'
import {
    IonPage,
    IonContent,
    IonHeader,
    IonToolbar,
} from '@ionic/react'
import SearchBar from './Searchbar'
import logo from '../assets/logo-tertiary.svg'
import './Layout.css'

interface LayoutProps {
  searchbar?: boolean,
}
const Layout: React.FC<LayoutProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <img
                        src={ logo }
                        className="logo"
                        width="100"
                        alt="Stock Stalker"
                    />
                    {props.searchbar && <SearchBar />}
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <img
                            src={ logo }
                            className="logo"
                            width="100"
                            alt="Stock Stalker"
                        />
                        {props.searchbar && <SearchBar />}
                    </IonToolbar>
                </IonHeader>
                {props.children && props.children}
            </IonContent>
        </IonPage>
    )
}

export default Layout
