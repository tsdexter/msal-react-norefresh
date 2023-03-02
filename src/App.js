import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import './App.css';
import { AuthButton } from './AuthButton';
import Welcome from './Welcome';

function App(props) {
  return (
    <MsalProvider instance={props.msalInstance}>
      <div className="App">
        <Welcome />
        <AuthButton />
        <br />
        <AuthenticatedTemplate>
          you are authenticated
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          you are not authenticated
        </UnauthenticatedTemplate>
      </div>
    </MsalProvider>
  );
}

export default App;
