


// import React from 'react';
// import { Layout, Menu } from 'antd';
// import {
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';

// const { Sider,  Content,  } = Layout;

// function App() {
//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       {/* Left Sidebar (Header on Small Screens) */}
//       <Sider width={200} collapsible breakpoint="md" theme="dark">
        // <Menu mode="vertical" defaultSelectedKeys={['1']}>
        //   {/* Left Sidebar Menu Items */}
        //   <Menu.Item key="1" icon={<UserOutlined />}>
        //     Left Nav 1
        //   </Menu.Item>
        //   <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        //     Left Nav 2
        //   </Menu.Item>
        //   {/* Add more menu items as needed */}
        // </Menu>
//       </Sider>

//       <Layout>
       
        
//         <Content style={{ margin: '24px 16px', padding: 24, background: '#fff' }}>
//           Main Content
//         </Content>
//        </Layout> 
     

//       {/* Right Sidebar (Footer on Small Screens) */}
//       <Sider width={200} collapsible breakpoint="md" theme="dark" reverseArrow>
//         <Menu mode="vertical" defaultSelectedKeys={['1']}>
//           {/* Right Sidebar Menu Items */}
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             Right Nav 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             Right Nav 2
//           </Menu.Item>
//           {/* Add more menu items as needed */}
//         </Menu>
//       </Sider>
//     </Layout>
//   );
// }

// export default App;













// import React, { useState, useEffect } from 'react';
// import { Layout , Menu} from 'antd';

// import {
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     MenuUnfoldOutlined,
//     MenuFoldOutlined,
//   } from '@ant-design/icons';

// const { Header, Content, Sider, Footer } = Layout;

// const App = () => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint as needed
//     };

//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <Layout>
//       {isSmallScreen ? (
//         <Header style={{  padding: 0, backgroundColor:'wheat' }}>
//           {/* Header content goes here */}
//           <div style={{color:'black'}}>Header Content
//           {/* <div><VideoCameraOutlined/></div> */}
          
//           </div>
         
//         </Header>
//       ) : (
       
//         <Sider width={200} collapsible breakpoint="md" theme="light">
//           {/* Sidebar content goes here */}
//           <div style={{color:'black'}}>Sidebar Content</div>

//           <Menu mode="vertical" defaultSelectedKeys={['1']}>
//           {/* Left Sidebar Menu Items */}
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             Left Nav 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             Left Nav 2
//           </Menu.Item>

//           <Menu.Item key="3" icon={<UploadOutlined />}>
//             Left Nav 3
//           </Menu.Item>
//           <Menu.Item key="4" icon={<MenuFoldOutlined />}>
//             Left Nav 4
//           </Menu.Item>
//           <Menu.Item key="5" icon={<MenuUnfoldOutlined />}>
//             Left Nav 5
//           </Menu.Item>

//           {/* Add more menu items as needed */}
//         </Menu>
          
//         </Sider>
//       )}
//       <Content style={{ margin: '16px' }}>
//         {/* Main content goes here */}
//         <div>Main Content</div>
//         <div>Main Content</div>
//         <div>Main Content</div>
//         <div>Main Content</div>

//         <p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
//             <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
//             <p className='prjt-text'>Rateb- Mobile App Testing</p>
// <p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

// <p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>


// <p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
//             <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
//             <p className='prjt-text'>Rateb- Mobile App Testing</p>
// <p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

// <p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>


// <p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
//             <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
//             <p className='prjt-text'>Rateb- Mobile App Testing</p>
// <p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

// <p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>

        
//       </Content>


//       {isSmallScreen ? (
//         <Footer style={{  padding: 30 , backgroundColor:'wheat'}} >
//           {/* Header content goes here */}
//           <div style={{color:'black' , }}>Header Content</div>
//         </Footer>
//       ) : (
       
//         <Sider 
//         width={200}
//          collapsible breakpoint="md" 
//          theme="light" 
//         style={{ height:"100vh", backgroundColor:'white'}}
//         >
            
//           {/* Sidebar content goes here */}
//           <div style={{color:'black', }}>Sidebar Content</div>


//           <Menu mode="vertical" defaultSelectedKeys={['1']}
//          >
//           {/* Left Sidebar Menu Items */}
//           <Menu.Item key="1" icon={<UserOutlined />}>
//             Right Nav 1
//           </Menu.Item>
//           <Menu.Item key="2" icon={<VideoCameraOutlined />}>
//             Right Nav 2
//           </Menu.Item>

//           <Menu.Item key="3" icon={<UploadOutlined />}>
//             Right Nav 3
//           </Menu.Item>
//           <Menu.Item key="4" icon={<MenuFoldOutlined />}>
//             Right Nav 4
//           </Menu.Item>
//           <Menu.Item key="5" icon={<MenuUnfoldOutlined />}>
//             Right Nav 5
//           </Menu.Item>
//         </Menu>
//         </Sider>
//       )}

//     </Layout>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;

const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      {isSmallScreen ? (
        <Header style={{ padding: 0, backgroundColor: 'wheat', position: 'fixed', width: '100%', zIndex: 1 }}>
          <div style={{ color: 'black' }}>Header Content</div>
        </Header>
      ) : (
        <Sider width={200} collapsible breakpoint="md" theme="light"
        
        >
          <div style={{ color: 'black' , }}>Sidebar Content</div>
          <Menu mode="vertical" defaultSelectedKeys={['1']}>
            {/* Left Sidebar Menu Items */}
            <Menu.Item key="1" icon={<UserOutlined />}>
              Left Nav 1
            </Menu.Item>
            {/* Add more menu items as needed */}
          </Menu>
        </Sider>
      )}
      <Content style={{ margin: '15px', overflowY: 'auto', marginTop:'80px' }}>
        <div>Main Content</div>
        {/* Your main content goes here */}
        <p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>

<p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>




<p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>

<p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>




<p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>

<p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>


      </Content>
      {isSmallScreen ? (
        <Footer style={{ padding: 30, backgroundColor: 'wheat', position: 'fixed', bottom: 0, width: '100%', zIndex: 1 }}>
          <div style={{ color: 'black' }}>Footer Content</div>
        </Footer>
      ) : (
        <Sider
          width={330}
          collapsible
          breakpoint="md"
          theme="light"
          style={{ height: '100vh', backgroundColor: 'white', position: 'fixed', right: 0, top: 0, zIndex: 1 }}
        >
          <div style={{ color: 'black' }}>Sidebar Content</div>
          <Menu mode="vertical" defaultSelectedKeys={['1']}>
            {/* Right Sidebar Menu Items */}
            <Menu.Item key="1" icon={<UserOutlined />}>
              Right Nav 1
            </Menu.Item>
            {/* Add more menu items as needed */}
          </Menu>
        </Sider>
      )}
    </Layout>
  );
};

export default App;













