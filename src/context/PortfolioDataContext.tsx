import React, { createContext, useContext, useState, useEffect } from 'react';
import fallbackData from '../data/data.json';

export type PortfolioData = typeof fallbackData;

interface PortfolioContextType {
  data: PortfolioData;
  isLoading: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType>({
  data: fallbackData,
  isLoading: false,
  activePage: 'home',
  setActivePage: () => {},
});

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(fallbackData);
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState<string>('home');

  // Handle URL hash changes for clean, back-button-friendly navigation (e.g. #/about, #/projects, #/contact)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (['about', 'projects', 'experience', 'architecture', 'articles', 'contact'].includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamically fetch public/data.json in case user modified it at runtime or in repo
  useEffect(() => {
    let isMounted = true;
    fetch('./data.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data.json');
        return res.json();
      })
      .then((fetchedData: PortfolioData) => {
        if (isMounted && fetchedData && fetchedData.personal) {
          setData(fetchedData);
        }
      })
      .catch((err) => {
        console.info('Using bundled data.json fallback:', err.message);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isLoading,
        activePage,
        setActivePage: navigateTo,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioData = () => useContext(PortfolioContext);
