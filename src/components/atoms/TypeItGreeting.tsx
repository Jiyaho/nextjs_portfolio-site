'use client';

import TypeIt from 'typeit-react';

function TypeItGreeting() {
  return (
    <TypeIt
      options={{
        strings: 'Hello world!',
        speed: 100,
        waitUntilVisible: true,
      }}
    />
  );
}

export default TypeItGreeting;
