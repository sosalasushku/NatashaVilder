import React from "react";

import MailIcon from '@mui/icons-material/Mail';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';

const Delivery = ({ setActiveLink }) => {

    return (
        <div className='page'>
            <div className='container'>
                <div className='page-content'>
                    <div className='delivery section'>
                        <MailIcon sx={{ fontSize: 40 }} className='delivery section-icon' />
                        <div className='delivery section-text'>
                            Для приобретения работ напишите на почту <br /> natashavilder@gmail.com
                        </div>
                    </div>
                    <div className='delivery section'>
                        <LocalShippingIcon sx={{ fontSize: 40 }} className='delivery section-icon' />
                        <div className='delivery section-text'>
                            Доставка осуществляется курьерской службой EMS Почты России в любую точку мира и Яндекс go по г. Санкт-Петербургу
                        </div>
                    </div>
                    <div className='delivery section'>
                        <InventoryIcon sx={{ fontSize: 40 }} className='delivery section-icon' />
                        <div className='delivery section-text'>
                            Работы надёжно упаковываются в несколько слоев плотного картона и защитной пленки,
                            и затем в коробку/тубус в зависимости от толщины бумаги и материалов
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery