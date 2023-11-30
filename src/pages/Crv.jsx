import React from 'react';
import { Card } from 'antd';
import '../css/a.css';
import { PhoneOutlined, MailOutlined, CalendarOutlined, CheckCircleOutlined } from '@ant-design/icons';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Crv = () => {




    const downloadPDF = () => {
        const contentToCapture = document.querySelector('.border');
      
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
    <div className='a-color'>
      <div className='border'>
        <div className='a-name'>
          <div className='fa'>🇦 ​🇩 ​​🇮 ​​🇹 ​​🇾 ​​🇦 ​​🇳 ​ ​🇵 ​. ​🇸​</div>
          <div className='sa'>​🇦 ​​🇺 ​​🇹 ​​🇴 ​​🇲 ​​🇦 ​​🇹 ​​🇮 ​​🇴 ​​🇳  ​ ​🇹 ​​🇪 ​​🇸 ​​🇹 ​​🇪 ​​🇷​</div>
        </div>
        
        <div className='card-a' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​🇨 ​​🇴 ​​🇳​ ​🇹​ ​🇦​ ​🇨​ ​🇹​ ⦂</div>
            <div className='p-a1'>
              <p><PhoneOutlined />  9061328237</p>
              <p className='email'><MailOutlined style={{color:"black"}}  />  adityanps1998@gmail.com</p>
              <p><CalendarOutlined />  10/04/1998</p>


           




            </div>

         


          </Card>
          
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​🇨​​ 🇦 ​​🇷 ​​🇪 ​​🇪 ​​🇷 ​ ​🇴 ​​🇧 ​​🇯 ​​🇪 ​​🇨 ​​🇹 ​​🇮 ​​🇻 ​​🇪 ​⦂</div>  
            <div className='obj-content'>
              To work for an organization that provides me the opportunity to improve any skills and knowledge to grow along with the organization's objective.
            </div>
          </Card>
        </div>


        <div className='card-a' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>🇪​​ 🇽 ​​🇵 ​​🇪 ​​🇷 ​​🇹 ​​🇮 ​​🇸 ​​🇪 ​⦂</div>
            <div className='p-a1' style={{fontSize:"15px"}}>
            <p>● ​🇲​​🇦​​🇳​​🇺​​🇦​​🇱​ ​🇹​​🇪​​🇸​​🇹​​🇮​​🇳​​🇬​</p>
            <p>● ​🇦​​🇺​​🇹​​🇴​​🇲​​🇦​​🇹​​🇮​​🇴​​🇳​ ​🇹​​🇪​​🇸​​🇹​​🇮​​🇳​​🇬​</p>
            <p>● 🇸​​🇪​​🇱​​🇪​​🇳​​🇮​​🇺​​🇲​ ​🇼​​🇮​​🇹​​🇭​ ​🇯​​🇦​​🇻​​🇦​</p>
            <p>● ​🇸​​🇶​​🇱​</p>



            </div>


            <div className='h-a' style={{marginTop:'10px'}}>​​🇱​​ 🇦​ ​🇳​ ​🇬​ ​🇺​ ​🇦​ ​🇬 ​​🇪 ​​🇸 ​ ​🇰 ​​🇳 ​​🇴 ​​🇼 ​​🇳 ​⦂</div>
            <div className='p-a1' style={{fontSize:"15px"}}>
            <p>● ​Malayalam​</p>
            <p>● ​English​</p>
            <p>● Tamil​</p>
            {/* <p>● ​🇸​​🇶​​🇱​</p> */}


            
            </div>
          </Card>
          
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​​🇪 ​​🇩 ​​🇺 ​​🇨 ​​🇦 ​​🇹 ​​🇮 ​​🇴 ​​🇳 ​⦂</div>  
            <div className='obj-content'>
             <p style={{fontSize:'17px'}}>● ʙ-ᴛᴇᴄʜ- ᴍᴇᴄʜᴀᴛʀᴏɴɪᴄꜱ ᴇɴɢɪɴᴇᴇʀɪɴɢ: ᴄɢᴘᴀ 7.75</p>
             <p>Malabar College of Engineering Deshamangalam Thrissur(2016-2020)</p>
             <p >​APJ ABDUL KALAM Technical University​</p>

<p style={{fontSize:'17px'}}>● ʜɪɢʜᴇʀ ꜱᴇᴄᴏɴᴅᴀʀʏ: ᴘᴇʀᴄᴇɴᴛᴀɢᴇ- 84%</p>
<p>Deepthi H S S Thalore, Kerala(2014-2016)</p>
<p>Kerala State Board</p>

<p  style={{fontSize:'17px'}}>● ​🇭​​🇮​​🇬​​🇭​ ​🇸​​🇨​​🇭​​🇴​​🇴​​🇱​ ​🇵​​🇪​​🇷​​🇨​​🇪​​🇳​​🇹​​🇦​​🇬​​🇪-93%</p>
<p>St. Josephs Model H.S, Kuriachira(2014)</p>
<p>Kerala State Board</p>

            </div>


          </Card>
        </div>



        <div className='card-a' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​🇸 ​​🇺 ​​🇲 ​​🇲 ​​🇦 ​​🇷 ​​🇾 ​⦂​</div>
          <p>An completed 4 months training on software testing specialist 
            course at Luminar Technology, Kochi Possess 
            strong knowledge ans understanding of Manual testing and basic Java, SQL </p>
           

         
          
            <div className='h-a' style={{marginTop:"100px"}}>​​🇪​ ​🇽​ ​🇵​ ​🇪​ ​🇷​ ​🇮​ ​🇪​ ​🇳​ ​🇨​ ​🇪​ ⦂
</div>  
<div className='p-a1'>
              <p><CheckCircleOutlined /> Reon Techonologies, Koratty as Automation Tester (May 2023-Present)</p>
              
            </div>
         


          </Card>
          
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​​🇵 ​​🇷 ​​🇴 ​​🇯 ​​🇪 ​​🇨 ​🇹 ​⦂</div>  
            <div className='obj-content'>
             <p>● Accident Avoiding System using Heart Rate Sensor.</p>
             <p>● Amigo Vibes-dating app</p>
           <p>● Manifold</p>
        
          <p>● Cargo Plus</p>
          
          <p></p>
            </div>



            
          </Card>
        </div>




        <div className='card-a' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​🇦​​ 🇸​ ​🇸 ​​🇮 ​​🇬 ​​🇳 ​​🇲 ​​🇪 ​​🇳 ​​🇹 ​⦂</div>
           <p>● Testcase document preparation for VRL travel, Rediffmail
             & Laundry website Bug Report Preparation for Rediffmail website.</p>
<p>● Bug Report Preparation for Rediffmail website.</p>
         


         


          </Card>
          
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a'>​🇵 ​​🇪 ​​🇷 ​​🇸 ​​🇴 ​​🇳 ​​🇦 ​​🇱 ​ ​🇸 ​​🇰 ​​🇮 ​​🇱 ​​🇱 ​​🇸 ​⦂
</div>  
<div className='p-a1'>
              <p><CheckCircleOutlined /> Adaptability</p>
              <p><CheckCircleOutlined /> Communication</p>
              <p><CheckCircleOutlined /> Willingness to Learn</p>
              <p><CheckCircleOutlined /> Social Media Research</p>
            </div>

          
            

          </Card>
        </div>




        <div className='card-a' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Card style={{ flex: 1, margin: '0 8px' }} className='ac-card'>
            <div className='h-a1'>​🇩 ​​🇪 ​​🇨​ ​🇱​ ​🇦​ ​🇷 ​​ 🇦 ​​🇹 ​​🇮 ​​🇴 ​​🇳 ​⦂</div>
            <div className='p-a1'>
              <p style={{ textAlign: 'center' }}>I hereby declare that the information provided is true to the best of my knowledge and belief.</p>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Place: ​🇹​​🇭​​🇷​​🇮​​🇸​​🇸​​🇺​​🇷​</p>
                <p style={{ textAlign: 'right' }}>ᴀᴅɪᴛʏᴀɴ ᴘ.ꜱ</p>
              </div>
            </div>
          </Card>
        </div>

        
      </div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
};

export default Crv;
