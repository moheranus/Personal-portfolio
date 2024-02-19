// ModalPop.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './modal.css'; // Your custom modal CSS
import ImageSlider4 from '../slider/ImageSlider4';

const ModalPop4 = forwardRef((props, ref) => {
  const [open4, setOpen4] = useState(false);

  const onOpenModal4 = () => {
    setOpen4(true);
  };

  const onCloseModal4 = () => {
    setOpen4(false);
  };

  useImperativeHandle(ref, () => ({
    onOpenModal4: () => {
      setOpen4(true);
    },
  }));

  return (
    <div className='modal-container'>
      <Modal
        open={open4}
        onClose={onCloseModal4}
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
          <ImageSlider4 />
        </div>
      </Modal>
    </div>
  );
});

export default ModalPop4;
