import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import { useTwitter } from '@hooks/useTwitter';

import {
  Container,
  Main,
  TwitterContainer,
  TwitterIcon,
  InputContainer,
  InputContent,
  Input,
  ButtonContainer,
  Button,
} from './styles';

const Filter: React.FC = () => {
  const { setFilterData } = useTwitter();
  const history = useHistory();

  const [hashtag, setHashtag] = useState('');

  const [dateSearch, setDateSearch] = useState('');

  function submit(): void {
    const time = new Date(dateSearch).getTime();
    setFilterData(hashtag, time);
    if (hashtag && time) {
      history.push('/search');
    }
  }

  return (
    <Container>
      <Main
        onSubmit={e => {
          e.preventDefault();
          submit();
        }}
      >
        <TwitterContainer>
          <TwitterIcon />
        </TwitterContainer>
        <InputContainer>
          <InputContent>
            <Input
              id="hashtag"
              label="Hashtag"
              variant="outlined"
              type="text"
              value={hashtag}
              onChange={e => setHashtag(e.target.value)}
            />
          </InputContent>
          <InputContent>
            <Input
              id="datetime-local"
              label="Data hora"
              variant="outlined"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              value={dateSearch}
              onChange={e => setDateSearch(e.target.value)}
            />
          </InputContent>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit" variant="contained">
            Buscar
          </Button>
        </ButtonContainer>
      </Main>
    </Container>
  );
};

export default withRouter(Filter);
