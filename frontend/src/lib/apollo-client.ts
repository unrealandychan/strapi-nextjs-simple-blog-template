import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { RetryLink } from '@apollo/client/link/retry';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_URL || 'http://localhost:1337/graphql',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Retry link with limited attempts to prevent infinite loops
const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 2, // Maximum 2 retry attempts
    retryIf: (error, _operation) => {
      // Only retry on network errors, not GraphQL errors
      return !!error && !error.result;
    },
  },
});

// Error handling link to prevent infinite loops
const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
    });
  }

  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    // Don't forward the request to prevent infinite loops
    return;
  }
});

// Create a function to create Apollo Client instances
function createApolloClient() {
  return new ApolloClient({
    link: from([errorLink, retryLink, authLink, httpLink]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Add any specific field policies if needed
          },
        },
      },
    }),
    connectToDevTools: process.env.NODE_ENV === 'development',
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'ignore',
        notifyOnNetworkStatusChange: false,
        fetchPolicy: 'cache-first',
      },
      query: {
        errorPolicy: 'ignore',
        fetchPolicy: 'cache-first',
      },
    },
    // Disable automatic query deduplication that can cause issues
    queryDeduplication: false,
    // Add assume immutable for better performance
    assumeImmutableResults: true,
  });
}

// Global variable to store the Apollo Client instance
let clientInstance: ApolloClient<any> | undefined;

// Function to get or create Apollo Client instance
export function getApolloClient() {
  // Create the Apollo Client once in the client
  if (!clientInstance || typeof window === 'undefined') {
    clientInstance = createApolloClient();
  }

  return clientInstance;
}

// Export the client instance for backwards compatibility
export const apolloClient = getApolloClient();
