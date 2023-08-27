import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchFromapi } from '../utilies/fetchFromapi';

import { CheckCircle } from '@mui/icons-material';
import Video from './Video';
import ReactPlayer from 'react-player';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromapi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
    fetchFromapi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideo(data.items));
  }, [id]);
  console.log(video);

  if (!videoDetail?.snippet) return 'Loading...';

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
           <Typography color="white" variant="h5" sx={{ fontWeight: 'bold' }} p={2}>
                        {title}
                     </Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: 'subtitle', md: 'h6' }} color="#fff">
                  {channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Video videos={video} />
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
