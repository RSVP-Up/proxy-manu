import React from 'react';

import { Image, Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* <div id="event"></div> */}
        <Container>
          {/* Two rails on one side image plus details + components */}
          <Image src="https://source.unsplash.com/random" />
          {/* Other components */}
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
