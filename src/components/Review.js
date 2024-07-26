import React, { useState } from 'react';

const person = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.',
  },
];

const Review = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = person[index];

  const nextReview = () => {
    setIndex((prevIndex) => (prevIndex + 1) % person.length);
  };

  const prevReview = () => {
    setIndex((prevIndex) => (prevIndex - 1 + person.length) % person.length);
  };

  const randomReview = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * person.length);
    } while (randomIndex === index);
    setIndex(randomIndex);
  };

  return (
    <div className="review">
      <p className="author-id" id={`author-${id}`}>{id}</p>
      <p className="author">{name}</p>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <img className="person-img" src={image} alt={name} />
      <button type="button" className="prev-btn" onClick={prevReview}>Previous</button>
      <button type="button" className="next-btn" onClick={nextReview}>Next</button>
      <button type="button" className="random-btn" onClick={randomReview}>Surprise Me</button>
    </div>
  );
};

export default Review;
