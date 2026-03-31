export interface Certification {
  slug: string;
  name: string;
  fullName: string;
  description: string;
  longDescription: string;
  benefits: string[];
  warrantyYears: string;
  logo: string;
  website: string;
  features: string[];
}

export const certifications: Certification[] = [
  {
    slug: 'gaf',
    name: 'GAF',
    fullName: 'GAF Master Elite Contractor',
    description: 'As a GAF Master Elite Contractor, we represent the top 2% of roofing contractors in North America.',
    longDescription: `Being a GAF Master Elite Contractor is one of the most prestigious certifications in the roofing industry. This elite status is earned by less than 2% of roofing contractors in North America, and S NEW ROOF is proud to hold this distinction.

To achieve Master Elite status, contractors must meet rigorous requirements including proper licensing, adequate insurance coverage, a proven reputation for quality work, and a commitment to ongoing professional training. GAF personally verifies these credentials and monitors customer satisfaction.

When you choose a GAF Master Elite Contractor like S NEW ROOF, you're not just getting a new roof—you're getting the peace of mind that comes with working with a contractor who has been thoroughly vetted by North America's largest roofing manufacturer.

Our Master Elite status also allows us to offer the Golden Pledge Limited Warranty, the best warranty in the roofing industry. This warranty covers both materials and workmanship for up to 25 years, providing you with exceptional protection for your investment.`,
    benefits: [
      'Golden Pledge Limited Warranty - up to 25 years coverage',
      'Only available from top 2% of contractors',
      'Verified licensing and insurance',
      'Proven track record of quality work',
      'Ongoing professional training requirements',
      'Direct support from GAF technical experts',
      'Access to premium GAF roofing products',
    ],
    warrantyYears: '25',
    logo: '/certifications/gaf-logo.png',
    website: 'https://www.gaf.com',
    features: [
      'Triple Layer Protection',
      'Lifetime Roofing System',
      'Weather Watch Leak Barrier',
      'Deck Armor Roof Deck Protection',
      'Timberline HDZ Shingles',
      'Cobra Ridge Ventilation',
    ],
  },
  {
    slug: 'owens-corning',
    name: 'Owens Corning',
    fullName: 'Owens Corning Preferred Contractor',
    description: 'As an Owens Corning Preferred Contractor, we have access to premium products and extended warranties.',
    longDescription: `Owens Corning is one of the most trusted names in roofing, known for their innovative products and commitment to quality. As an Owens Corning Preferred Contractor, S NEW ROOF has demonstrated our expertise in installing their roofing systems and meets their strict qualification standards.

This partnership gives us access to Owens Corning's complete line of roofing products, including their famous Duration Series shingles with patented SureNail Technology. This innovative design provides superior grip and durability, helping your roof withstand even the toughest weather conditions.

Preferred Contractor status means we can offer extended warranty options that aren't available through non-certified contractors. The Owens Corning Preferred Protection Roofing System Warranty provides comprehensive coverage for your entire roofing system, giving you confidence that your home is protected.

Our team receives ongoing training on the latest Owens Corning installation techniques, ensuring that every roof we install meets or exceeds manufacturer specifications.`,
    benefits: [
      'Extended warranty options up to 50 years',
      'SureNail Technology for superior wind resistance',
      'Complete roofing system warranties',
      'Access to premium product lines',
      'Ongoing installation training',
      'Technical support from Owens Corning',
      'Preferred pricing on materials',
    ],
    warrantyYears: '50',
    logo: '/certifications/owens-corning-logo.png',
    website: 'https://www.owenscorning.com',
    features: [
      'SureNail Technology',
      'Duration Series Shingles',
      'Total Protection Roofing System',
      'WeatherLock Leak Barrier',
      'VentSure Ventilation',
      'Hip & Ridge Shingles',
    ],
  },
  {
    slug: 'certainteed',
    name: 'CertainTeed',
    fullName: 'CertainTeed SELECT ShingleMaster',
    description: 'SELECT ShingleMaster is CertainTeed\'s highest level of certification, demonstrating our commitment to excellence.',
    longDescription: `CertainTeed's SELECT ShingleMaster certification is the highest level of recognition in their contractor program. This elite status is reserved for contractors who have demonstrated exceptional expertise in installing CertainTeed roofing products and maintain the highest standards of professionalism.

S NEW ROOF has earned this prestigious designation through rigorous training, proper licensing, and a proven history of quality installations. SELECT ShingleMaster contractors must employ at least one ShingleMaster Certified installer and maintain this certification through ongoing education.

This certification allows us to offer CertainTeed's best warranty coverage, including the SureStart PLUS warranty. This comprehensive warranty provides coverage for both materials and workmanship, with protection that can last up to 50 years on certain products.

CertainTeed is known for their beautiful, high-quality shingles that combine aesthetic appeal with exceptional durability. As a SELECT ShingleMaster, we can help you choose the perfect CertainTeed products for your home and ensure they're installed to the highest standards.`,
    benefits: [
      'SureStart PLUS warranty coverage',
      'Up to 50 years of warranty protection',
      'Highest level CertainTeed certification',
      'Certified ShingleMaster installers',
      'Access to premium product lines',
      'Professional installation standards',
      'Comprehensive system warranties',
    ],
    warrantyYears: '50',
    logo: '/certifications/certainteed-logo.png',
    website: 'https://www.certainteed.com',
    features: [
      'Landmark Series Shingles',
      'NorthGate Flexibility',
      ' presidential Shake',
      'Independence Shingles',
      'Roofers\' Select High Transmission',
      'Flintlastic Products',
    ],
  },
  {
    slug: 'tamko',
    name: 'TAMKO',
    fullName: 'TAMKO Pro Certified Contractor',
    description: 'TAMKO Pro Certified status means we\'re trained and qualified to install TAMKO products with confidence.',
    longDescription: `TAMKO Building Products is a respected American manufacturer with over 75 years of experience in the roofing industry. As a TAMKO Pro Certified Contractor, S NEW ROOF has completed comprehensive training on TAMKO products and installation techniques.

This certification demonstrates our commitment to staying current with the latest roofing technologies and best practices. TAMKO Pro Certified contractors must meet specific requirements including proper licensing, insurance, and a commitment to quality installation standards.

TAMKO is known for their innovative products including their MetalWorks steel roofing systems and Heritage series asphalt shingles. These products offer excellent durability and aesthetic appeal, with options to suit any home style and budget.

Our TAMKO Pro Certified status allows us to offer enhanced warranty options, including the TAMKO Pro Certified Limited Warranty. This warranty provides extended coverage beyond standard manufacturer warranties, giving you additional protection for your investment.`,
    benefits: [
      'Enhanced warranty coverage',
      'Professional product training',
      'Access to full TAMKO product line',
      'Quality installation standards',
      'Technical support from TAMKO',
      'Competitive pricing on materials',
      'Pro Certified warranty options',
    ],
    warrantyYears: '30',
    logo: '/certifications/tamko-logo.png',
    website: 'https://www.tamko.com',
    features: [
      'Heritage Series Shingles',
      'MetalWorks Steel Roofing',
      'Titan XT Shingles',
      'MetalWorks Astonwood',
      'MetalWorks TimberLite',
      'EverGrain Decking',
    ],
  },
];

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((cert) => cert.slug === slug);
}

export function getAllCertificationSlugs(): string[] {
  return certifications.map((cert) => cert.slug);
}
