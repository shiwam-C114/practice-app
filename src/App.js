import './App.css';
import Profile from './components/Profile';
import Todo from './components/Todo';

function App() {
  return (
    <div className="Parent">
      <Profile img="https://media.istockphoto.com/photos/silhouette-of-man-in-dark-place-anonymous-backlit-contour-a-picture-id1139459625?b=1&k=20&m=1139459625&s=170667a&w=0&h=zVpBlAmdwUDWIVf0Zxtb3idMCitol4nzII2qde8Ybag=" name="user" age="20" location="patna" organisation="."/>
      <Todo />
    </div>
  );
}

export default App;
