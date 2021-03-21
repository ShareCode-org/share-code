import React from 'react';
import Modal from 'react-modal';

const ProfileModale = ({ Content, modalIsOpen, setIsOpen }) => {
    const customStyles = {
        content: {
            width: '515px',
            height: '500px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    };

    return (

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpen({ modalIsOpen: false })}
            style={customStyles}
        >
            {Content}
        </Modal>
    )
};

export default ProfileModale;