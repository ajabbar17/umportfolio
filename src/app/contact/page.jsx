import React from 'react'
import ContactForm from '../components/ContactForm'

export const metadata = {
  title: "CONTACT",
  description: "Get in touch with me for collaboration opportunities, design projects, or educational consultations. Let's create something amazing together.",
};

const page = () => {
  return (
    <div>
        <ContactForm />
    </div>
  )
}

export default page