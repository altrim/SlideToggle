import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SlideToggle from './SlideToggle';

const styles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

const App = () => (
  <div style={styles}>
    <Hello name="Slide Toggle" />

    <SlideToggle
      toggled
      label="Default Green"
      onToggle={toggled => console.log(`Green: ${toggled}`)}
    />

    <SlideToggle
      label="Yellow"
      color="yellow"
      onToggle={toggled => console.log(`Yellow: ${toggled}`)}
    />

    <SlideToggle
      toggled
      label="Blue"
      color="blue"
      onToggle={toggled => console.log(`Blue: ${toggled}`)}
    />

    <SlideToggle
      label="Gold"
      color="gold"
      onToggle={toggled => console.log(`Gold: ${toggled}`)}
    />

    <SlideToggle
      toggled
      label="Orange"
      color="orange"
      onToggle={toggled => console.log(`Orange: ${toggled}`)}
    />

    <SlideToggle
      label="Pink"
      color="pink"
      onToggle={toggled => console.log(`Pink: ${toggled}`)}
    />

    <SlideToggle
      toggled
      color="violet"
      onToggle={toggled => console.log(`Violet: ${toggled}`)}
    >
      Violet
    </SlideToggle>

    <SlideToggle
      color="red"
      onToggle={toggled => console.log(`Red: ${toggled}`)}
    >
      <h2>Big Red</h2>
    </SlideToggle>
  </div>
);

render(<App />, document.getElementById('root'));
