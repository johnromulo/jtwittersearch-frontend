import React, { useMemo } from 'react';

import { TweetInterface } from '@interfaces/Tweet';

import {
  CardContainer,
  Card,
  CardImageContainer,
  CardImage,
  CardContent,
  CardContentHeader,
  CardContentHeaderUserName,
  CardContentHeaderUserNickName,
  CardContentText,
  DateTime,
  ApprovContainer,
  ApprovContent,
  Button,
  CheckIcon,
  CloseIcon,
} from './styles';

interface Props {
  tweet: TweetInterface;
  onClickAccept?: React.MouseEventHandler;
  onClickReject?: React.MouseEventHandler;
}

const Tweet: React.FC<Props> = ({
  tweet,
  onClickAccept,
  onClickReject,
}: Props) => {
  const datetime = useMemo(() => {
    const dt = new Date(tweet.times);
    return dt.toLocaleString();
  }, [tweet.times]);

  return (
    <CardContainer key={tweet._id.toString()}>
      <Card
        isAssessment={!!(onClickAccept && onClickReject)}
        key={tweet._id.toString()}
      >
        <CardImageContainer>
          <CardImage src={tweet.userImgUrl} alt={tweet.userNickName} />
        </CardImageContainer>
        <CardContent>
          <CardContentHeader>
            <CardContentHeaderUserName>
              {tweet.userName}
            </CardContentHeaderUserName>
            <CardContentHeaderUserNickName>
              @{tweet.userNickName}
            </CardContentHeaderUserNickName>
          </CardContentHeader>
          <CardContentText>{tweet.text}</CardContentText>
          <DateTime>{datetime}</DateTime>
        </CardContent>
      </Card>
      {onClickAccept && onClickReject && (
        <ApprovContainer>
          <ApprovContent>
            <Button onClick={onClickAccept}>
              <CheckIcon />
            </Button>
            <Button onClick={onClickReject}>
              <CloseIcon />
            </Button>
          </ApprovContent>
        </ApprovContainer>
      )}
    </CardContainer>
  );
};

export default Tweet;
