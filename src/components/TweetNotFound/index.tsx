import React from 'react';

import { Container, TwitterIcon, Text } from './styles';

const TweetNotFound: React.FC = () => {
  return (
    <Container>
      <TwitterIcon />
      <Text>Ainda não encontramos tweets</Text>
    </Container>
  );
};

export default TweetNotFound;
