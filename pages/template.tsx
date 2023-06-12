// @ts-nocheck
import type { NextPage } from 'next'
import {Grid, Box, Checkbox, FormGroup, FormControlLabel, Button} from '@mui/material';
import {Stack, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';

import { useState } from 'react'
import * as React from 'react';
import ReactDOM from 'react-dom';

import axios from "axios"

const DRF_ADDRESS = "http://localhost:8000"

const Home: NextPage = () => {
  return (
    <div style={{whiteSpace: 'pre-line'}}>
      <YourComponent />
    </div>
  )
}

export default Home

export class YourComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };        
  }

  componentDidMount() { }

  render() {
    return (
        <>
          Your Contents
        </>
    );
    }
}