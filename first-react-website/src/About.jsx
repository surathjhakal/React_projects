import React from 'react'
import Common from './Common'
import tech from '../src/images/tech.jpg'
const About = () => {
    return (
        <>
            <Common 
                name="Welcome to About Page"
                visit='./contact'
                btname="Contact Now"
                imgsrc={tech}
            />
        </>
    )
}

export default About