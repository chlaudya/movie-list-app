import { Layout } from "antd";
import { Route } from "react-router-dom";
import Homepage from "pages/homepage";
import DetailPage from "pages/detail-page";
import MainHeader from "modules/components/header";
import Footer from "modules/components/footer";

export default () => {
  return (
    <>
      <Layout>
        <header>
          <MainHeader />
        </header>
        <div>
          <Route path="/" exact component={Homepage} />
          <Route path="/detail/:id" exact component={DetailPage} />
        </div>
        <footer>
          <Footer />
        </footer>
      </Layout>
    </>
  );
};
