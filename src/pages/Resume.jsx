import React from 'react'
import '../css/r.css';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// import React, { useEffect } from 'react';



const Resume = () => {

  // const downloadPDF = () => {
  //   const input = document.body;
  
  //   html2canvas(input).then((canvas) => {
  //     console.log('Canvas dimensions:', canvas.width, canvas.height);
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm
  //     pdf.save('page.pdf');

  //   });
  // };



  // const downloadPDF = () => {
  //   const contentToCapture = document.querySelector('.resume-content');
  
  //   if (!contentToCapture) {
  //     console.error('Content element not found.');
  //     return;
  //   }
  
  //   html2canvas(contentToCapture).then((canvas) => {
  //     console.log('Canvas dimensions:', canvas.width, canvas.height);
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm
  //     pdf.save('page.pdf');
  //   });
  // };

  const downloadPDF = () => {
    const contentToCapture = document.querySelector('.resume-content');
  
    if (!contentToCapture) {
      console.error('Content element not found.');
      return;
    }
  
    // Calculate the height of the content to capture, excluding the button
    const buttonElement = contentToCapture.querySelector('button');
    const buttonHeight = buttonElement ? buttonElement.offsetHeight : 0;
    const contentHeight = contentToCapture.offsetHeight - buttonHeight;
  
    html2canvas(contentToCapture, {
      height: contentHeight, // Set the height of the capture area
    }).then((canvas) => {
      console.log('Canvas dimensions:', canvas.width, canvas.height);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm
      pdf.save('page.pdf');
    });
  };
  


  return (
    <>
    
    <div className='bg-color '    >


  
   
<div className='name'  >
<div className='resume-content' >
  {/* <div className='name2'> */}
   <div className='full-name'>
   <p className='s'>​ꜱ ᴀ ᴛ ʜ ʏ ᴀ ᴠ ᴀ ɴ ɪ ​ ​🇻​</p>
   <p className='sub-name'>🇦 ​​🇺​​ 🇹​​ 🇴 ​​🇲 ​​🇦 ​​🇹​​ 🇮​ ​🇴 ​​🇳 ​  ​🇹 ​​🇪 ​​🇸 ​​🇹 ​​🇪 ​​🇷​</p>  
     ​</div>
    {/* <div className='sub-name'>​
  <p className='s'>🇦 ​​🇺​​ 🇹​​ 🇴 ​​🇲 ​​🇦 ​​🇹​​ 🇮​ ​🇴 ​​🇳 ​  ​🇹 ​​🇪 ​​🇸 ​​🇹 ​​🇪 ​​🇷​</p>  
    </div> */}
    
<div className='content-container'>
    <div className='left-cards'>
        {/* Card 1 */}
        <div className='card'>
        
          {/* <p> sathyavani3153@gmail.com</p>
          <p>+91 8848987505</p> */}
          <h6 className='contact'>​🇨​​ 🇴​ ​🇳 ​​🇹 ​​🇦 ​​🇨 ​​🇹​</h6>
           <p className='cont' style={{color:'Highlight'}}>
            <MailOutlined style={{color:'black'}} /> sathyavani3153@gmail.com
          </p>
          <p className='cont'>
            <PhoneOutlined /> +91 8848987505
          </p>

        </div>

        {/* Card 2 */}
        <div className='card'>
          <h6 className='skills'>​​🇹 ​​🇪 ​​🇨 ​​🇭 ​​🇳 ​​🇮 ​​🇨 ​​🇦 ​​🇱​ ​ 🇶 ​​🇺 ​​🇦 ​​🇱 ​​🇮 ​​🇫​ ​🇮​ ​🇨 ​​🇦 ​​🇹 ​​🇮 ​​🇴 ​​🇳​​</h6>
          <p><b>​🇸​​🇴​​🇫​​🇹​​🇼​​🇦​​🇷​​🇪​ ​🇹​​🇪​​🇸​​🇹​​🇮​​🇳​​🇬​:</b> Manual Testing, Automation Testing</p>
          <p><b>​🇫​​🇷​​🇦​​🇲​​🇪​​🇼​​🇴​​🇷​​🇰​​🇸​:</b> Selenium Web driver & IDE, TestNG, JUnit </p>
          <p><b>​🇸​​🇴​​🇫​​🇹​​🇼​​🇦​​🇷​​🇪​ ​🇱​​🇦​​🇳​​🇬​​🇺​​🇦​​🇬​​🇪:​</b> Java, Sql</p>
          <p><b>​🇹​​🇪​​🇸​​🇹​​🇮​​🇳​​🇬​ ​🇹​​🇴​​🇴​​🇱​​🇸​:</b> JMeter, postman</p>
          <p><b>​🇮​​🇩​​🇪:​</b> Eclipse</p>
          {/* <p className='skills-text'>Knowlede of Software DEveopment Life Cycle (SDLC), Software Testing Life Cycle 
          (STLC) and Defect Life Cycle</p> */}
          {/* <p className='skills-text'>Knowledge of Test levels, Test Types, and Test design Techniques</p> */}
<p className='skills-text'>Knowledge of Generating Test Scenarios, write Test Cases and Collect Test Data. </p>
{/* <p className='skills-text'>Knowledge of Executing Test Bactches and Analysing Test Result. </p> */}
<p className='skills-text'>Knowledge of Defect Reporting in ClickUp,  DEfect Tracking, and complete Defect Life cycle. </p>
 <p className='skills-text'>Knowledge of agile methodologies Scrum</p>
      
      <div>
      <h6 className='personal'>​🇵​​ 🇪 ​​🇷 ​​🇸 ​​🇴 ​​🇳 ​​🇦 ​​🇱 ​ ​🇸​ ​🇰​ ​🇮 ​​🇱 ​​🇱 ​​🇸​</h6>
      <p  className='per-text'>Commucation Skills</p>
      <p  className='per-text'>Critical Thinking</p>
      <p  className='per-text'>Problem Solving</p>
      <p  className='per-text'>Decision Making</p>
      <p className='per-text'>Teamwork</p>
      </div>
        </div>

        {/* Card 3 */}
        <div className='card'>
          <h6 className='certi'>​🇨​​ 🇪​ ​🇷​ ​🇹​ ​🇮​ ​🇫 ​​🇮 ​​🇨 ​​🇦 ​​🇹 ​​🇮 ​​🇴 ​​🇳 ​</h6>
          <p>Completed Software Testing training program from Luminar Technolab, 2022.</p>
      <p>NPTEL Certification, Computer Networks and Internet Protocol.</p>
    
    
      
        </div>
      </div>



      <div className='right-cards'>
          {/* Card 1 */}
          <div className='card'>
           <h6 className='academic'>​🇦​​ 🇨​ ​🇦 ​🇩 ​​🇪 ​​🇲 ​​🇮 ​​🇨 ​  ​🇵 ​​🇷 ​​🇴 ​​🇫 ​​🇮 ​​🇱 ​​🇪​</h6>
         <div className='a-text'>
           <p >2015-2019</p>
           <p className='a-dot'>B.Tech (Information Technology)</p>
          
         <p className='a-dot'>Government Engineering College Sreekrishnapuram, Palakkad(KTU)</p>
         <p className='a-dot'>CGPA/%:  7.37</p>
         </div>  
<div className='a-text1'>
<p>2013-2015</p>
<p className='a-dot'>Higher Secondary</p>
<p className='a-dot'>MNKMHSS Chittilancherry, Palakkad(State Board)</p>
<p className='a-dot'>CGPA/%: 95</p>
</div>

<div className='a-text2'>
  <p >2012-2013</p>
  <p className='a-dot'>High School</p>
  <p className='a-dot'>St. John's H.S Akamapadam, Pothundy(State Board)</p>
  <p className='a-dot'>CGPA/%: 95</p>

</div>
          </div>

          {/* Card 2 */}
          <div className='card'>
         <h6 className='prjt'>
         ​🇵 ​​🇷 ​​🇴 ​​🇯 ​​🇪 ​​🇨 ​​🇹 ​​🇸​

         </h6>

         <p className='prjt-text'>Ecommerce QA Testing- Fabindia, online shopping website.</p>
            <p className='prjt-text'>Application of Image Processing Techniques for Plant Leaf Disease Detection.</p>
            <p className='prjt-text'>Rateb- Mobile App Testing</p>
<p className='prjt-text'>Cargo Plus- Manual testing and bug Reporting, Automation Testing(Web Application)</p>

<p className='prjt-text'>Manifold- Mobile App Testing(Manual) & bug reporting in ClickUp.</p>


          </div>

          {/* Card 3 */}
          <div className='card'>
           <h6 className='exp'>​🇪 ​​🇽 ​​🇵 ​​🇪 ​​🇷 ​​🇮 ​​🇪 ​​🇳 ​​🇨 ​​🇪​</h6>

<div className='exp-div'>
           <p className='exp-text'>Reon Techonologies, Koratty as Automation Tester (May 2023-Present)</p>
           
          
           </div>
          </div>
        </div>


        </div>

        <button onClick={downloadPDF}>Download PDF</button>
      
    ​</div>
  </div>

  
  </div>
   
{/* </div> */}
   
    </>
  )
}

export default Resume





// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

 /* <button onClick={handleDownloadPDF}>Download PDF</button> */


 
  // const handleDownloadPDF = () => {
  //   // Capture the entire document body
  //   const input = document.body;

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // Adjust dimensions as needed
  //     pdf.save('resume.pdf');
  //   });
  // };


  // const downloadPDF = () => {
  //   // Replace 'contentToCapture' with the ID or class of the element containing the content you want to capture.
  //   const contentToCapture = document.querySelector('.content-container');
  
  //   if (!contentToCapture) {
  //     console.error('Content element not found.');
  //     return;
  //   }
  
  //   html2canvas(contentToCapture).then((canvas) => {
  //     console.log('Canvas dimensions:', canvas.width, canvas.height);
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF('p', 'mm', 'a4');
  //     pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 size: 210 x 297 mm
  //     pdf.save('page.pdf');
  //   });
  // };