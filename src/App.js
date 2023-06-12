import Navbar from './navbar/Navbar'
import Query from './store/query/Query';
import RawData from './store/rawdata/RawData';
import BaseCard from './store/storecards/BaseCard'
import Selection from './store/selection/Selection'
import Main from './main/Main';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="store" element={<Query />} />
            <Route path=':itemID' element={<Selection />}/>
        <Route path="/counter/*" element={<Counter />} />
        <Route path="/store/raw" element={<RawData />} />
        <Route path="/store/basic" element={<BaseCard />} />
      </Routes>
      
    </div>
  );
}

export default App;
