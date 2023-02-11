import React, { Component, useState } from 'react';
import './styles/App.css';
import Educational from './components/Educational';
import Information from './components/Information';
import Practical from './components/Practical';

const App = () => {
  const [inEditMode, setInEditMode] = useState('false');
  const [inEditDataMode, setInEditDataMode] = useState(null);
  const [info, setInfo] = useState({
    city: { data: '', name: 'City' },
    country: { data: 'Germany', name: 'Country' },
    email: { data: '', name: 'E-Mail' },
    website: { data: '', name: 'Website' },
  });

  const toggleChangeEditMode = () => {
    if (inEditDataMode !== null) {
      return;
    } else {
      setInEditMode(!inEditMode);
    }
  };

  const onEditDataMode = (dataField) => {
    setInEditDataMode(dataField);
  };

  const offEditDataMode = () => {
    setInEditDataMode(null);
  };

  const getEditDataMode = () => {
    return inEditDataMode;
  };

  const editDataMode = {
    on: onEditDataMode,
    off: offEditDataMode,
    get: getEditDataMode,
  };

  const changeInfos = (fieldName, value) => {
    const updateInfo = {...info};
    updateInfo[fieldName].data = value;
    setInfo(updateInfo);
  };

  return (
    <div className="App">
      <Information
        info={info}
        inEditMode={inEditMode}
        editDataMode={editDataMode}
        changeInfos={changeInfos}
      />
      <Educational />
      <Practical />
      <button className="edit-btn" onClick={toggleChangeEditMode}>
        EDIT
      </button>
    </div>
  );
};

export default App;
