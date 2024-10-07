import './App.css';
import RemoteButton from 'rspack_remote/button';
const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React -- Host</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <RemoteButton />
      </div>
    </div>
  );
};

export default App;
