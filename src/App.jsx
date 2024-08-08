import { Button, Drawer, Flex, FloatButton, Layout } from "antd";
import CardWrapper from "./components/Cards";
import Form from "./components/Form";
import "./index.css";
import { useState } from "react";
// import { Content, Footer, Header } from "antd/es/layout/layout";
const { Header, Footer, Content } = Layout;

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  color: "#fff",
  zIndex: 1000,
  height: 64,
  paddingInline: 48,
  position: "fixed",
  inset: 0,
  width: "100%",
  lineHeight: "64px",
};
const contentStyle = {
  textAlign: "center",
  marginTop: 48,
};
const layoutStyle = {
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: "100%",
};

function App() {
  const [drawer, setDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className=" container mx-auto ">
      <Flex gap="middle" justify="center" wrap>
        <Layout style={layoutStyle}>
          <Header style={headerStyle}>وب اپلیکیشن مخاطبین</Header>
          <Content style={contentStyle}>
            <div className=" flex flex-col space-y-14">
              <div>
                <FloatButton
                  className=" bg-blue-300"
                  onClick={handleOpenDrawer}
                ></FloatButton>
                <Drawer
                  title="افزودن مخاطب"
                  onClose={handleOpenDrawer}
                  open={drawer}
                >
                  <div>
                    <Form />
                  </div>
                </Drawer>
              </div>
              <div>
                <CardWrapper />
              </div>
            </div>
          </Content>
          {/* <Footer style={footerStyle}>Footer</Footer> */}
        </Layout>
      </Flex>
    </div>
  );
}

export default App;
