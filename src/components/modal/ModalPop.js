// ModalPop.js
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import './modal.css'; // Your custom modal CSS
import ImageSlider from '../slider/ImageSlider';
const ModalPop = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    onOpenModal: () => {
      setOpen(true);
    },
  }));

  return (
    <div className='modal-container'>
      <Modal
        open={open}
        onClose={onCloseModal}
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
          <ImageSlider />
        </div>
      </Modal>
    </div>
  );
});

export default ModalPop;
