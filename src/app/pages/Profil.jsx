import React from 'react';
import profileImage from "../../assets/profile.jpg";

const Profil = () => {
  const user = {
    pseudo: 'Boundia',
    questions: 5,
    reponses: 12,
    votes: 25
  };

  return (
    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Profil utilisateur
      </h1>

      <div className="bg-white shadow rounded-lg p-6 text-center">

        {/* Photo de profil ronde */}
        <img
          src={profileImage}
          alt="Profil"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mx-auto object-cover"
        />

        <h2 className="text-xl font-semibold mt-4">
          {user.pseudo}
        </h2>

        <div className="mt-4">
          <p>Questions : {user.questions}</p>
          <p>Réponses : {user.reponses}</p>
          <p>Votes : {user.votes}</p>
        </div>

      </div>

    </div>
  );
};

export default Profil;