import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  // État pour stocker la liste des utilisateurs
  const [userList, setUserList] = useState([]);

  // Effet pour récupérer les données des utilisateurs depuis l'API
  useEffect(() => {
    // Fonction asynchrone pour effectuer la requête HTTP
    const fetchUsers = async () => {
      try {
        // Faire la requête HTTP à l'API JSONPlaceholder pour récupérer les utilisateurs
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // Mettre à jour l'état avec les données récupérées
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Appeler la fonction pour récupérer les utilisateurs
    fetchUsers();
  }, []); // Utiliser un tableau vide pour s'assurer que l'effet est exécuté une seule fois au montage

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;