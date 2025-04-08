import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ControlPanel from './components/ControlPanel';
import CatImage from './components/CatImage';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const App: React.FC = () => {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCat = useCallback(async () => {
    if (!enabled) return;
    
    setLoading(true);
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Error fetching cat image:', error);
    } finally {
      setLoading(false);
    }
  }, [enabled]);

  useEffect(() => {
    if (autoRefresh && enabled) {
      const interval = setInterval(fetchCat, 5000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh, enabled, fetchCat]);

  return (
    <AppContainer>
      <ControlPanel
        enabled={enabled}
        autoRefresh={autoRefresh}
        onEnabledChange={setEnabled}
        onAutoRefreshChange={setAutoRefresh}
        onGetCat={fetchCat}
        disabled={loading}
      />
      <CatImage imageUrl={imageUrl} />
    </AppContainer>
  );
};

export default App;
