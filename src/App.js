import './App.css';
import Profile from './components/Profile';
import Todo from './components/Todo';

function App() {
  return (
    <div className="Parent">
      <Profile className="Profile"/>
      <Todo />
    </div>
  );
}

export default App;
