
import "./App.css";
function App() {
  return (
    <div>
      <p className="heading">
        Some heading
      </p>
      <p className="description">
        The description
      </p>

      <form>
        <div className="textInput">
          <input
            type="text"
            placeholder="Location"  
            className="inputField"
          />

          <input
            type="text"
            placeholder="Interest 1"  
            className="inputField"
          />

          <input
            type="text"
            placeholder="Interest 2"  
            className="inputField"
          />

          <input
            type="text"
            placeholder="Interest 3"  
            className="inputField"
          />
      </div>

      <div className="inputCheckboxes">
   
        <div>
          <input type="checkbox" id="sport" name="sport" />
          <label for="sport">Sports</label>

          <input type="checkbox" id="tech" name="tech" />
          <label for="tech">Technology</label>
        
          <input type="checkbox" id="finance" name="finance" />
          <label for="finance">Finance</label>
       
          <input type="checkbox" id="politics" name="politics" />
          <label for="politics">Politics</label>
       
          <input type="checkbox" id="entertainment" name="entertainment" />
          <label for="entertainment">Entertainment</label>
        
          <input type="checkbox" id="travel" name="travel" />
          <label for="travel">Travel</label>
        
          <input type="checkbox" id="music" name="music" />
          <label for="music">Music</label>
       
          <input type="checkbox" id="food" name="food" />
          <label for="food">Food</label>
        
          <input type="checkbox" id="science" name="science" />
          <label for="science">Science</label>

          <input type="checkbox" id="gaming" name="gaming" />
          <label for="gaming">Gaming</label>
        </div>
      
      </div>

      <input type="submit" value="Submit" />

      </form>
    </div>
  );

}

export default App;