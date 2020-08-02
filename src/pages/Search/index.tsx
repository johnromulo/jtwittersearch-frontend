import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useTwitter } from '@hooks/useTwitter';
import socket from '@services/socket';
import api from '@services/api';

import { TweetInterface } from '@interfaces/Tweet';

import Tweet from '@components/Tweet';

import { Container } from './styles';

const Search: React.FC = () => {
  const { hashtag, timeSearch } = useTwitter();

  const [tweets, setTweets] = useState<TweetInterface[]>([]);

  useEffect(() => {
    let connetionTweetRealTime: any = null;
    async function getTweets(): Promise<void> {
      try {
        const { data } = await api.get(
          `tweet?hashtag=${hashtag}&initialDate=${timeSearch}&approv=P`
        );

        setTweets(data);
      } catch (error) {
        toast.error(`Falha ao carregar hitórico de tweets`);
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
      {tweets &&
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
        ))}
    </Container>
  );
};

export default withRouter(Search);
