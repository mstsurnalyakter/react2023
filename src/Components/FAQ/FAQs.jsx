import React, { useState } from 'react'
import FAQ from './FAQ';
 

import { faqsData } from './data'

const FAQs = () => {
  const [faqs, setFaqs] = useState(faqsData);

  return (
    <main className='container'>
        <section className='faqs'>
            <h1>FAQs</h1>
            {faqs.map(faq => <FAQ {...faq} key={faq.id} />)}
        </section>

    </main>
  )
}

export default FAQs