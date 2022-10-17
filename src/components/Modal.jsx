import React from 'react'

// onClick={e => e.stopPropagation()}

const Modal = ({ pic, setOpenModal }) => {
  return (
    <div className='picture-modal' onClick={() => setOpenModal(false)} >
      <div className='picture-modal-content'>
        <div className='picture-modal-media'>
          <img src={pic.imgFull} alt={pic.title} />
        </div>


        <span class='close' onClick={() => setOpenModal(false)}>&times;</span>

        <div className='picture-modal-textarea'>
          <p className='description description-title'>{pic.title}</p>
          <p className='description description-title description-margin'>{pic.width}x{pic.height}</p>
          <p className='description'>{pic.description}</p>
          <p className='description'>{pic.year}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
