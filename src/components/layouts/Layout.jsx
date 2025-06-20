


import Header from './Header';
import Footer from './Footer';


const Layout = (props) => {
  return (
    <div
      style={{
       
        minHeight: "100vh",  
        display: "flex",
        flexDirection: "column",
        color: "white", 
      }}
    >
      <Header />
      <main style={{ flexGrow: 1, padding: '1rem 0' }}>
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
