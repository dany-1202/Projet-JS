-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 27 Décembre 2016 à 23:52
-- Version du serveur :  10.1.10-MariaDB
-- Version de PHP :  7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `pjs`
--

-- --------------------------------------------------------

--
-- Structure de la table `pjs_personne`
--

CREATE TABLE `pjs_personne` (
  `per_id` int(11) NOT NULL,
  `per_prenom` varchar(50) NOT NULL,
  `per_nom` varchar(50) NOT NULL,
  `per_salaire` int(11) NOT NULL,
  `per_nbHeure` int(11) NOT NULL,
  `per_age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `pjs_personne`
--

INSERT INTO `pjs_personne` (`per_id`, `per_prenom`, `per_nom`, `per_salaire`, `per_nbHeure`, `per_age`) VALUES
(1, 'vincent', 'jalley', 5000, 450, 22),
(2, 'dany', 'gomes', 125000, 350, 21),
(3, 'joel', 'marques', 80000, 780, 24),
(4, '9999', '11111', 11111, 11111, 11111);

--
-- Index pour les tables exportées
--

--
-- Index pour la table `pjs_personne`
--
ALTER TABLE `pjs_personne`
  ADD PRIMARY KEY (`per_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `pjs_personne`
--
ALTER TABLE `pjs_personne`
  MODIFY `per_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
