import './App.css';
import Table from './Table'

function App() {
  return (
    <div className='appClass'>
      <h1>Issues GitHub</h1>
      <Table rows={['row1','row2']}/>
    </div>
  );
}

export default App;
