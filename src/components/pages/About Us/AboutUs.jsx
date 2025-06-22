


import React from 'react'
import Layout from '../../layouts/Layout'
const AboutUs = () => {
  return (
    <Layout>
      <div style={{
          display:'flex',
         minHeight: '100vh',
          // padding: '100px 50px',
         justifyContent:'center',
         alignItems:'center',
         boxSizing: 'border-box'
      }}>
        

      
      <div style={{
        margin:'100px',
        boxSizing:'border-box',
        maxWidth: '1000px',
        display:'flex',
        minHeight:'auto',
        width:'auto',
         flexDirection: 'column',
         padding: '50px',
          backgroundColor: 'rgba(13, 50, 89, 0.85)', // navy-ish
         color: 'white',
        alignItems:'center',
       justifyContent:'center',
       borderRadius:'40px'
        }
      }> 
    
       <div>
       <h1 style={{
             
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '30px',
            textAlign: 'center',
            color: '#00BFFF'
          }}>
           OUR TEAM
         </h1>
          <p style={{ color: '#ccc' }}>
            The solution has been plotted and implemented by combined efforts of:-</p>
          <ul style={{ color: '', marginTop: '10px' }}>
          <li><strong>Tapash Jaiswal</strong> – Data Engineering, Machine Learning, Deep Learning, MLops</li>
          <li><strong>Sumana Dangar</strong> – Data Analyst, UI/UX Designer</li>
          <li><strong>Satish Singh</strong> – Database Management and Backend Developer, DevOps</li>
          <li><strong>Suhani Bharti</strong> – Frontend Developer, UI/UX Designer</li>
          </ul>
           </div>
     </div>
     </div>
    </Layout>
   
  )
}

export default AboutUs