import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import ButtonUI from '@material-ui/core/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  width: 96%;
  padding: 2rem;
  position: relative;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
`;

export const Button = withStyles({
  root: {
    backgroundColor: '#1da1f2',
    textTransform: 'none',
    color: '#fff',
    padding: '1rem',
    '& .MuiButton-label': {
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
  },
})(ButtonUI);
