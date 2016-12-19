SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema myDataBase
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `myDataBase` ;

-- -----------------------------------------------------
-- Schema myDataBase
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `myDataBase` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `myDataBase` ; 

-- -----------------------------------------------------
-- Table `mydb`.`ccn_etablissement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ccn_etablissement` ;

CREATE TABLE IF NOT EXISTS `mydb`.`ccn_etablissement` (
  `eta_no` INT NOT NULL,
  `eta_nom` VARCHAR(100) NULL,
  `eta_rue` VARCHAR(100) NULL,
  `eta_telReservation` VARCHAR(20) NULL,
  `eta_telDirection` VARCHAR(20) NULL,
  `eta_email` VARCHAR(100) NULL,
  `eta_siteWeb` VARCHAR(100) NULL,
  `eta_descriptionAdresse` VARCHAR(100) NULL,
  `eta_codePostal` INT NULL,
  `eta_localite` VARCHAR(100) NULL,
  `eta_nbHeure` INT NULL,
  PRIMARY KEY (`eta_no`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`ccn_departement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`ccn_departement` ;

CREATE TABLE IF NOT EXISTS `mydb`.`ccn_departement` (
  `dep_no` INT NOT NULL,
  `dep_nom` VARCHAR(45) NULL,
  `fk_eta_no` INT NOT NULL,
  PRIMARY KEY (`dep_no`, `fk_eta_no`),
  INDEX `fk_Departement_Etablissement1_idx` (`fk_eta_no` ASC),
  CONSTRAINT `fk_Departement_Etablissement1`
    FOREIGN KEY (`fk_eta_no`)
    REFERENCES `mydb`.`ccn_etablissement` (`eta_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `myDataBase`.`ccn_personne`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `myDataBase`.`ccn_personne` ;

CREATE TABLE IF NOT EXISTS `myDataBase`.`ccn_personne` (
  `per_id` INT NOT NULL AUTO_INCREMENT,
  `per_nom` VARCHAR(100) NULL,
  `per_prenom` VARCHAR(100) NULL,
  `per_mail` VARCHAR(150) NULL,
  `per_mdp` VARCHAR(128) NULL,
  `per_token` VARCHAR(128) NULL,
  `per_dateNaissance` DATE NULL,
  `per_adresse` VARCHAR(100) NULL,
  `per_InfoSuppAdresse` VARCHAR(100) NULL,
  `per_codePostal` INT NULL,
  `per_ville` VARCHAR(100) NULL,
  `per_admin` VARCHAR(45) NULL,
  `per_telFixe` VARCHAR(20) NULL,
  `per_telMobile` VARCHAR(20) NULL,
  `Departement_no` INT NOT NULL,
  PRIMARY KEY (`per_id`, `Departement_no`),
  INDEX `fk_Personne_Departement1_idx` (`Departement_no` ASC),
  CONSTRAINT `fk_Personne_Departement1`
    FOREIGN KEY (`Departement_no`)
    REFERENCES `myDataBase`.`ccn_departement` (`dep_no`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;