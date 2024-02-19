// ModalPop.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './modal.css'; // Your custom modal CSS
import ImageSlider2 from '../slider/ImageSlider2';

const ModalPop2 = forwardRef((props, ref) => {
  const [open2, setOpen2] = useState(false);



  const onCloseModal2 = () => {
    setOpen2(false);
  };

  useImperativeHandle(ref, () => ({
    onOpenModal2: () => {
      setOpen2(true);
    },
  }));

  return (
    <div className='modal-container'>
      <Modal
        open={open2}
        onClose={onCloseModal2}
        classNames={{
          overlay: 'custom-overlay',
          modal: 'custom-modal',
        }}
        animationDuration={800}
      >
        <h2 className='modal-header-text'>ToloPay Wallet app screenshoot</h2>
        <p className='modal-p'>
          {/* Online money transfer app, where user is allowed to transfer money from bank to bank, wallet to bank, bank to wallet, wallet to wallet. */}
        </p>
        <div className='project-image-slider'>
          <ImageSlider2 />
        </div>
      </Modal>
    </div>
  );
});

export default ModalPop2;
