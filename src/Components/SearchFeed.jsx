import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Video from './Video';
import { fetchFromapi } from '../utilies/fetchFromapi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const { searchTerm } = useParams(); // Fix: use destructuring for the URL parameter

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromapi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for: <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  );
};

export default SearchFeed;
