

import React from 'react';
import Layout from '../../layouts/Layout';
import spamwords from '../../../assets/spamwords.png';
import accu from '../../../assets/accspam.png'
import classdistr from '../../../assets/clasdistri.png';
import featureimp from '../../../assets/featureimp.jpg';
import transactio from '../../../assets/creditcardtransaction.png';
import transac from '../../../assets/transac.jpg';
import precrecall from '../../../assets/precisionrecall.png';
import roc from '../../../assets/roc.png';
import '../../../AboutProject.css'; // create this for styles


const imageCaptions = [
  "Most common spam words",
  "Confusion matrix(Spam Classifier)",
  "Class Distribution Analysis",
   "Credit Card Transaction",
    "Preprocessed Transaction Image",
  "Feature Importance Chart",
  "Precision-recall curve(Banksim Model)",
  "ROC-curve curve(Banksim Model)"
  
 
 
];
const description=[
  "These are most common spam words used in spam messages",
  "The efficiency of our model is clearly demonstrated through this confusion matrix",
    "While cleaning & transforming data and undertstanding data we came to know that only 492 (or 0.172%) of transaction are fraudulent. That means the data is highly unbalanced with respect with target variable Class.",
     "Fraudulent transactions have a distribution more even than valid transactions - are equaly distributed in time, including the low real transaction times, during night in Europe timezone.",
     "The graph displays the average amount of transactions across different hours of the day for two different classes — likely non-fraudulent (left) and fraudulent (right) transactions.",
"Top features: V17, V12, V14, V10, V11, and V16.These features likely contain patterns or anomalies that distinguish fraudulent transactions from legitimate ones.Low-impact features might be noise or redundant and can potentially be excluded for model simplification.",
];

const AboutProject = () => {
  return (
    <Layout>
      <div style={{
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: '100px 60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: 'rgba(13, 50, 89, 0.8)',
          color: 'white',
          borderRadius: '40px',
          padding: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}>
          <h1 style={{ marginBottom: '30px', textAlign: 'center' }}>OUR PROJECT</h1>
          <p>This project involves building and evaluating various machine learning models to detect fraudulent transactions in a credit card dataset.</p>
          
          {[spamwords,accu,classdistr, transactio,  transac,featureimp,precrecall,roc].map((imgSrc, index) => (
            <div className="image-wrapper" key={index}>
                <div className='image-container'>
                <h1>{imageCaptions[index]}</h1>
                <div className='onhover'>
              <img
                className="hover-image"
                src={imgSrc}
                alt={`Project Image ${index + 1}`}
                loading="lazy"
              />
              <div className="caption">{description[index]}</div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AboutProject;
