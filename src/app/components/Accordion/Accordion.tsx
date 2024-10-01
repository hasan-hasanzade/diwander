import AccordionItem from '../AccordionItem/AccordionItem';

const Accordion: React.FC = () => {
  return (
    <div className="w-full mt-6 md:mt-[79px] lg:mt-12">
      <AccordionItem
        title="What is DiWander and why is it the best service?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
        <AccordionItem
        title="DiWander will answer all your questions?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
        <AccordionItem
        title="Can i book with confidence?"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      />
    </div>
  );
};

export default Accordion;
