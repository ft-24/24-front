import styled from 'styled-components';

export default function LoadingPage() {
  const Layout = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
  return (
    <Layout>
      <div id="loading-page">
        <h1>now Loading...</h1>
      </div>
    </Layout>
  );
}
