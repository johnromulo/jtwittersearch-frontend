import React, { useEffect, useState, useRef } from 'react';
import { withRouter } from 'react-router-dom';

import { useTwitter } from '@hooks/useTwitter';
import api from '@services/api';
import socket from '@services/socket';

import { TweetInterface } from '@interfaces/Tweet';
import TweetLoading from '@components/TweetLoading';
import TweetNotFound from '@components/TweetNotFound';

import Tweet from '@components/Tweet';

import {
  Container,
  TweetListContainer,
  TweetList,
  TweetItemContainer,
} from './styles';

const Show: React.FC = () => {
  const { hashtag, timeSearch } = useTwitter();

  const tweetsListRef = useRef<any | null>(null);

  const [tweets, setTweets] = useState<TweetInterface[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let connetionTweetRealTime: any = null;

    async function getTweets(): Promise<void> {
      try {
        setLoading(true);
        const { data } = await api.get(
          `tweet?hashtag=${hashtag}&initialDate=${timeSearch}&approv=A`
        );

        setTweets(data);
        setLoading(false);

        const lastItemNotViewed = data.findIndex(
          (tw: TweetInterface) => tw.viewed === false
        );

        setTimeout(() => {
          const goToSlide = tweetsListRef?.current?.goToSlide;

          if (goToSlide) {
            if (lastItemNotViewed >= 0) {
              goToSlide(lastItemNotViewed);
            } else {
              goToSlide(data.length - 1);
            }
          }
        }, 500);
      } catch (error) {
        setLoading(false);
        // toast.error(`Falha ao carregar hitórico de tweets`);
      }
    }
    if (hashtag) {
      getTweets();

      connetionTweetRealTime = socket.on(
        `show_tweet_${hashtag}`,
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

  function setViewed(tw: TweetInterface) {
    if (!tw.viewed) {
      socket.emit('viewed', { tweetId: tw._id });
    }
  }

  return (
    <Container>
      {loading && <TweetLoading />}
      {loading && tweets.length > 0 ? (
        <TweetListContainer>
          <TweetList
            ref={tweetsListRef}
            keyBoardControl
            afterChange={(previousSlide: number) => {
              setViewed(tweets[previousSlide]);
            }}
          >
            {tweets.map(tweet => (
              <TweetItemContainer key={tweet._id.toString()}>
                <Tweet tweet={tweet} />
              </TweetItemContainer>
            ))}
          </TweetList>
        </TweetListContainer>
      ) : (
        <TweetNotFound />
      )}
    </Container>
  );
};

export default withRouter(Show);
