// Base Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiImage {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
    };
  };
}

// Component Types
export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: StrapiImage;
}

export interface ServiceFeature {
  id: number;
  title: string;
  description: string;
  details: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  price?: number;
  priceRange?: string;
  priceUnit?: string;
  features: string[];
  duration?: string;
  infoPage?: string;
}

export interface ServiceTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  services: Service[];
}

// Content Types
export interface Page {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description: string;
    content: Array<{
      __component: string;
      id: number;
      [key: string]: any;
    }>;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface Global {
  id: number;
  attributes: {
    siteName: string;
    defaultSeo: {
      metaTitle: string;
      metaDescription: string;
      keywords: string;
    };
    companyInfo: CompanyInfo;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}