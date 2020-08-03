import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import {
  CardContainer,
  Card,
  CardImageContainer,
  CardContent,
  CardContentHeader,
} from './styles';

const TweetLoading: React.FC = () => {
  return (
    <CardContainer>
      <Card>
        <CardImageContainer>
          <Skeleton variant="circle" width="7rem" height="7rem" />
        </CardImageContainer>
        <CardContent>
          <CardContentHeader>
            <Skeleton variant="text" width="50%" />
          </CardContentHeader>
          <Skeleton variant="rect" width="96%" height="10rem" />
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default TweetLoading;
