import './App.css';
import Card from './components/Card';
import{ BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';


function App() {
  return (
    <div className="App">
    <BrowserRouter >
        <Box sx={{backgroundColor: '#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Feed />}/>
            <Route path="/video/:id" exact element={<VideoDetail />}/>
            <Route path="/channel/:id"  element={<ChannelDetail />}/>
            <Route path="/search/:searchTerm" element={<SearchFeed />}/>
          </Routes>
        </Box>
    </BrowserRouter>
    </div>
  );
}

export default App;
