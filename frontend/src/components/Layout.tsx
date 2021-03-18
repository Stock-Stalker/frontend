import React from 'react'
import { IonPage, IonContent, IonHeader, IonToolbar } from '@ionic/react'
import logo from '../assets/logo-tertiary.svg'
import './Layout.css'

const Layout: React.FC = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <img
                        src={logo}
                        className="logo"
                        width="100"
                        alt="Stock Stalker"
                    />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <img
                            src={logo}
                            className="logo"
                            width="100"
                            alt="Stock Stalker"
                        />
                    </IonToolbar>
                </IonHeader>
                {props.children && props.children}
            </IonContent>
        </IonPage>
    )
}

export default Layout
