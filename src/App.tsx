/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ClinicSection } from './components/ClinicSection';
import { FeedbackSection } from './components/FeedbackSection';
import { ContactVisitSection } from './components/ContactVisitSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceModal } from './components/ServiceModal';
import { ReviewsModal } from './components/ReviewsModal';
import { PriceListModal } from './components/PriceListModal';
import { ServiceItem } from './data/clinicData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [isPriceListOpen, setIsPriceListOpen] = useState(false);

  const handleOpenBooking = (service?: ServiceItem | null) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleBookFromServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleMeetTeam = () => {
    const clinicElem = document.getElementById('clinic');
    if (clinicElem) {
      clinicElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#152336] text-white flex flex-col selection:bg-[#3b5e8c] selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking(null)}
        onOpenContact={() => {
          const contactElem = document.getElementById('contact');
          if (contactElem) contactElem.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPriceList={() => setIsPriceListOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
      />

      {/* Main Page Layout following the template design */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onScheduleClick={() => handleOpenBooking(null)}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Services Bento Grid Section */}
        <ServicesSection
          onSelectService={handleSelectService}
          onMeetTeam={handleMeetTeam}
        />

        {/* 3. Our Clinic Section */}
        <ClinicSection onMeetTeam={handleMeetTeam} />

        {/* 4. Patients' Feedback Section */}
        <FeedbackSection onSeeAllReviews={() => setIsReviewsOpen(true)} />

        {/* 5. Contact & Visit Information (from original HTML) */}
        <ContactVisitSection
          onScheduleClick={() => handleOpenBooking(null)}
        />
      </main>

      {/* Footer with Medical Disclaimer from HTML */}
      <Footer
        onOpenBooking={() => handleOpenBooking(null)}
        onOpenPriceList={() => setIsPriceListOpen(true)}
        onOpenReviews={() => setIsReviewsOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={selectedService}
      />

      <ServiceModal
        service={selectedService && !isBookingOpen ? selectedService : null}
        onClose={() => setSelectedService(null)}
        onBookService={handleBookFromServiceModal}
      />

      <ReviewsModal
        isOpen={isReviewsOpen}
        onClose={() => setIsReviewsOpen(false)}
        onBookAppointment={() => {
          setIsReviewsOpen(false);
          setIsBookingOpen(true);
        }}
      />

      <PriceListModal
        isOpen={isPriceListOpen}
        onClose={() => setIsPriceListOpen(false)}
        onBookAppointment={() => {
          setIsPriceListOpen(false);
          setIsBookingOpen(true);
        }}
      />
    </div>
  );
}
