import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs, services } from '@/lib/services';
import dynamic from 'next/dynamic';

const ServiceClient = dynamic(() => import('./ServiceClient'), { ssr: true });

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} | S NEW ROOF - Orange County Roofing`,
    description: service.description,
    keywords: [
      service.name.toLowerCase(),
      'roofing',
      'roof repair',
      'Orange County',
      'S NEW ROOF',
      'roofing contractor',
      ...service.features.map((f) => f.toLowerCase()),
    ],
    openGraph: {
      title: `${service.name} | S NEW ROOF`,
      description: service.description,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  return <ServiceClient service={service} otherServices={otherServices} />;
}
