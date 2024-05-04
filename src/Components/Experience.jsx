import React from 'react';
import Card from './Card';

const Experience = () => {
  const cards = [
    { imageUrl: '/assets/hero.jpg', title: 'Noteworthy technology acquisitions 2021', description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.' },
    { imageUrl: '/assets/hero.jpg', title: 'Another card title', description: 'Description for another card.' },
    { imageUrl: '/assets/hero.jpg', title: 'Yet another card title', description: 'Description for yet another card.' },
    { imageUrl: '/assets/hero.jpg', title: 'One more card title', description: 'Description for one more card.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Experience;
