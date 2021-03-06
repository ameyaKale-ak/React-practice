
import './App.css';
import Greet from './components/functionalcomponent'
import Welcome from './components/classcomponent'
import Message from './components/state'
import Counter from './components/counter'
import Click from './components/functionEventHandlig'
import ClassEventH from './components/classEventHandling'

function App() {
  return (
    <div className="App">
      <Greet name='Eren' titan='Attack Titan'> {/*Props in functional component*/}
      <h3>This is children prop</h3>
      </Greet>
      <Greet name='Riner' titan='Armored Titan'> {/*Props in functional component*/}
      <h3>This is children prop of second instance of same component</h3>
      </Greet>
      <Welcome name='Armin' titan='Colossal Titan '/> {/*Props in class component*/}
      <Message/>
      <Counter/>
      <Click/>
      <ClassEventH/>
    </div>
  );
}

export default App;
