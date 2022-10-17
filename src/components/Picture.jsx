import { useState } from "react"
import { ImageListItem } from "@mui/material"
import useWindowDimensions from './getWindowDimensions'

import Modal from './Modal'

const Picture = ({ pic }) => {

  const [openModal, setOpenModal] = useState(false);
  const { width } = useWindowDimensions()

  const handleModal = () => {
    if (width > 768) setOpenModal(true)
  }

  return (
    <>
      <ImageListItem
        key={pic.id}
      >
        <img src={pic.img} alt={pic.title} />
        <div className='picture-info' onClick={handleModal}>
          <p className='description description-title'>{pic.title}</p>
          <p className='description description-title desctiption-margin'>{pic.width}x{pic.height}</p>
          <p className='description'>{pic.description}</p>
          <p className='description'>{pic.year}</p>
        </div>
        {
          pic.isSold ? <div className="badge">sold</div> : ''
        }
      </ImageListItem>

      {
        openModal ? <Modal pic={pic} setOpenModal={setOpenModal} /> : ''
      }
    </>
  )
}

export default Picture