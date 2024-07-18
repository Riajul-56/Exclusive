import React from 'react'
import Containers from '../Components/layout/Containers'
import Breadcrumb from '../Components/Breadcrumb'
import Flex from '../Components/Flex'
import Info from '../Components/Info'
import Contactinfo from '../Components/Contactinfo'



const Contact = () => {
    return (
        <section>
            <Containers>
                <Breadcrumb />

                <Flex className='gap-[62px]'>
                    <div className='w-[30%]'>
                        <Info />
                    </div>

                    <div className='w-[70%] mt-[120px]'>
                        <Contactinfo />
                    </div>
                </Flex>
            </Containers>
        </section>
    )
}

export default Contact
