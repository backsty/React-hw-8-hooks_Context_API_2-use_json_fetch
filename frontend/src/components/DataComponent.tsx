import React from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import '../styles/components/DataComponent.css';

interface DataResponse {
  status: string;
}

const DataComponent: React.FC = () => {
  const [data, loading, error] = useJsonFetch<DataResponse>('http://localhost:7070/data');

  return (
    <div className="data-component">
      <h2>Data Component</h2>
      {loading && <div className="loading-indicator">Loading...</div>}
      {error && <div className="error-message">Error: {error.message}</div>}
      {data && <div className="data-success">Status: {data.status}</div>}
    </div>
  );
};

export default DataComponent;
