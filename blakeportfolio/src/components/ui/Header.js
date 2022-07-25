import { Link } from "react-router-dom";
import {Route,Routes} from 'react-router-dom';





function Header(props){

    

    
    return(<div class="boxShadow">

<div class="purpleBox1">
  <div class="titleA">Blake Slegl</div>
  <div class="titleB">Web Developer</div>
</div>




<div class="purpleBox2">
  <div class="titleC">
    <div class="row">

    
        <Routes>

        <Route path="/" element={<div>
        <div class="column"><Link to="/" class="linkBox" ><div class="bold">HOME</div></Link></div>
        <div class="column"><Link to="app" class="linkBox">Portfolio</Link></div>
        <div class="column"><Link to="resume" class="linkBox">Resume</Link></div>
        </div>} exact/>

        <Route path="App" element={<div>
        <div class="column"><Link to="/" class="linkBox" >HOME</Link></div>
        <div class="column"><Link to="../app" class="linkBox"><div class="bold">Portfolio</div></Link></div>
        <div class="column"><Link to="../resume" class="linkBox">Resume</Link></div>
        </div>} exact/>

        <Route path="Resume" element={<div>
        <div class="column"><Link to="/" class="linkBox" >HOME</Link></div>
        <div class="column"><Link to="../app" class="linkBox">Portfolio</Link></div>
        <div class="column"><Link to="../resume" class="linkBox"><div class="bold">Resume</div></Link></div>
        </div>} exact/>



        </Routes>
   
    </div>
  </div>
</div>




</div>
    );
    
    }
    
    export default Header;