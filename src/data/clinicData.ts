import orthodonticsImg from '../assets/images/orthodontics_smile_1792217558649.jpg';
import implantsImg from '../assets/images/dental_implants_procedure_1792217535540.jpg';
import cleaningImg from '../assets/images/dental_cleaning_hygiene_1792217535721.jpg';
import pediatricImg from '../assets/images/pediatric_dentistry_smile_1792217537260.jpg';
import operatoryImg from '../assets/images/clinic_modern_operatory_1792217537156.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  priceRange: string;
  duration: string;
  keyBenefits: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  treatment: string;
  avatar: string;
}

export const CLINIC_INFO = {
  name: "Avni Dental Clinic",
  subtitle: "Advanced Dental Treatments in Nagpur",
  tagline: "Your Health, Your Smile",
  rating: 5.0,
  reviewCount: 5,
  phone: "+91 94228 01809",
  phoneFormatted: "+91 94228 01809",
  address: "428P+X7H Umrer Rd, Gajanan Mandir Rd, Parsodi, Trimurti Nagar, Nagpur, Maharashtra 440022",
  shortAddress: "Trimurti Nagar, Nagpur, Maharashtra",
  plusCode: "428P+X7H Nagpur, Maharashtra",
  hoursText: "Monday - Sunday: 09:00 AM - 5:00 PM",
  status: "OPEN",
  appointmentNote: "Appointments are recommended before visiting.",
  overview: "Avni Dental Clinic is a highly-rated dental practice located in Trimurti Nagar, Nagpur, specializing in advanced dental treatments, painless procedures, and aesthetic smile transformations.",
  disclaimer: "This is for informational purposes only. For medical advice or diagnosis, consult a professional."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "orthodontics",
    title: "Orthodontics",
    category: "Smile Alignment",
    image: orthodonticsImg,
    shortDesc: "Invisible aligners and precision braces for straighter, healthier teeth.",
    fullDesc: "Modern orthodontic care designed to correct misalignments, crowding, and bite issues with maximum comfort and discreet aesthetics using custom-molded aligners and low-profile ceramic brackets.",
    priceRange: "₹25,000 - ₹85,000",
    duration: "6 - 18 months",
    keyBenefits: ["3D digital scan preview", "Clear invisible options", "Gentle tooth movement", "Improved chewing & facial aesthetics"]
  },
  {
    id: "implants",
    title: "Dental Implants",
    category: "Restoration",
    image: implantsImg,
    shortDesc: "Permanent, bio-compatible titanium tooth replacements with natural feel.",
    fullDesc: "State-of-the-art implantology using medical-grade titanium roots and handcrafted zirconia crowns that permanently restore lost teeth, preserving jawbone density and facial structure.",
    priceRange: "₹20,000 - ₹45,000 per tooth",
    duration: "2 - 3 visits",
    keyBenefits: ["100% natural chewing strength", "Lifetime osseointegration", "Prevents bone loss", "Zero damage to adjacent teeth"]
  },
  {
    id: "cleaning",
    title: "Dental Cleaning",
    category: "Preventive Care",
    image: cleaningImg,
    shortDesc: "Ultrasonic scaling, stain removal, and polishing for clean breath and gums.",
    fullDesc: "Comprehensive oral prophylaxis combining gentle ultrasonic calculus removal, enamel airflow polishing, and protective remineralizing fluoride glaze to prevent cavities and periodontal disease.",
    priceRange: "₹800 - ₹2,000",
    duration: "30 - 45 mins",
    keyBenefits: ["Removes stubborn tartar & stains", "Fresh long-lasting breath", "Stops gum bleeding", "Painless ultrasonic cavitation"]
  },
  {
    id: "pediatric",
    title: "Pediatric Dentistry",
    category: "Children's Care",
    image: pediatricImg,
    shortDesc: "Warm, anxiety-free dental experiences tailored for young children & teens.",
    fullDesc: "A nurturing environment designed specifically for young patients. We focus on preventive cavity seals, painless treatments, early habit correction, and cultivating lifelong positive dental habits.",
    priceRange: "₹600 - ₹2,500",
    duration: "30 - 40 mins",
    keyBenefits: ["Zero-fear gentle care", "Protective pit & fissure sealants", "Fluoride varnishes", "Interactive dental education"]
  },
  {
    id: "root-canal",
    title: "Advanced Endodontics",
    category: "Tooth Preservation",
    image: operatoryImg,
    shortDesc: "Single-sitting rotary root canal therapy with local anesthesia comfort.",
    fullDesc: "Precision micro-endodontic therapy that preserves infected or damaged teeth without extraction. Utilizes high-precision apex locators and computerized rotary instrumentation for rapid, painless healing.",
    priceRange: "₹3,500 - ₹6,500",
    duration: "45 - 60 mins",
    keyBenefits: ["Saves your natural tooth", "Immediate pain relief", "Single-visit completion available", "Computerized apex accuracy"]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Leticia Kutch",
    role: "Verified Patient",
    location: "Trimurti Nagar, Nagpur",
    rating: 5,
    date: "2 weeks ago",
    treatment: "Dental Cleaning & Polishing",
    comment: "I've always been afraid of dental visits, but this clinic changed everything. The staff is incredibly kind, and the treatments are painless and effective. I finally feel confident in my smile again!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-2",
    author: "Rahul Deshmukh",
    role: "Local Resident",
    location: "Parsodi, Nagpur",
    rating: 5,
    date: "1 month ago",
    treatment: "Root Canal Treatment",
    comment: "Best dental clinic in Trimurti Nagar! The doctor explained the procedure transparently and performed the single-sitting RCT with zero pain. The clinic hygiene and advanced equipment are top-notch.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-3",
    author: "Pooja Kulkarni",
    role: "Verified Patient",
    location: "Nagpur",
    rating: 5,
    date: "2 months ago",
    treatment: "Teeth Whitening & Smile Design",
    comment: "Had an extraordinary experience at Avni Dental Clinic. My smile makeover looks completely natural and bright. Prompt appointment scheduling and very polite doctors.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-4",
    author: "Amit Meshram",
    role: "Parent",
    location: "Gajanan Mandir Rd, Nagpur",
    rating: 5,
    date: "3 months ago",
    treatment: "Pediatric Dental Checkup",
    comment: "Brought my 7-year-old son here. The doctor was so patient and friendly that my son didn't cry once. Very hygienic clinic with state-of-the-art chairs and tools.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80"
  },
  {
    id: "rev-5",
    author: "Sneha Bansod",
    role: "Verified Patient",
    location: "Umrer Rd, Nagpur",
    rating: 5,
    date: "4 months ago",
    treatment: "Dental Implant Consultation",
    comment: "5/5 without a doubt! From the clean waiting area to the gentle dental treatment, everything was handled professionally. Highly recommended to anyone looking for advanced dental care in Nagpur.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
  }
];

export const CLINIC_FEATURES = [
  {
    title: "Innovative Equipment",
    description: "We use cutting-edge technology for diagnosis and treatment, ensuring a high standard of medical care."
  },
  {
    title: "Personalized Approach",
    description: "We develop customized treatment and care plans, fully adapted to the needs of each patient."
  },
  {
    title: "Expert Care",
    description: "Our dedicated doctors continuously enhance their expertise to bring you the highest standard of dental services."
  }
];
