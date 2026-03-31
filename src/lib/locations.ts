export interface Location {
  slug: string;
  name: string;
  county: string;
  description: string;
  longDescription: string;
  services: string[];
  zipCodes: string[];
  highlights: string[];
  image: string;
}

export const locations: Location[] = [
  {
    slug: 'santa-ana',
    name: 'Santa Ana',
    county: 'Orange County',
    description: 'Professional roofing services in Santa Ana, CA. Expert roof repair, replacement, and installation from your trusted local roofing contractor.',
    longDescription: `S NEW ROOF is proud to serve Santa Ana and the surrounding Orange County community with top-quality roofing services. As Santa Ana's trusted local roofing contractor, we understand the unique challenges that California homes face, from intense sun exposure to seasonal rains.

Our team of certified roofing professionals has extensive experience working with all types of roofing systems common in Santa Ana, including tile roofs, shingle roofs, and flat roofs. Whether you need a simple repair or a complete roof replacement, we deliver exceptional results backed by our satisfaction guarantee.

We're committed to protecting Santa Ana homes and families with durable, long-lasting roofing solutions. Our emergency services are available 24/7 because we know roofing problems don't always happen during business hours.`,
    services: ['Roof Repair', 'Roof Replacement', 'Emergency Leak Repair', 'Roof Inspection', 'Tile Roofing', 'Shingle Roofing'],
    zipCodes: ['92701', '92702', '92703', '92704', '92705', '92706', '92707', '92708', '92711', '92712', '92728', '92735'],
    highlights: [
      'Fast response times throughout Santa Ana',
      'Licensed and insured roofing contractor',
      'Free roof inspections and estimates',
      '24/7 emergency roofing services',
      'Experienced with Santa Ana building codes',
      'Local family-owned business',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'orange-county',
    name: 'Orange County',
    county: 'Orange County',
    description: 'Comprehensive roofing services across Orange County, CA. From coastal homes to inland properties, we protect your home with quality roofing.',
    longDescription: `S NEW ROOF provides complete roofing solutions throughout Orange County, California. Our service area spans from coastal communities to inland neighborhoods, giving us extensive experience with the diverse roofing needs of OC residents.

Orange County's Mediterranean climate demands roofing systems that can withstand hot, dry summers and occasional heavy winter rains. We specialize in roofing materials ideally suited for Southern California weather, including clay and concrete tile, asphalt shingles, and energy-efficient cool roofs.

From Huntington Beach to Yorba Linda, our mobile crews are ready to respond quickly to your roofing needs. We've built our reputation on quality workmanship, honest pricing, and exceptional customer service throughout Orange County.`,
    services: ['Roof Repair', 'Roof Replacement', 'Storm Damage Repair', 'Roof Inspection', 'Gutter Services', 'Tile Roofing'],
    zipCodes: ['92602', '92603', '92604', '92606', '92610', '92612', '92614', '92617', '92618', '92620', '92630', '92701', '92801', '92802', '92805', '92806', '92807'],
    highlights: [
      'Serving all Orange County communities',
      'Coastal and inland roofing expertise',
      'Storm damage specialists',
      'Insurance claim assistance',
      'Energy-efficient roofing options',
      'Competitive financing available',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'anaheim',
    name: 'Anaheim',
    county: 'Orange County',
    description: 'Expert roofing services in Anaheim, CA. Professional roof repair, installation, and replacement for Anaheim homes and businesses.',
    longDescription: `Anaheim homeowners trust S NEW ROOF for all their roofing needs. As one of Orange County's largest cities, Anaheim presents diverse roofing challenges from older historic homes to newer developments. Our experienced team has worked on properties throughout the city.

We understand Anaheim's specific building requirements and work closely with local authorities to ensure all roofing projects meet code requirements. Whether you're near Disneyland, in the Anaheim Hills, or anywhere in between, our crews are ready to serve you.

From residential roof repairs to complete commercial roof installations, S NEW ROOF brings expertise and professionalism to every Anaheim roofing project. We use only premium materials from trusted manufacturers.`,
    services: ['Roof Repair', 'Roof Replacement', 'Emergency Leak Repair', 'Roof Inspection', 'Shingle Roofing', 'Flat Roof Systems'],
    zipCodes: ['92801', '92802', '92803', '92804', '92805', '92806', '92807', '92808', '92809', '92812', '92814', '92815', '92816', '92817', '92825', '92831', '92832', '92833', '92834', '92835', '92836', '92837', '92838', '92840', '92841', '92842', '92843', '92844', '92845', '92846', '92847', '92848', '92849', '92850', '92852', '92853', '92854', '92856', '92857', '92858', '92859', '92861', '92862', '92863', '92864', '92865', '92866', '92867', '92868', '92869', '92870', '92871', '92872', '92873', '92874', '92875', '92876', '92877', '97801', '92881', '92882', '92883', '92885', '92886', '92887', '92899'],
    highlights: [
      'Experienced with Anaheim building codes',
      'Services for historic and new homes',
      'Commercial roofing available',
      'Free estimates for Anaheim residents',
      'Emergency services 24/7',
      'Senior citizen discounts',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'irvine',
    name: 'Irvine',
    county: 'Orange County',
    description: 'Premium roofing services in Irvine, CA. Quality roof repair and replacement for Irvine homes with energy-efficient solutions.',
    longDescription: `Irvine homeowners deserve the best, and S NEW ROOF delivers excellence in roofing services. Known for its master-planned communities and quality homes, Irvine requires roofing contractors who understand the specific needs of these well-designed neighborhoods.

We specialize in roofing systems that complement Irvine's modern architecture while providing superior protection. From the Woodbridge area to Portola Springs, our team has extensive experience working throughout Irvine's diverse communities.

Energy efficiency is a priority for many Irvine homeowners, and we offer cool roof systems and solar-ready roofing solutions that help reduce energy costs while protecting your home. All our Irvine roofing projects meet the city's strict building standards.`,
    services: ['Roof Repair', 'Roof Replacement', 'Energy-Efficient Roofs', 'Roof Inspection', 'Tile Roofing', 'Solar-Ready Roofing'],
    zipCodes: ['92602', '92603', '92604', '92606', '92612', '92614', '92616', '92617', '92618', '92619', '92620', '92623', '92650', '92651', '92652', '92653', '92654', '92655', '92656', '92657', '92658', '92659', '92660', '92661', '92662', '92663', '92664', '92665', '92666', '92667', '92668', '92669', '92670', '92671', '92672', '92673', '92674', '92675', '92676', '92677', '92678', '92679', '92680', '92681', '92682', '92683', '92684', '92685', '92686', '92687', '92688', '92689', '92690', '92691', '92692', '92693', '92694', '92695', '92696', '92697', '92698'],
    highlights: [
      'Energy-efficient roofing specialists',
      'HOA-approved roofing solutions',
      'Solar-ready roof installations',
      'Master-planned community expertise',
      'Premium material options',
      'Transferable warranties',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'garden-grove',
    name: 'Garden Grove',
    county: 'Orange County',
    description: 'Reliable roofing services in Garden Grove, CA. Expert roof repairs and installations for Garden Grove homes at competitive prices.',
    longDescription: `S NEW ROOF is your trusted roofing partner in Garden Grove, California. This vibrant Orange County city features a mix of charming older homes and newer developments, each with unique roofing needs. Our experienced team understands how to work with all roofing types found in Garden Grove.

From the historic downtown area to the residential neighborhoods throughout the city, we've helped countless Garden Grove homeowners protect their properties with quality roofing services. We handle everything from minor repairs to complete roof replacements.

Our Garden Grove customers appreciate our honest approach, fair pricing, and commitment to quality. We treat every home as if it were our own, ensuring lasting results that protect your family for years to come.`,
    services: ['Roof Repair', 'Roof Replacement', 'Leak Detection', 'Roof Inspection', 'Shingle Roofing', 'Tile Roofing'],
    zipCodes: ['92840', '92841', '92842', '92843', '92844', '92845', '92846'],
    highlights: [
      'Affordable pricing for Garden Grove',
      'Experienced with older homes',
      'Leak detection specialists',
      'Same-day service available',
      'Family-friendly scheduling',
      'Military discounts available',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'fullerton',
    name: 'Fullerton',
    county: 'Orange County',
    description: 'Professional roofing services in Fullerton, CA. Quality roof repair and replacement for Fullerton homes and historic properties.',
    longDescription: `Fullerton's diverse architecture, from historic downtown buildings to hillside homes, requires a roofing contractor with varied expertise. S NEW ROOF brings that expertise to every Fullerton roofing project, big or small.

We've worked on numerous Fullerton homes, understanding the specific challenges posed by the city's varied terrain and architectural styles. From California bungalows to modern constructions, our team has the skills and experience to handle any roofing challenge.

Fullerton homeowners can count on us for honest assessments, quality workmanship, and reliable service. We're committed to preserving the character of your home while providing modern protection against the elements.`,
    services: ['Roof Repair', 'Roof Replacement', 'Historic Roof Restoration', 'Roof Inspection', 'Emergency Services', 'Skylight Installation'],
    zipCodes: ['92831', '92832', '92833', '92834', '92835', '92836', '92837', '92838'],
    highlights: [
      'Historic home roofing expertise',
      'Hillside property experience',
      'Skylight installation available',
      'Downtown Fullerton service',
      'University area specialists',
      'Weekend appointments available',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'costa-mesa',
    name: 'Costa Mesa',
    county: 'Orange County',
    description: 'Expert roofing services in Costa Mesa, CA. Coastal roofing solutions for Costa Mesa homes with weather-resistant materials.',
    longDescription: `Costa Mesa's proximity to the coast means homes face unique challenges from salt air and marine layer moisture. S NEW ROOF understands these coastal conditions and provides roofing solutions specifically designed to withstand them.

Our Costa Mesa roofing services include using corrosion-resistant materials and proper ventilation systems that protect your home from coastal moisture damage. Whether you're near South Coast Plaza or in the Eastside neighborhood, we're your local roofing experts.

We've helped many Costa Mesa homeowners extend the life of their roofs through proper maintenance and timely repairs. Trust S NEW ROOF to protect your coastal home with roofing solutions built to last.`,
    services: ['Roof Repair', 'Roof Replacement', 'Coastal Roofing', 'Roof Inspection', 'Gutter Installation', 'Ventilation Systems'],
    zipCodes: ['92626', '92627', '92628', '92629', '92630'],
    highlights: [
      'Coastal roofing specialists',
      'Corrosion-resistant materials',
      'Moisture damage prevention',
      'South Coast Metro area service',
      'Commercial roofing available',
      'Multi-family roofing experts',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'newport-beach',
    name: 'Newport Beach',
    county: 'Orange County',
    description: 'Luxury roofing services in Newport Beach, CA. Premium roof solutions for Newport Beach coastal homes and waterfront properties.',
    longDescription: `Newport Beach homes deserve premium roofing services, and S NEW ROOF delivers excellence for this prestigious coastal community. From bayfront properties to hillside estates, we understand the high standards Newport Beach homeowners expect.

Our team specializes in luxury roofing materials and custom installations that complement the architectural beauty of Newport Beach homes. We work with premium tiles, high-end shingles, and specialized coatings designed for coastal environments.

Waterfront properties require special attention to waterproofing and drainage. Our expertise in these areas ensures your Newport Beach home remains protected from both rain and the unique challenges of coastal living.`,
    services: ['Roof Repair', 'Roof Replacement', 'Luxury Roofing', 'Roof Inspection', 'Waterproofing', 'Coastal Systems'],
    zipCodes: ['92658', '92659', '92660', '92661', '92662', '92663'],
    highlights: [
      'Luxury roofing specialists',
      'Waterfront property expertise',
      'Premium material options',
      'Custom design solutions',
      'Discrete service available',
      'Concierge-level support',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'huntington-beach',
    name: 'Huntington Beach',
    county: 'Orange County',
    description: 'Coastal roofing services in Huntington Beach, CA. Weather-resistant roofing for Surf City homes with oceanfront expertise.',
    longDescription: `Huntington Beach, known as Surf City USA, presents unique roofing challenges with its coastal location. S NEW ROOF provides specialized roofing services designed to withstand the salt air, ocean breezes, and sunny climate that define this iconic beach community.

Our Huntington Beach roofing services focus on using materials and techniques proven to perform in coastal environments. From beachside bungalows to inland estates, we've protected hundreds of Huntington Beach homes with quality roofing solutions.

Whether you need repairs from wind damage or a complete roof replacement, trust S NEW ROOF to deliver results that stand up to Huntington Beach's coastal conditions while maintaining your home's curb appeal.`,
    services: ['Roof Repair', 'Roof Replacement', 'Wind Damage Repair', 'Roof Inspection', 'Coastal Roofing', 'Deck Coatings'],
    zipCodes: ['92605', '92615', '92646', '92647', '92648', '92649'],
    highlights: [
      'Oceanfront property experts',
      'Wind damage specialists',
      'Salt air resistant materials',
      'Beach community experience',
      'Quick emergency response',
      'Deck and balcony coatings',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'tustin',
    name: 'Tustin',
    county: 'Orange County',
    description: 'Professional roofing services in Tustin, CA. Quality roof repair and installation for Tustin homes at fair prices.',
    longDescription: `Tustin homeowners have trusted S NEW ROOF for reliable roofing services for years. This charming Orange County city features a mix of established neighborhoods and newer developments, and we have experience working with the diverse roofing styles found throughout Tustin.

From Old Town Tustin to Tustin Ranch, our team understands the specific needs of local homeowners. We provide comprehensive roofing services that protect your investment and enhance your home's value.

Our commitment to quality craftsmanship and honest service has made us a preferred roofing contractor in Tustin. We treat every project with the attention to detail your home deserves.`,
    services: ['Roof Repair', 'Roof Replacement', 'Roof Inspection', 'Gutter Services', 'Tile Roofing', 'Shingle Roofing'],
    zipCodes: ['92780', '92781', '92782'],
    highlights: [
      'Old Town Tustin specialists',
      'Tustin Ranch experience',
      'Competitive pricing',
      'Fast project completion',
      'Clean job site guarantee',
      'Flexible financing options',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'orange',
    name: 'Orange',
    county: 'Orange County',
    description: 'Expert roofing services in Orange, CA. Professional roof solutions for Orange homes including historic Old Towne properties.',
    longDescription: `The City of Orange combines historic charm with modern living, and S NEW ROOF provides roofing services that respect both. From the historic homes in Old Towne Orange to the newer developments in Orange Park Acres, we deliver roofing solutions tailored to your property.

Old Towne Orange's historic district requires special care and attention to maintain architectural integrity. Our team has experience working with historic homes, ensuring that repairs and replacements complement your home's character while providing modern protection.

For all Orange homeowners, we offer comprehensive roofing services backed by quality materials and expert installation. Trust S NEW ROOF to protect your Orange home with results you can count on.`,
    services: ['Roof Repair', 'Roof Replacement', 'Historic Restoration', 'Roof Inspection', 'Tile Roofing', 'Chimney Flashing'],
    zipCodes: ['92856', '92857', '92859', '92862', '92863', '92864', '92865', '92866', '92867', '92868'],
    highlights: [
      'Old Towne Orange specialists',
      'Historic preservation expertise',
      'Architectural review compliant',
      'Chimney and flashing work',
      'Orange Park Acres service',
      'Detailed project documentation',
    ],
    image: '/hero-bg.png',
  },
  {
    slug: 'westminster',
    name: 'Westminster',
    county: 'Orange County',
    description: 'Reliable roofing services in Westminster, CA. Affordable roof repair and replacement for Westminster homes and businesses.',
    longDescription: `S NEW ROOF is proud to serve Westminster homeowners with quality roofing services at competitive prices. This diverse Orange County community includes a range of home styles, from mid-century houses to newer constructions, and we have experience with all of them.

Our Westminster roofing team provides thorough inspections, honest assessments, and quality workmanship. We understand that your home is a significant investment, and we're committed to helping you protect it with reliable roofing solutions.

Whether you need emergency repairs after a storm or are planning a roof replacement, S NEW ROOF delivers results Westminster homeowners can trust. Our local reputation is built on satisfied customers throughout the city.`,
    services: ['Roof Repair', 'Roof Replacement', 'Emergency Services', 'Roof Inspection', 'Flat Roof Systems', 'Gutter Installation'],
    zipCodes: ['92683', '92684', '92685'],
    highlights: [
      'Affordable Westminster pricing',
      'Vietnamese-speaking staff available',
      'Multi-unit discounts',
      'Senior citizen discounts',
      'Same-week appointments',
      'Extended warranty options',
    ],
    image: '/hero-bg.png',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((location) => location.slug);
}
