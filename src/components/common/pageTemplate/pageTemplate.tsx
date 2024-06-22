import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { ChildProps } from "../provider/type";
import Sidebar from "../sidebar/sidebar";
import Layout from "../Layout/Layout";

const PageTemplate = ({ children }: ChildProps) => {
  const { pathname } = useLocation();
  console.log(pathname)

  return <Container>
    {pathname !== "/login" && pathname !== "/signup" && <Sidebar />}
    <Layout>{children}</Layout>
  </Container>;
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    user-select: none;
`

export default PageTemplate;
