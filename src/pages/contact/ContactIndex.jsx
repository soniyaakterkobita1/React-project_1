import React from 'react'
import ContactForm from '../../components/pages/contact/ContactForm'
import ContactMap from '../../components/pages/contact/ContactMap'
import Container from '../../components/common/Container'

const ContactIndex = () => {
  return (
    <>
     <section className="py-34">
        <Container>
            <div className="grid grid-cols-1 gap-y-34">
               <ContactForm />
               <ContactMap />
            </div>
        </Container>
     </section>
    </>
  ) 
}

export default ContactIndex
