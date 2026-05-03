import { useState, useEffect } from 'react';

const CACHE_KEY = 'bs_region_v4';
const GEO_API_URL = '/api/geo';

export type Region = 'intl' | 'ng';

export const useGeoPricing = () => {
  const [region, setRegion] = useState<Region>('intl'); // default to international
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Check Session Storage first
    try {
      const cached = sessionStorage.getItem(CACHE_KEY) as Region;
      if (cached === 'intl' || cached === 'ng') {
        setRegion(cached);
        setIsLoading(false);
        return;
      }
    } catch (e) {
      // Ignore private mode errors
    }

    // 2. If not cached, fetch from /api/geo
    const fetchGeo = async () => {
      try {
        const res = await fetch(GEO_API_URL);
        if (res.ok) {
          const data = await res.json();
          const newRegion = data.countryCode === 'NG' ? 'ng' : 'intl';
          setRegion(newRegion);
          try { sessionStorage.setItem(CACHE_KEY, newRegion); } catch (e) {}
        }
      } catch (err) {
        console.error('Geo fetch failed, defaulting to intl', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeo();
  }, []);

  const toggleRegion = (newRegion: Region) => {
    setRegion(newRegion);
    try {
      sessionStorage.setItem(CACHE_KEY, newRegion);
    } catch (e) {}
  };

  return { region, toggleRegion, isLoading };
};
