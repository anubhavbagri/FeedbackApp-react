import React from 'react';

function App() {
  return React.createElement(
    'div',
    { className: 'container' },
    // {} i.e. no attributes
    React.createElement('h1', {}, 'My App')
  );
}

export default App;
