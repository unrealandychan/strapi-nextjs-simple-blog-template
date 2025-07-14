import { useQuery } from '@apollo/client';
import { GET_GLOBAL_DATA } from '@/lib/queries/global';
import { GlobalResponse } from '@/lib/types/global';

export function useGlobalData() {
  const { data, loading, error } = useQuery<GlobalResponse>(GET_GLOBAL_DATA, {
    // Cache the result for 5 minutes to avoid unnecessary requests
    fetchPolicy: 'cache-first',
    errorPolicy: 'ignore', // Changed from 'all' to 'ignore' to match client config
    notifyOnNetworkStatusChange: false, // Prevent unnecessary re-renders
  });


  const globalData = data?.global;

  return {
    // Site basic info
    siteName: globalData?.siteName,
    siteDescription: globalData?.siteDescription,

    // Favicon data
    favicon: globalData?.favicon,
    faviconUrl: globalData?.favicon?.url,

    // SEO data
    defaultSeo: globalData?.defaultSeo,
    metaTitle: globalData?.defaultSeo?.metaTitle,
    metaDescription: globalData?.defaultSeo?.metaDescription,
    metaImage: globalData?.defaultSeo?.shareImage,
    metaImageUrl: globalData?.defaultSeo?.shareImage?.url,

    // Query state
    loading,
    error,
    data: globalData,
  };
}
