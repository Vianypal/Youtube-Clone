import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utilies/constants';

const SlideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: 'auto',
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <button
          className='category-btn'
          onClick={() => setSelectedCategory(category.name)} 
          style={{
            background: category.name === selectedCategory ? '#FC1503' : 'transparent',
            color: category.name === selectedCategory ? 'white' : 'red',
            opacity: category.name === selectedCategory ? '1' : '0.8',
          }}
          key={category.name}
        >
          <span style={{ marginRight: '15px' }}>
            {category.icon}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
}; 

export default SlideBar;
