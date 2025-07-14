import React, { useState } from 'react'

import {faqData} from './faq'
import FaqCArd from './FaqCArd';

const Faq = () => {

    const [faqs, setFaqs]=useState(faqData);

    console.log(faqs)

  return (
    <div>
        {faqs.map((items)=> <FaqCArd   {...items} key={items.id}/>)}
    </div>
  )
}

export default Faq