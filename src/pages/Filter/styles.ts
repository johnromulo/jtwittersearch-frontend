import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import ButtonUI from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import TwitterIconUI from '@material-ui/icons/Twitter';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const TwitterContainer = styled.div`
  margin-bottom: 3rem;
`;

export const TwitterIcon = styled(TwitterIconUI)`
  &.MuiSvgIcon-root {
    font-size: 20rem;
    color: ${props => props.theme.colors.primary};
  }
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const InputContent = styled.div`
  margin: 0 1rem;
`;

export const Input = withStyles({
  root: {
    '& .MuiInputBase-input': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    '& .MuiFormLabel-root': {
      fontSize: '2rem',
    },
    ':hover ': {
      borderColor: 'red',
    },
  },
})(TextField);

export const ButtonContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = withStyles({
  root: {
    backgroundColor: '#1da1f2',
    textTransform: 'none',
    color: '#fff',
    padding: '1.5rem',
    width: '96%',
    '& .MuiButton-label': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
    },
    // '& .MuiButton-contained': {
    //   backgroundColor: '#',
    // },
  },
})(ButtonUI);
