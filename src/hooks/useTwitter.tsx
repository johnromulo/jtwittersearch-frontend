import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from 'react';

interface TwitterContextData {
  hashtag: string | null;
  timeSearch: number | null;
  setFilterData(hashtag: string, timer: number): void;
}

const TwitterContext = createContext<TwitterContextData>(
  {} as TwitterContextData
);

export const TwitterProvider: React.FC = ({ children }: React.Props<{}>) => {
  const [hashtagSearch, setHashtagSearch] = useState<string | null>(null);

  const [timeSearch, setTimeSearch] = useState<number | null>(null);

  useEffect(() => {
    const htg = localStorage.getItem('@twitterFilter:hashtag');
    const tms = localStorage.getItem('@twitterFilter:timeSearch');

    if (htg) {
      setHashtagSearch(htg);
    }

    if (tms) {
      setTimeSearch(parseInt(tms, 10));
    }
  }, []);

  const setFilterData = useCallback((htg: string, time: number) => {
    localStorage.setItem('@twitterFilter:hashtag', htg);
    localStorage.setItem('@twitterFilter:timeSearch', `${time}`);

    setHashtagSearch(htg);
    setTimeSearch(time);
  }, []);

  return (
    <TwitterContext.Provider
      value={{
        hashtag: hashtagSearch,
        timeSearch,
        setFilterData,
      }}
    >
      {children}
    </TwitterContext.Provider>
  );
};

export function useTwitter() {
  const context = useContext(TwitterContext);

  return context;
}
