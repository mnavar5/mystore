
import Intro from "./components/intro/Intro";
import NavBar from "./components/navBar/NavBar"
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");


const App = () => {
  
  return (
    
      <div>
        
        <NavBar/>
        <Intro/>
        
    
      </div>
    
  );
};

export default App;