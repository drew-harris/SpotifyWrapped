import LoginPage from './components/LoginPage';
import MainApp from './components/MainApp';
import {useState, useEffect} from 'react';

function App() {
  const [token, setToken] = useState(null);
  const [loadLogin, setLoadLogin] = useState(true);

  const grabToken = () => {
    if(window.location.hash) {

      const gotToken =  window.location.hash.substring(1).split('&').reduce((initial, item) => {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});

      setToken(gotToken.access_token);
    } 
    setLoadLogin(false);
  };

  useEffect(() => {
    grabToken();
    console.log(grabToken());
  }, []);


  if(loadLogin) {
    return (
      <h1>Loading...</h1>
    );
  }
  return (
    <div>
      {!token ? <LoginPage/> : <MainApp token={token} />}
    </div>
  );
}

export default App;
