import styled from 'styled-components';
import ButtonUI from '@material-ui/core/Button';

import CheckIconUI from '@material-ui/icons/Check';
import CloseIconUI from '@material-ui/icons/Close';

export const CardContainer = styled.div`
  width: 575px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

interface CardProps {
  isAssessment: boolean;
}

export const Card = styled.div<CardProps>`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  width: 100%;
  border-radius: 0.8rem;
  background-color: #fff;
  ${props => props.isAssessment && 'border-bottom-right-radius: 0'};
`;

export const CardImageContainer = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: center;
`;

export const CardImage = styled.img`
  width: 7rem;
  height: 7rem;
  margin: 1rem 0;
  border-radius: 50%;
`;

export const CardContent = styled.div`
  flex: 1;
`;

export const CardContentHeader = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const CardContentHeaderUserName = styled.span`
  font-size: 3rem;
  font-weight: bold;
`;

export const CardContentHeaderUserNickName = styled.span`
  font-size: 2rem;
  margin-left: 1rem;
  opacity: 0.8;
`;

export const CardContentText = styled.p`
  font-size: 2rem;
  padding: 1rem;
`;

export const DateTime = styled.div`
  font-size: 1rem;
  padding: 1rem;
`;

export const ApprovContainer = styled.div`
  overflow-y: hidden;
  padding: 0 2rem 2rem 2rem;
  margin-right: -2rem;
`;

export const ApprovContent = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09);
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  margin-top: -1.5rem;
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
`;

export const Button = ButtonUI;

export const CheckIcon = styled(CheckIconUI)`
  &.MuiSvgIcon-root {
    font-size: 3rem;
    color: green;
  }
`;

export const CloseIcon = styled(CloseIconUI)`
  &.MuiSvgIcon-root {
    font-size: 3rem;
    color: red;
  }
`;
