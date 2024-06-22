import Router from "src/components/router/router";
import GlobalStyle from "src/style/global";
import PageTemplate from "src/components/common/pageTemplate/pageTemplate";

const Provider = () => {
  return (
    <>
      <GlobalStyle />
      <PageTemplate>
        <Router />
      </PageTemplate>
    </>
  );
};

export default Provider;
