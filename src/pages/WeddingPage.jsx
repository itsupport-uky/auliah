import React, {
  useState
} from 'react';

import SplashSection from '../sections/SplashSection/SplashSection';
import HeroSection from '../sections/HeroSection/HeroSection';
import StorySection from '../sections/StorySection/StorySection';
import BrideGroomSection from '../sections/BrideGroomSection/BrideGroomSection';
import EventSection from '../sections/EventSection/EventSection';
import GallerySection from '../sections/GallerySection/GallerySection';
import VideoSection from '../sections/VideoSection/VideoSection';
import GiftSection from '../sections/GiftSection/GiftSection';
import RSVPSection from '../sections/RSVPSection/RSVPSection';
import WishesSection from '../sections/WishesSection/WishesSection';
import FooterSection from '../sections/FooterSection/FooterSection';

import MainLayout from '../layouts/MainLayout';

const WeddingPage = () => {
  const [opened, setOpened] =
    useState(false);

  return (
    <MainLayout>
    <>
      <SplashSection
        isOpen={opened}
        onOpenInvitation={() =>
          setOpened(true)
        }
      />

      <HeroSection />

      <StorySection />

      <BrideGroomSection />

      <EventSection />

      {/* <GallerySection /> */}

      {/* <VideoSection /> */}

      <GiftSection />

      <RSVPSection />

      <WishesSection />

      <FooterSection />
    </>
    </MainLayout>
  );
};

export default WeddingPage;