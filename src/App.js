import React from 'react';
import DisplayName from './Components/Name/DisplayName';
// import context provider
import { ShowDataProvider } from './Context/ShowData.context';

function App() {
  return (
    <ShowDataProvider>
      <div>
        <DisplayName></DisplayName>
      </div>
    </ShowDataProvider>
  );
}

export default App;
