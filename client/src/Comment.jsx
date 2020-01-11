import React from 'react';
import {
  Grid,
  Avatar,
  TextField,
  Paper,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Comment = () => {
  return (
    <Grid>
      <Grid
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'space-between',
          padding: '40px 0px 60px 0px',
        }}>
        <Avatar src="http://placecorgi.com/60" />
        <form noValidate autoComplete="off">
          <TextField placeholder="Add a comment..." variant="outlined" style={{ width: 461, height: 52, backgroundColor: '#fff' }} />
        </form>
        <SendIcon style={{ width: 24, height: 24, color: '#a2a2a2', cursor: 'pointer' }} />
      </Grid>
      <Paper elevation={0} style={{ width: '100%', height: 96, padding: 20 }}>
        <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img src="https://source.unsplash.com/random/56x56" />
          <Grid style={{ paddingLeft: 20 }}>
            <div style={{ fontFamily: `'Roboto', sans-serif`, fontSize: 16 }}>Vinyl Plaid Street Art</div>
            <div style={{ fontFamily: `'Roboto', sans-serif`, fontSize: 16, color: '#0098ab', cursor: 'pointer' }}>See more events</div>
          </Grid>
          <ArrowForwardIosIcon style={{
            width: 24,
            heigth: 24,
            color: '#0098ab',
            position: 'relative',
            left: '285px',
            cursor: 'pointer',
          }} />
        </Grid>
      </Paper>
    </Grid>
  );
}
export default Comment;
