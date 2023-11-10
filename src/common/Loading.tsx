import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
   @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
   }
`;

const LoaderSVG = styled.img`
  width: 100%;
  height: 100%;
`;

Loader.defaultProps = {
 'aria-label': 'loading'
}

const Loading = () => {
  return (
    <LoaderWrapper>
     <Loader>
      <LoaderSVG src="src/assets/canal+.svg" alt="Loading..." />
     </Loader>
    </LoaderWrapper>
  );
};

export default Loading;