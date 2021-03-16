import bgr from './Login.png';

import './App.css';

function App() {
  return (
    <div style={{backgroundImage:`url(${bgr})`}} className="App">
 <section className="login" >
 <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="login__left">
                <h1 className="login__left__tile">Task Manager</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="login__right">
                <form action method="post">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" aria-label="Recipient's password" aria-describedby="basic-addon2" />
                  </div>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
 </section>
     
       
    

    </div>
  );
}

export default App;
