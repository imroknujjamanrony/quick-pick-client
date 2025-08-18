import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import FeaturesSection from '../../Components/FeaturesSection';
import PromoBannerSection from '../../Components/PromoBannerSection';
import ProductSection from '../../Components/ProductSection';
import BannerSection from '../../Components/BannerSection';
import CompanySection from '../../Components/CompanySection';

const Home = () => {
    const newArrivals = [
        {
          id: 1,
          name: '100 Percent Apple Juice – 64 fl oz Bottle',
          price: 0.5,
          oldPrice: 1.99,
          discount: 75,
          image: '/images/apple-juice.png',
          tags: ['organic'],
        },
        {
          id: 2,
          name: 'Frozen Pizza, Supreme',
          price: 8.99,
          oldPrice: 9.99,
          discount: 11,
          image: '/images/pizza.png',
          tags: ['cold sale'],
        },
        {
            "id": 3,
            "name": "Simply Orange Pulp Free Juice – 52 fl oz",
            "price": 2.45,
            "oldPrice": 4.13,
            "discount": 41,
            "image": "/images/simply-orange.png",
            "tags": []
          },
          {
            "id": 4,
            "name": "California Pizza Kitchen Margherita, Crispy Thin Crust",
            "price": 11.77,
            "oldPrice": 14.77,
            "discount": 21,
            "image": "/images/margherita-pizza.png",
            "tags": ["cold sale"]
          },
          {
            "id": 5,
            "name": "Cantaloupe Melon Fresh Organic Cut",
            "price": 1.25,
            "oldPrice": 2.98,
            "discount": 58,
            "image": "/images/cantaloupe.png",
            "tags": ["organic"]
          },
          {
            "id": 6,
            "name": "Angel Soft Toilet Paper, 9 Mega Rolls",
            "price": 14.12,
            "oldPrice": 17.12,
            "discount": 18,
            "image": "/images/angel-soft.png",
            "tags": []
          }
      ];
      const companiesData = [
        {
          name: "Machic",
          rating: 4.5,
          reviews: 41,
          description: "Good quality product can only be found in good stores",
          image: "/images/company1.png"
        },
        {
          name: "Blonwe",
          rating: 4,
          reviews: 37,
          description: "All kinds of grocery products are available in our store",
          image: "/images/company2.png"
        },
        {
          name: "Bacola",
          rating: 3.5,
          reviews: 35,
          description: "Our work can definitely support the local economy",
          image: "/images/company3.png"
        },
        {
          name: "Medibazar",
          rating: 4,
          reviews: 30,
          description: "Save your time – save your money – shop from our grocery store",
          image: "/images/company4.png"
        }
      ];
    return (
        <div className='lg:w-[80%] mx-auto px-2'>
            <HeroSection></HeroSection>
            <FeaturesSection></FeaturesSection>
            <PromoBannerSection></PromoBannerSection>
            <ProductSection title={"New Arrivals"} subtitle={"Dont miss this opportunity at a special discount just for this week."} products={newArrivals}></ProductSection>
            <PromoBannerSection></PromoBannerSection>
            <ProductSection title={"Featured Products"} subtitle={"Do not miss the current offers until the end of March."} products={newArrivals}></ProductSection>
            <PromoBannerSection></PromoBannerSection>
            <ProductSection title={"Best Sellers"} subtitle={"Some of the new products arriving this weeks"} products={newArrivals}></ProductSection>
            <BannerSection></BannerSection>
            <CompanySection title="Popular Companies" subtitle="Some of the new products arriving this week"
        companies={companiesData}
      />
        </div>
    );
};

export default Home;