import { fetchAPI } from './strapi';
import type { 
  StrapiResponse, 
  Page, 
  Global, 
  ServiceTheme,
  HeroSlide,
  ServiceFeature 
} from '../types/strapi';

/**
 * Get all hero slides
 */
export async function getHeroSlides(locale = 'fr'): Promise<HeroSlide[]> {
  const response = await fetchAPI<StrapiResponse<HeroSlide[]>>({
    path: '/hero-slides',
    urlParams: {
      locale,
      populate: 'deep',
    },
  });
  return response?.data || [];
}

/**
 * Get all service features
 */
export async function getServiceFeatures(locale = 'fr'): Promise<ServiceFeature[]> {
  const response = await fetchAPI<StrapiResponse<ServiceFeature[]>>({
    path: '/service-features',
    urlParams: {
      locale,
      populate: '*',
    },
  });
  return response?.data || [];
}

/**
 * Get all services with themes
 */
export async function getAllServices(locale = 'fr'): Promise<ServiceTheme[]> {
  const response = await fetchAPI<StrapiResponse<ServiceTheme[]>>({
    path: '/themes',
    urlParams: {
      locale,
      populate: 'deep',
    },
  });
  return response?.data || [];
}

/**
 * Get page by slug
 */
export async function getPage(slug: string, locale = 'fr'): Promise<Page | null> {
  const response = await fetchAPI<StrapiResponse<Page>>({
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
  return response?.data?.[0] || null;
}

/**
 * Get global site data
 */
export async function getGlobal(locale = 'fr'): Promise<Global | null> {
  const response = await fetchAPI<StrapiResponse<Global>>({
    path: '/global',
    urlParams: {
      locale,
      populate: 'deep',
    },
  });
  return response?.data || null;
}