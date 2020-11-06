DROP SCHEMA IF EXISTS `restauranteweb` ;

-- -----------------------------------------------------
-- Schema restauranteweb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restauranteweb` DEFAULT CHARACTER SET utf8 ;
USE `restauranteweb` ;

-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users` ;

CREATE TABLE IF NOT EXISTS `users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `roles` ;

CREATE TABLE IF NOT EXISTS `roles` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_roles` ;

CREATE TABLE IF NOT EXISTS `user_roles` (
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `roleId` INT(11) NOT NULL,
  `userId` INT(11) NOT NULL,
  FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`),
  FOREIGN KEY (`userId`) REFERENCES `users`(`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `menu_rutas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `menu_rutas` ;

CREATE TABLE IF NOT EXISTS `menu_rutas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NOT NULL,
  `url` VARCHAR(255) NOT NULL,
  `tp` INT(11) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `temas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `temas` ;

CREATE TABLE IF NOT EXISTS `temas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `bebidas`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `bebidas` ;

CREATE TABLE IF NOT EXISTS `bebidas` (
  `idbebidas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  `precio` FLOAT NOT NULL,
  PRIMARY KEY (`idbebidas`))
ENGINE = InnoDB;


