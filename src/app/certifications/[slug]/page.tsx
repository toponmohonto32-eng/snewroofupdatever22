import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { certifications, getCertificationBySlug, getAllCertificationSlugs } from '@/lib/certifications';
import CertificationClient from './CertificationClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCertificationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const certification = getCertificationBySlug(slug);

  if (!certification) {
    return {
      title: 'Certification Not Found',
    };
  }

  return {
    title: `${certification.fullName} | S NEW ROOF`,
    description: certification.description,
    openGraph: {
      title: `${certification.fullName} | S NEW ROOF`,
      description: certification.description,
      type: 'website',
    },
  };
}

export default async function CertificationPage({ params }: PageProps) {
  const { slug } = await params;
  const certification = getCertificationBySlug(slug);

  if (!certification) {
    notFound();
  }

  const otherCertifications = certifications.filter((c) => c.slug !== slug);

  return (
    <CertificationClient
      certification={certification}
      otherCertifications={otherCertifications}
    />
  );
}
