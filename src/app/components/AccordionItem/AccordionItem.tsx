'use client';

import ArrIcon from '@public/faq/arr.svg';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-300 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-[24px] lg:py-[56px]"
      >
        <span className="text-blue text-left text-base sm:text-2xl lg:text-[32px] font-medium font-interTight tracking-tighter leading-[18.40px] sm:leading-7 lg:leading-9">{title}</span>
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 
            ${isOpen ? 'bg-white flex-shrink-0 ml-2 w-[32px] h-[32px] sm:w-[56px] sm:h-[56px] lg:w-[100px] lg:h-[100px]' : 'bg-transparent w-[50px] h-[50px]'}`}
        >
          <ArrIcon
            className={`w-[8.86px] sm:h-[8.11px] sm:w-[17.71px] sm:h-[16.23px] lg:w-[24px] lg:h-[22px] transform transition-transform duration-300 
              ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          />
        </div>
      </button>

      <div
        className={`transition-[max-height] duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="pb-8 sm:pb-[50px] text-blue/60 text-xs sm:text-base lg:text-2xl font-normal font-manrope tracking-tighter leading-[13.80px] sm:leading-[18.40px] lg:leading-7 max-w-[1020px] transition-opacity duration-300">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
