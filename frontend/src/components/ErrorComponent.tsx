import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import '../styles/components/ErrorComponent.css';

interface ErrorResponse {
  status: string;
}

const ErrorComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<ErrorResponse>('http://localhost:7070/error');

  return (
    <div className="error-component">
      <h2>Error Component</h2>
      {loading && <div className="loading-indicator">Loading...</div>}
      {error && <div className="error-message">Error received as expected: {error.message}</div>}
      {data && <div className="data-success">Status: {data.status}</div>}
    </div>
  );
};

export default ErrorComponent;
