
import "./App.css";
import { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [location, setLocation] = useState("");
  const [interest1, setInterest1] = useState("");
  const [interest2, setInterest2] = useState("");
  const [interest3, setInterest3] = useState("");
  const [sport, setSport] = useState(false);
  const [tech, setTech] = useState(false);
  const [finance, setFinance] = useState(false);
  const [politics, setPolitics] = useState(false);
  const [entertainment, setEntertainment] = useState(false);
  const [travel, setTravel] = useState(false);
  const [music, setMusic] = useState(false);
  const [food, setFood] = useState(false);
  const [science, setScience] = useState(false);
  const [gaming, setGaming] = useState(false);
  const [email, setEmail] = useState("");
  
  
  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      location: location,
      interest1: interest1,
      interest2: interest2,
      interest3: interest3,
      sport: sport,
      tech: tech,
      finance: finance,
      politics: politics,
      entertainment: entertainment,
      travel: travel,
      music: music,
      food: food,
      science: science,
      gaming: gaming,
      email: email
    };

    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("https://hackapi.rooty.dev/generate_feed", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  

  return (
    <div class="outer" >
      <h1 className="heading" class="heading">
        Some Heading
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
      </p>

      <form onSubmit={handleSubmit}>
        
        <div class = "display-10 align-items-center" className="textInput" >
        
          <input

            type="text"
            placeholder="Location"  
            className="inputField"
            onChange={(e) => setLocation(e.target.value)}
        
          />

          <input
            type="text"
            placeholder="Interest 1"  
            className="inputField"
            onChange={(e) => setInterest1(e.target.value)}
          />

          <input
            type="text"
            placeholder="Interest 2"  
            className="inputField"
            onChange={(e) => setInterest2(e.target.value)}
          />

          <input
            type="text"
            placeholder="Interest 3"  
            className="inputField"
            onChange={(e) => setInterest3(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"  
            className="inputField"
            onChange={(e) => setEmail(e.target.value)}
          />

      </div>

      <div className="inputCheckboxes" class= "display-7 rounded text-white" id="inputCheckboxes">
        
        <div>
          <input className = "checkboxInput" type="checkbox" id="sport" name="sport" onChange={(e) => setSport(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="sport">Sports</label>
        </div>
        <div>
          <input className = "checkboxInput" type="checkbox" id="tech" name="tech" onChange={(e) => setTech(e.target.checked)}/>
          <label className = "checkboxLabel"htmlFor="tech">Technology</label>
        </div>
        <div >
          <input className = "checkboxInput"type="checkbox" id="finance" name="finance" onChange={(e) => setFinance(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="finance">Finance</label>
        </div>
        <div>
          <input className = "checkboxInput"type="checkbox" id="politics" name="politics" onChange={(e) => setPolitics(e.target.checked)}/>
          <label className="checkboxLabel"htmlFor="politics">Politics</label>
        </div>
        <div >
          <input className = "checkboxInput"type="checkbox" id="entertainment" name="entertainment" onChange={(e) => setEntertainment(e.target.checked)}/>
          <label className="checkboxLabel"htmlFor="entertainment">Entertainment</label>
        </div>
        <div>
          <input className = "checkboxInput" type="checkbox" id="travel" name="travel" onChange={(e) => setTravel(e.target.checked)}/>
          <label className="checkboxLabel"htmlFor="travel">Travel</label>
        </div>
        <div>
          <input className = "checkboxInput" type="checkbox" id="music" name="music" onChange={(e) => setMusic(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="music">Music</label>
        </div>
        <div>
          <input className = "checkboxInput"type="checkbox" id="food" name="food" onChange={(e) => setFood(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="food">Food</label>
        </div>
        <div>
          <input className = "checkboxInput"type="checkbox" id="science" name="science" onChange={(e) => setScience(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="science">Science</label>
        </div>
        <div>
          <input className = "checkboxInput"type="checkbox" id="gaming" name="gaming" onChange={(e) => setGaming(e.target.checked)}/>
          <label className="checkboxLabel" htmlFor="gaming">Gaming</label>
        </div>
      </div>
      <input className="submitButton" type="submit" value="Submit"/>
      </form>

      <form>

      </form>
    </div>
  );

}


export default App;