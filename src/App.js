
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Privacy } from './components/Privacy';
import {  Routes, Route, Link } from "react-router-dom";
import {
  LoginOutlined,
  InfoCircleOutlined,
  HomeOutlined ,
  FileDoneOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import Login from './components/Login';
const { Header, Sider, Content } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon:
              <Link to="/">
                 {React.createElement(HomeOutlined)}                 
              </Link>,
              label: 'Home'              
            },
            {
              key: '2',
              icon:
              <Link to="/about">
                {React.createElement(InfoCircleOutlined)}                 
              </Link>,
             
              label: 'About',
            },
            {
              key: '3',
              icon: 
              <Link to="/privacy">
                 {React.createElement(FileDoneOutlined)}                 
              </Link>,
            
              label: 'Privacy',
            },
            {
              key: '4',
              icon: 
              <Link to="/login">
                 {React.createElement(LoginOutlined)}                 
              </Link>,
            
              label: 'Login',
            },
          ]}
        />
      </Sider>
      <Layout>

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="/privacy" element={<Privacy />} />             
                <Route path="/login" element={<Login />} />             
          
         </Routes>   
        </Content>
      </Layout>
    </Layout>
  );



}

export default App;
