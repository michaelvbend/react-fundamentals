import React from 'react';
import './App.css';

// Define the App component
function App() {
  // Return the JSX structure using React.createElement
  return React.createElement(
    React.Fragment, // Use React.Fragment to group elements without adding extra nodes to the DOM
    null, // No props for the fragment
    React.createElement('h1', null, 'Hello World'), // Create an h1 element with the text "Hello World"
    React.createElement('p', null, 'This is a paragraph.'), // Create a p element with the text "This is a paragraph."
    React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: () => alert('Button clicked!') }, // Add an onClick prop to the button
        'Click me'
      )
    )
  );
}

export default App;
