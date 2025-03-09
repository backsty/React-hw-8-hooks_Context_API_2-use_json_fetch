import React from 'react';
import DataComponent from './components/DataComponent';
import ErrorComponent from './components/ErrorComponent';
import LoadingComponent from './components/LoadingComponent';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>useJsonFetch Hook Demo</h1>
      <div className="components-container">
        <DataComponent />
        <ErrorComponent />
        <LoadingComponent />
      </div>
    </div>
  );
};

export default App;
