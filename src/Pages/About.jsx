import React from 'react'
import Containers from '../Components/layout/Containers'
import Breadcrumb from '../Components/Breadcrumb'
import Flex from '../Components/Flex'
import Story from '../assets/Story.png'
import Images from '../Components/layout/Images'

const About = () => {
    return (
        <section>
            <Containers>
                <Breadcrumb />
                <Flex>
                    <div>
                        <h1>Our Story</h1>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div>
                        <Images src={Story} />
                    </div>
                </Flex>
            </Containers>
        </section>
    )
}

export default About
