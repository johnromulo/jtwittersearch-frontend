import React, { useEffect, useState } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import { useTwitter } from '@hooks/useTwitter';
import socket from '@services/socket';
import api from '@services/api';

import { TweetInterface } from '@interfaces/Tweet';

import Tweet from '@components/Tweet';
import TweetLoading from '@components/TweetLoading';
import TweetNotFound from '@components/TweetNotFound';

import {
  Container,
  Header,
  TitleContainer,
  Title,
  ButtonContainer,
  Button,
} from './styles';

const Search: React.FC = () => {
  const { hashtag, timeSearch } = useTwitter();

  const history = useHistory();

  const [tweets, setTweets] = useState<TweetInterface[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let connetionTweetRealTime: any = null;
    async function getTweets(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await api.get(
          `tweet?hashtag=${hashtag}&initialDate=${timeSearch}&approv=P`
        );

        setTweets(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    if (hashtag) {
      getTweets();

      socket.emit('search', {
        hashtag,
      });

      connetionTweetRealTime = socket.on(
        `search_response_${hashtag}`,
        (tw: TweetInterface) => {
          setTweets(tws => [...tws, tw]);
        }
      );
    }

    return () => {
      if (connetionTweetRealTime) {
        connetionTweetRealTime.off();
      }
    };
  }, [hashtag, timeSearch]);

  function assessment(tweetId: string, approved: boolean): void {
    const tws = tweets;
    const itemIndexToRemove = tws.findIndex(tweet => tweet._id === tweetId);

    tws.splice(itemIndexToRemove, 1);

    setTweets([...tws]);

    socket.emit('assessment', {
      tweetId,
      approved,
    });
  }

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>#{hashtag}</Title>
        </TitleContainer>
        <ButtonContainer>
          <Button onClick={() => history.push('/show')}>
            Vizualizar Tweets
          </Button>
        </ButtonContainer>
      </Header>
      {loading && [1, 2, 3].map(item => <TweetLoading key={`${item}`} />)}

      {tweets ? (
        tweets.map(tweet => (
          <Tweet
            key={tweet._id.toString()}
            tweet={tweet}
            onClickAccept={() => {
              assessment(tweet._id, true);
            }}
            onClickReject={() => {
              assessment(tweet._id, false);
            }}
          />
        ))
      ) : (
        <TweetNotFound />
      )}
    </Container>
  );
};

export default withRouter(Search);
