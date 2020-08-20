import React from 'react';

import { Container } from 'holy-albatross';
import 'holy-albatross/dist/index.css';

const App = () => {
  const el = {
    backgroundColor: '#000',
    height: '20vh'
  };

  return (
    <>
      <Container paddingTop='2' paddingBottom='1.6'>
        <div style={el}></div>
        <div style={el}></div>
        <div style={el}></div>
        <div style={el}></div>
      </Container>
      <Container gap='4' maxWidth='2' paddingBottom='2'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rem
          repudiandae tenetur minus! Deserunt distinctio a voluptas fugiat, vero
          repudiandae quos error temporibus est ipsam eum et quibusdam
          consectetur consequuntur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et ipsam quasi mollitia eligendi, in distinctio
          libero blanditiis omnis! Qui sunt eius unde debitis deleniti?
          Dignissimos expedita officia laudantium corporis at. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolore natus accusantium nisi
          non sapiente beatae sed deserunt numquam voluptatum cupiditate debitis
          similique nobis culpa, molestiae tenetur distinctio rem. Enim,
          cupiditate?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto rem
          repudiandae tenetur minus! Deserunt distinctio a voluptas fugiat, vero
          repudiandae quos error temporibus est ipsam eum et quibusdam
          consectetur consequuntur! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Et ipsam quasi mollitia eligendi, in distinctio
          libero blanditiis omnis! Qui sunt eius unde debitis deleniti?
          Dignissimos expedita officia laudantium corporis at. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Dolore natus accusantium nisi
          non sapiente beatae sed deserunt numquam voluptatum cupiditate debitis
          similique nobis culpa, molestiae tenetur distinctio rem. Enim,
          cupiditate?
        </p>
      </Container>
      <Container gap='8' gutter>
        <div style={el}></div>
        <div style={el}></div>
      </Container>
    </>
  );
};

export default App;
