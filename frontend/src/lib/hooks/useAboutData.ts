import { useQuery } from '@apollo/client';
import { GET_ABOUT_DATA } from '@/lib/queries/about';
import { AboutResponse } from '@/lib/types/about';

export function useAboutData() {
  const { data, loading, error } = useQuery<AboutResponse>(GET_ABOUT_DATA, {
    fetchPolicy: 'cache-first',
    errorPolicy: 'ignore',
    notifyOnNetworkStatusChange: false,
  });

  const aboutData = data?.about;

  return {
    title: aboutData?.title,
    blocks: aboutData?.blocks || [],
    loading,
    error,
    data: aboutData,
  };
}
