'use client';

import TypeIt from 'typeit-react';

function TypeItComponent() {
  return (
    <TypeIt
      options={{
        strings: ['Hello world!'],
        speed: 100,
        waitUntilVisible: true,
      }}
    />
  );
}

export default TypeItComponent;
