// ModalPop.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './modal.css'; // Your custom modal CSS
import ImageSlider3 from '../slider/ImageSlider3';

const ModalPop3 = forwardRef((props, ref) => {
  const [open3, setOpen3] = useState(false);

  const onOpenModal3 = () => {
    setOpen3(true);
  };

  const onCloseModal3 = () => {
    setOpen3(false);
  };

  useImperativeHandle(ref, () => ({
    onOpenModal3: () => {
      setOpen3(true);
    },
  }));

  return (
    <div className='modal-container'>
      <Modal
        open={open3}
        onClose={onCloseModal3}
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
          <ImageSlider3 />
        </div>
      </Modal>
    </div>
  );
});

export default ModalPop3;
