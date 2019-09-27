import React, { Component } from "react"; // import from react

import { render, Window, App, Box, Text } from "proton-native"; // import the proton-native components

class Example extends Component {
  render() {
    // all Components must have a render method
    return (
      <App>
        <Window
          title="Proton Native Rocks!"
          size={{ w: 300, h: 300 }}
          menuBar={false}
        >
          <Box padded>
            <Text>hohoho</Text>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Example />); // and finally render your main component
