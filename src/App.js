import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Box} from '@mui/material';
import ChannelDetail from './Components/ChannelDetail';
import VideoDetail from './Components/VideoDetail';
import Feed from './Components/Feed';
import SearchFeed from './Components/SearchFeed';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{background:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" element={<VideoDetail/>}/>
        <Route path="/channel/:id" element={<ChannelDetail/>}/>
        <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
       
      </Routes>

    </Box>
    </BrowserRouter>
  );
}

export default App;
