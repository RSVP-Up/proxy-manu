import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Inner from './Inner';

import { Container, Segment } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Container fluid>
        <Navbar />
        <div id="event"></div>
        <Inner />
        <div id="rsvp"></div>
        <Footer />
      </Container>
    );
  }
}

export default App;
