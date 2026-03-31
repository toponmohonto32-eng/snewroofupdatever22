import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationBySlug, getAllLocationSlugs, locations } from '@/lib/locations';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import client components
const LocationClient = dynamic(() => import('./LocationClient'), { ssr: true });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `Roofing Services in ${location.name}, CA | S NEW ROOF`,
    description: location.description,
    keywords: [
      'roofing',
      location.name,
      'roof repair',
      'roof replacement',
      'roofing contractor',
      'S NEW ROOF',
      location.county,
      ...location.services,
    ],
    openGraph: {
      title: `Roofing Services in ${location.name} | S NEW ROOF`,
      description: location.description,
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Get other locations for navigation
  const otherLocations = locations
    .filter((l) => l.slug !== slug)
    .slice(0, 6);

  return <LocationClient location={location} otherLocations={otherLocations} />;
}
