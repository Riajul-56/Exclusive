import React from 'react'
import Containers from '../Components/layout/Containers'
import Breadcrumb from '../Components/Breadcrumb'
import Info from '../Components/Info'
import Contactinfo from '../Components/Contactinfo'

const Contact = () => {
    return (
        <section>
            <Containers>
                <Breadcrumb />

                <div className='gap-[62px] lg:flex flex-none '>
                    <div className='lg:w-[30%] w-full'>
                        <Info />
                    </div>

                    <div className='lg:w-[70%] lg:mt-[120px] mt-10'>
                        <Contactinfo />
                    </div>
                </div>
            </Containers>
        </section>
    )
}
export default Contact
