# MonFormulaire React
MonFormulaire est une application React destinée à créer un formulaire d'inscription. Cette application utilise Redux Toolkit pour la gestion de l'état et React Hook Form pour la gestion des formulaires. Elle permet de collecter des informations utilisateur telles que le nom, le prénom, l'âge, l'email et le mot de passe, et de valider ces données avant de les stocker dans un store Redux.

## Technologies utilisées
React : Bibliothèque JavaScript pour construire des interfaces utilisateur interactives.
Redux Toolkit : Outils et meilleures pratiques pour la gestion de l'état avec Redux.
React Hook Form : Bibliothèque permettant une gestion efficace et performante des formulaires dans React.
React-Redux : Liaisons officielles entre React et Redux.
CSS : Pour le style et la présentation de l'application.

## Description des fonctions utilisées dans MonFormulaire.jsx
Le composant MonFormulaire.jsx est un composant clé de l'application, gérant le formulaire d'inscription, la validation des données et leur envoi au store Redux. Voici une description des principales fonctions et hooks utilisés dans ce fichier :

1. Importations
- React : Importé pour créer des composants React.
- useForm : Hook de react-hook-form pour gérer l'état et la validation du formulaire.
- useDispatch : Hook de react-redux pour dispatcher des actions vers le store Redux.
- setUserData : Action importée depuis le slice Redux userSlice pour mettre à jour les données utilisateur dans le store.
- MonFormulaire.css : Fichier CSS pour styliser le formulaire.

2. Fonction principale MonFormulaire
- useForm() : Initialise le hook react-hook-form et retourne plusieurs fonctions utiles :
- register : Enregistre un champ dans le formulaire pour la validation et la gestion d'état.
- handleSubmit : Gère la soumission du formulaire, déclenche la validation et appelle la fonction de soumission si la validation réussit.
- formState: { errors } : Objet contenant les erreurs de validation des champs.
- setError : Permet de définir manuellement des erreurs de validation pour les champs.
- reset : Réinitialise les valeurs du formulaire à leurs valeurs initiales.
- useDispatch() : Retourne la méthode dispatch pour envoyer des actions au store Redux.

3. Fonction onSubmit
- data : Objet contenant les valeurs des champs du formulaire.
- console.log(data) : Affiche les données du formulaire dans la console pour débogage.
- setError('age', { ... }) : Définit une erreur manuelle sur le champ age si l'utilisateur a moins de 18 ans.
- dispatch(setUserData(data)) : Envoie les données validées du formulaire au store Redux en utilisant l'action setUserData.

4. Fonction onReset
- reset() : Réinitialise le formulaire aux valeurs initiales, effaçant les entrées utilisateur et les erreurs de validation.

5. Rendu du formulaire
- form : Élément HTML du formulaire avec l'attribut onSubmit pour gérer la soumission via handleSubmit(onSubmit).
- div : Conteneurs pour chaque champ de formulaire.
- label : Étiquettes pour les champs de formulaire.
- input : Champs de formulaire avec différentes classes pour le style et l'attribut register pour la validation.
- errors : Affiche les messages d'erreur sous chaque champ si la validation échoue.
- button : Bouton pour réinitialiser le formulaire.

6. Export du composant
- export default MonFormulaire : Exporte le composant MonFormulaire pour qu'il puisse être utilisé dans d'autres parties de l'application.
