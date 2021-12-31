import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;

export const StyledAverage = styled.div`
  width: 34px;
  height: 34px;
  margin-right: 24px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.value < 3
      ? props.theme.colors.error
      : props.value < 4
      ? props.theme.colors.warning
      : props.theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: bold;

  &::before {
    content: '${(props) => props.value || '-'}';
  }
`;

export const StyledInformation = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 25px 20px;

  p {
    padding: 0;
    margin: 0;
  }

  & > p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }
`;
