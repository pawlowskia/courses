import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageContentHeader } from '@/components/UI/PageContentHeader';

export const metadata: Metadata = {
  title: 'Search results',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (!searchParams.query) {
    return notFound();
  }

  return <PageContentHeader title={`Search results for "${searchParams.query as string}"`} />;
}
