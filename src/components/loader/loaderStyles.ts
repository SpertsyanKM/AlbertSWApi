import styled from 'styled-components';

type ContainerProps = {
  root: boolean;
};
export const Container = styled.View<ContainerProps>`
  ${(props: ContainerProps) =>
    props.root
      ? `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `
      : `
  `}
  alignItems: center;
  justifyContent: center;
`;
