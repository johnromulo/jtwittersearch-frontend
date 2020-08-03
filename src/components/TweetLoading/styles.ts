import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 575px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09);
  display: flex;
  width: 100%;
  border-radius: 0.8rem;
  background-color: #fff;
`;

export const CardImageContainer = styled.div`
  flex: 0.25;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 1rem 0;
`;

export const CardContentHeader = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;
