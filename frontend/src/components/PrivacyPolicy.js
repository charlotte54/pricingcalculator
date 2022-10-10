import React from 'react'
import { Accordion } from 'react-bootstrap'

const PrivacyPolicy = () => {
    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
        <Accordion.Header>Privacy Policy</Accordion.Header>
        <Accordion.Body>
        <p>
        This website is a demo site. 
        I cannot and do not take responsibility for the collection or use of personal data from my website.
        </p>
  </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    )
}

export default PrivacyPolicy
