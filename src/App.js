import './App.css';
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Introduction from './Home/1-Introduction';
import BasicExample from './Examples/1-BasicExample';
import LayoutExample from './Examples/2-LayoutExample';
function App() {
  return (
    <div className="react-app">
      <BrowserRouter >
          <div className='react-app-header'>
            <div className='react-app-header-text'>
                React PDF Viewer
            </div>
          </div>
          <div className="header-navbar">
              <nav className="top-nav-bar">
                  <ul style={{"padding":"0px","margin":"0px"}}>
                      <li>
                          <Link className="top-nav-bar-links" to="/react-pdf-viewer">Home</Link>
                      </li>
                      <li>
                          <a className="top-nav-bar-links" href="javascript:void(0)">Examples</a>
                          <div className="top-nav-dropdown"  style={{"display":"none"}}>
                              <Link className="top-nav-dropdown-links" to="/react-pdf-viewer-basic-example">Basic Example</Link>
                              <Link className="top-nav-dropdown-links" to="/react-pdf-viewer-layout-example">Layout Example</Link>
                          </div>
                      </li>
                  </ul>
              </nav>             
          </div>
          <div className="react-body">
              <Routes>
                  <Route exact path="/react-pdf-viewer" element={<Introduction />}></Route>
                  <Route path="/react-pdf-viewer-basic-example" element={<BasicExample />}></Route>
                  <Route path="/react-pdf-viewer-layout-example" element={<LayoutExample />}></Route>                        
              </Routes>
          </div> 
      </BrowserRouter>
    </div>
  );
}
export default App;


