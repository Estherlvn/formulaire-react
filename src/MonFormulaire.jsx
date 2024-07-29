import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from './userSlice';
import './MonFormulaire.css';

function MonFormulaire() {
  // Utilisation de useForm pour gérer le formulaire
  const { register, handleSubmit, formState: { errors }, setError, reset } = useForm();
  const dispatch = useDispatch();

  // Fonction de soumission du formulaire
  const onSubmit = data => {
    console.log(data); // Affichage des données du formulaire dans la console

    // Contrôle de l'âge
    if (data.age <= 18) {
      setError('age', {
        type: 'manual',
        message: 'Vous devez avoir plus de 18 ans.'
      });
    } else {
      // Envoyer les données du formulaire au store Redux
      dispatch(setUserData(data));
    }
  };

  // Fonction pour réinitialiser le formulaire
  const onReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div>
        <label>Nom :</label>
        <input
          type="text"
          className="medium-input"
          {...register("lastName", { required: 'Ce champ est requis' })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      <div>
        <label>Prénom :</label>
        <input
          type="text"
          className="medium-input"
          {...register("firstName", { required: 'Ce champ est requis' })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      <div>
        <label>Âge :</label>
        <input
          type="number"
          className="short-input"
          {...register("age", { required: 'Ce champ est requis', valueAsNumber: true })}
        />
        {errors.age && <span>{errors.age.message}</span>}
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          className="long-input"
          {...register("email", { 
            required: 'Ce champ est requis', 
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Adresse email invalide'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <label>Mot de passe :</label>
        <input
          type="password"
          className="long-input"
          {...register("password", { required: 'Ce champ est requis' })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div>
        <input type="submit" value="S'inscrire" />
        <button type="button" onClick={onReset}>Réinitialiser</button>
      </div>
    </form>
  );
}

export default MonFormulaire;
