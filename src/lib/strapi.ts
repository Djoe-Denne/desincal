import qs from 'qs';

const STRAPI_URL = import.meta.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.STRAPI_TOKEN;

interface FetchOptions {
  path: string;
  urlParams?: Record<string, string>;
  options?: RequestInit;
}

/**
 * Fetch data from Strapi API with error handling
 */
export async function fetchAPI({ path, urlParams = {}, options = {} }: FetchOptions) {
  try {
    // Build request URL
    const queryString = qs.stringify(urlParams, {
      encodeValuesOnly: true,
    });
    const requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    // Merge default and custom headers
    const mergedOptions = {
      headers: {
        'Content-Type': 'application/json',
        ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      },
      ...options,
    };

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return null;
  }
}

/**
 * Get page data with all related content
 */
export async function getPageData(slug: string, locale = 'fr') {
  const data = await fetchAPI({
    path: '/pages',
    urlParams: {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      locale,
      populate: 'deep',
    },
  });
  return data?.data?.[0] || null;
}

/**
 * Get global site data (navigation, footer, etc.)
 */
export async function getGlobalData(locale = 'fr') {
  const data = await fetchAPI({
    path: '/global',
    urlParams: {
      locale,
      populate: 'deep',
    },
  });
  return data?.data || null;
}

/**
 * Get all services
 */
export async function getServices(locale = 'fr') {
  const data = await fetchAPI({
    path: '/services',
    urlParams: {
      locale,
      populate: 'deep',
    },
  });
  return data?.data || null;
}