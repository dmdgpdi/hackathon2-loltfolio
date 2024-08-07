import styled from 'styled-components';

const Input = styled.input`
  position: ${props => (props?.$position ? props.$position : 'relative')};
  width: ${props => (props?.$width ? `${props.$width}` : 'auto')};
  height: ${props => (props?.$height ? `${props.$height}` : 'auto')};
  border: ${props => (props?.$border ? props.$border : 'none')};
  outline: ${props => (props?.$outline ? props.$outline : 'none')};
  appearance: ${props => (props?.$appearance ? props.$appearance : 'none')};
  letter-spacing: ${props =>
    props?.$letterSpacing ? props.$letterSpacing : '-0.02em'};
  font-size: ${props =>
    props?.$fontSize ? props.$fontSize : `${props.theme.fontSize.s}px`};
  background-color: ${props =>
    props?.$backgroundColor
      ? props.$backgroundColor
      : props?.theme.color.backgroundColor};
  color: ${props =>
    props?.$color ? props.$color : props.theme.color.fontColor};

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    background: transparent;
    color: transparent;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  *::-webkit-search-results-button,
  *::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

export { Input };
