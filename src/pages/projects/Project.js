import React from 'react';
import "./project.css"
import ModalPop from '../../components/modal/ModalPop';
import ModalPop2 from '../../components/modal/ModalPop2';
import image1 from "../../assets/xpay/Screenshot (13).png";
import image2 from "../../assets/hst-landing/Screenshot (29).png";
import image3 from "../../assets/sirm/imag1.png"
import image4 from "../../assets/fidel/Screenshot (33).png"
import ModalPop3 from '../../components/modal/ModalPop3';
import ModalPop4 from '../../components/modal/ModalPop4';
function Project() {
  // Create a ref for the modal
  const modalRef = React.useRef();
  const modalRef2 = React.useRef();
  const modalRef3 = React.useRef();
  const modalRef4 = React.useRef();
  return (
    <>
    <div className='project-container'>
      <div className='card-container' id='project'>
        <div className="card">
          <h3 className="card__title">ToloPay Wallet App UI Design</h3>
          <p className="card__content">Online money transfer app, where user is allowed to transfer money from bank to bank, wallet to bank, bank to wallet, wallet to wallet.</p>
          <div className="card__date">
            {/* April 15, 2022 */}
          </div>
          <div className='card-image'>
            {/* Your card image content */}
            <img src={image1} alt=''/>
          </div>
          <div className='project-action'>
            <div className='action-btn'>
              
              <button><a href='https://www.figma.com/file/zoyIMWj0AUknCaZORqP5dQ/X-pay?type=design&node-id=0-1&mode=design&t=cSQF30zoVWu4EEn4-0'>Site Link</a></button>
            </div>
          </div>
          <div className="card__arrow" onClick={() => {
              // Open the modal when the SVG icon is clicked
              modalRef.current.onOpenModal();
            }}
            style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"
            
            >
              <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
            </svg>
            
          </div>
        </div>
        <div className="card">
          <h3 className="card__title">HST Learning Solution Landing</h3>
          <p className="card__content">Learning Solution Landing page designed for HST Consulting plc.</p>
          <div className="card__date">
            {/* April 15, 2022 */}
          </div>
          <div className='card-image'>
            {/* Your card image content */}
            <img src={image2} alt=''/>
          </div>
          <div className='project-action'>
            <div className='action-btn'>
              <button><a href='https://learn.hst-et.com/?theme=moove'>Site Link</a></button>
            </div>
          </div>
          <div className="card__arrow" onClick={() => {
              // Open the modal when the SVG icon is clicked
              modalRef2.current.onOpenModal2();
            }}
            style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"
            
            >
              <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
            </svg>
            
          </div>
        </div>
        <div className="card">
          <h3 className="card__title">School Management System</h3>
          <p className="card__content">School management system built using Reactjs, ant Design, Nodejs and Mongodb</p>
          <div className="card__date">
            {/* April 15, 2022 */}
          </div>
          <div className='card-image'>
            {/* Your card image content */}
            <img src={image3} alt=''/>
          </div>
          <div className='project-action'>
            <div className='action-btn'>
              <button><a href='https://github.com/moheranus/school-management-system'>Git Code</a></button>
              {/* <button>Site link</button> */}
            </div>
          </div>
          <div className="card__arrow" onClick={() => {
              // Open the modal when the SVG icon is clicked
              modalRef3.current.onOpenModal3();
            }}
            style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"
            
            >
              <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
            </svg>
            
          </div>
        </div>
        <div className="card">
          <h3 className="card__title">Fidel</h3>
          <p className="card__content">AI that teach sign languge to normal people </p>
          <div className="card__date">
            {/* April 15, 2022 */}
          </div>
          <div className='card-image'>
            {/* Your card image content */}
            <img src={image4} alt=''/>
          </div>
          <div className='project-action'>
            <div className='action-btn'>
              <button><a href='https://www.figma.com/file/bhNSyWizNqgKIlAYKKmADt?embed_host=share&kind=file&mode=design&t=On2tyZI3XfFXKnp1-1&type=design&viewer=1'>Site Link</a></button>
              {/* <button>Site link</button> */}
            </div>
          </div>
          <div className="card__arrow" onClick={() => {
              // Open the modal when the SVG icon is clicked
              modalRef4.current.onOpenModal4();
            }}
            style={{ cursor: 'pointer' }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15"
            
            >
              <path fill="#fff" d="M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"></path>
            </svg>
            
          </div>
        </div>
        
        
      </div>
      <ModalPop ref={modalRef} />
      <ModalPop2 ref={modalRef2} />
      <ModalPop3 ref={modalRef3} />
      <ModalPop4 ref={modalRef4} />
      </div>
    </>
  );
}

export default Project;
