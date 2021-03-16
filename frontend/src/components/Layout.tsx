import React from 'react';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';

const Layout: React.FC = (props) => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Logo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Logo</IonTitle>
            </IonToolbar>
          </IonHeader>
          { props.children && props.children }
        </IonContent>
      </IonPage>
  );
};

export default Layout;
