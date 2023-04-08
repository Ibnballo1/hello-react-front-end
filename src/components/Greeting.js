import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const messageData = useSelector((state) => state.message.message);

  if (messageData.isLoading) {
    return <p>Loading...</p>;
  }

  if (!messageData.greeting) {
    return <p>No message available</p>;
  }

  return <h1>{messageData.greeting}</h1>;
};

export default Greeting;
