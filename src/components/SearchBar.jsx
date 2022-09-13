import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {SearchIcon} from '@mui/icons-material';

export const SearchBar = () => {
  return (
    <Paper component="form" onSubmit={() => {}} sx={{borderRadius: 20, border: '1px solid #e3e3e3', pl:3, boxShadow: 'none', mr: {sm: 5}}}>
        <input className='search-bar' placeholde="Search..." value="" onChange={()=> {}}/>
        <IconButton>
            <SearchIcon />
        </IconButton>
        
        
    </Paper>
  )
}
