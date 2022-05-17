import './App.css';
import {WarningDialog, ErrorDialog, SuccessDialog} from './components/DialogButton';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h4>Dialogs Design System</h4>
      </header>
      <main>
        <WarningDialog text="Warning Dialog" />
        <ErrorDialog text="Error Dialog" />
        <SuccessDialog text="Success Dialog" />
      </main>
    </div>
  );
}

export default App;
