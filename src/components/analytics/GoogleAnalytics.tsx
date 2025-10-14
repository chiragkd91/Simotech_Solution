import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics configuration
const GA_TRACKING_ID = import.meta.env.VITE_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (GA_TRACKING_ID && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track conversions
export const trackConversion = (conversionId: string, conversionLabel: string) => {
  if (GA_TRACKING_ID && typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
    });
  }
};

// Track lead generation
export const trackLeadGeneration = (leadType: string, value?: number) => {
  trackEvent('generate_lead', 'engagement', leadType, value);
};

// Track ROI calculator usage
export const trackROICalculator = (fleetSize: number, savings: number) => {
  trackEvent('roi_calculator_used', 'engagement', `fleet_size_${fleetSize}`, savings);
};

// Track demo requests
export const trackDemoRequest = (source: string) => {
  trackEvent('request_demo', 'engagement', source);
};

// Track pricing page views
export const trackPricingView = (plan: string) => {
  trackEvent('view_pricing', 'engagement', plan);
};

// Track contact form submissions
export const trackContactForm = (formType: string) => {
  trackEvent('contact_form_submit', 'engagement', formType);
};

// Google Analytics component
export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, { anonymize_ip: true });

    // Track initial page view
    trackPageView(location.pathname);
  }, []);

  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    // Track page views on route changes
    trackPageView(location.pathname);
  }, [location]);

  return null;
}

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
