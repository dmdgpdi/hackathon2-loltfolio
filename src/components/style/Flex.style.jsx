import styled from 'styled-components';

const Flex = styled.div`
  width: ${props => (props?.$width ? props.$width : 'fit-content')};
  display: ${props => (props?.$display ? props.$display : 'flex')};
  flex-direction: ${props => (props?.$direction ? props.$direction : 'row')};
  justify-content: ${props => (props?.$justify ? props.$justify : 'start')};
  align-items: ${props => (props?.$align ? props.$align : 'start')};
  gap: ${props => (props?.$gap ? props.$gap : 0)};
  flex-wrap: ${props => (props?.$wrap ? props.$wrap : 'nowrap')};
  margin: ${props => (props?.$margin ? props.$margin : '0')};
`;

export { Flex };
