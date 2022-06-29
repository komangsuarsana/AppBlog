import React from 'react';

import SearchBar from './app/components/SearchBar';
import Screen from './app/components/Screen';
import BlockCard from './app/components/BlockCard';
import FeaturedNews from './app/components/FeaturedNews';
import SmallCard from './app/components/SmallCard';
import BreakingNews from './app/components/BreakingNews';


import data from './fakedata';
import TechNews from './app/components/TechNews';
import FlatCard from './app/components/FlatCard';
import HinduNews from './app/components/HinduNews';

export default function App() {
  const breakingNews = data.filter(item => item.category === 'breaking-news');
  const techNews = data.filter(item => item.category === 'tech');
  const hinduNews = data.filter(item => item.category === 'hindu');

  return (
    <Screen>
      <SearchBar />
      <FeaturedNews
      item={{
        id: "1",
        title: "First title",
        desc:
            "Informasi Umum Tentang Bali | Sejarah Pariwisata Pulau Bali",
        thumbnail: "https://www.gotravelaindonesia.com/wp-content/uploads/2017/11/bali-peta.jpg",
      }}
      />
      <BreakingNews data={breakingNews} />
      <HinduNews data={hinduNews} />
      <TechNews data={techNews} />
    </Screen>
  );
 
}