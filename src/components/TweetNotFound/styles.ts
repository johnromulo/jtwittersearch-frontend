import styled from 'styled-components';
import TwitterIconUI from '@material-ui/icons/Twitter';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
`;

export const TwitterIcon = styled(TwitterIconUI)`
  &.MuiSvgIcon-root {
    font-size: 20rem;
    color: ${props => props.theme.colors.primary};
  }
`;

export const Text = styled.span`
  font-size: 2rem;
`;
