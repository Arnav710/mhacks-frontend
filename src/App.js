
import "./App.css";
import { useState } from "react";
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
    };

    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/api/endpoint", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  

  return (
    <div>
      <p className="heading">
        Some heading
      </p>
      <p className="description">
        The description
      </p>

      <form onSubmit={handleSubmit}>
        <div className="textInput">
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
      </div>

      <div className="inputCheckboxes">
   
        <div>
          <input type="checkbox" id="sport" name="sport" onChange={(e) => setSport(e.target.checked)}/>
          <label htmlFor="sport">Sports</label>

          <input type="checkbox" id="tech" name="tech" onChange={(e) => setTech(e.target.checked)}/>
          <label htmlFor="tech">Technology</label>
        
          <input type="checkbox" id="finance" name="finance" onChange={(e) => setFinance(e.target.checked)}/>
          <label htmlFor="finance">Finance</label>
       
          <input type="checkbox" id="politics" name="politics" onChange={(e) => setPolitics(e.target.checked)}/>
          <label htmlFor="politics">Politics</label>
       
          <input type="checkbox" id="entertainment" name="entertainment" onChange={(e) => setEntertainment(e.target.checked)}/>
          <label htmlFor="entertainment">Entertainment</label>
        
          <input type="checkbox" id="travel" name="travel" onChange={(e) => setTravel(e.target.checked)}/>
          <label htmlFor="travel">Travel</label>
        
          <input type="checkbox" id="music" name="music" onChange={(e) => setMusic(e.target.checked)}/>
          <label htmlFor="music">Music</label>
       
          <input type="checkbox" id="food" name="food" onChange={(e) => setFood(e.target.checked)}/>
          <label htmlFor="food">Food</label>
        
          <input type="checkbox" id="science" name="science" onChange={(e) => setScience(e.target.checked)}/>
          <label htmlFor="science">Science</label>

          <input type="checkbox" id="gaming" name="gaming" onChange={(e) => setGaming(e.target.checked)}/>
          <label htmlFor="gaming">Gaming</label>
        </div>
      
      </div>

      <input type="submit" value="Submit" />

      </form>
    </div>
  );

}

export default App;