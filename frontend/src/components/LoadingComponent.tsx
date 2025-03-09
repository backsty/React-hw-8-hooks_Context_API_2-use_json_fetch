import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import '../styles/components/LoadingComponent.css';

interface LoadingResponse {
  status: string;
}

const LoadingComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<LoadingResponse>('http://localhost:7070/loading');

  return (
    <div className="loading-component">
      <h2>Loading Component</h2>
      {loading && (
        <div className="loading-indicator">
          <div className="loading-spinner"></div>
          <span>Loading... (takes about 5 seconds)</span>
        </div>
      )}
      {error && <div className="error-message">Error: {error.message}</div>}
      {data && <div className="data-success">Status: {data.status}</div>}
    </div>
  );
};

export default LoadingComponent;
