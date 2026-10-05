import {Profile} from "./../components/Profile";
import {useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  
  
  return(
    <div>
      <h1> profile</h1>
      <Profile name="raiden" age={20} isStudent={true}/>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        click {count}
      </button>
    </div>
  );
}

export default App;