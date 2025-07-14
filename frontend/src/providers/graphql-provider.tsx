'use client';

import { ApolloProvider } from '@apollo/client';
import { getApolloClient } from '@/lib/apollo-client';

interface GraphQLProviderProps {
  children: React.ReactNode;
}

export function GraphQLProvider({ children }: GraphQLProviderProps) {
  // Use the getter function to ensure proper client instantiation
  const client = getApolloClient();

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}
