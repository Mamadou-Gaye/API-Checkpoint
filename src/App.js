import React from 'react';
import './App.css'; // Importer le fichier CSS si nécessaire
import UserList from './UserList'; // Importer le composant UserList

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Application de gestion des utilisateurs</h1>
      </header>
      <main>
        {/* Inclure le composant UserList */}
        <UserList />
      </main>
    </div>
  );
}

export default App;