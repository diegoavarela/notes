
import Header from './components/header';
import Toolbox from './components/toolbox';
import Editor from './components/editor';
import Login from './components/login';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const logIn = () => {
    setIsLogin(!isLogin);
  }


  return (
    <div className="">
        {(isLogin) && (
          <section className="bg-overlay h-screen w-screen fixed m-0 flex justify-center align-middle items-center">
            <Login 
              logIn={logIn}/>
          </section> )}
        <Header 
          logIn={logIn} />
        <Toolbox />
        <Editor />
    </div>
  );
}

export default App;
