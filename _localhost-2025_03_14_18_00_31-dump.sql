-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: recipe_nest
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cuisines`
--

DROP TABLE IF EXISTS `cuisines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuisines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuisines`
--

LOCK TABLES `cuisines` WRITE;
/*!40000 ALTER TABLE `cuisines` DISABLE KEYS */;
INSERT INTO `cuisines` VALUES (1,'Nepali',NULL,1,'2025-03-14 11:56:13',NULL);
/*!40000 ALTER TABLE `cuisines` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorites` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` enum('0','1','2','3','4','5','6','7','8','9','10') DEFAULT '0',
  `recipe_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `is_favourite` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `fk_favourites_recipes_id` (`recipe_id`),
  CONSTRAINT `fk_favourites_recipes_id` FOREIGN KEY (`recipe_id`) REFERENCES `recipes` (`id`),
  CONSTRAINT `fk_favourites_users_id` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
INSERT INTO `favorites` VALUES (1,'1',1,2,1,'2025-03-14 11:56:47','2025-03-14 12:11:21',0),(4,'3',1,3,1,'2025-03-14 11:56:47','2025-03-14 12:11:21',0),(5,'4',1,4,1,'2025-03-14 11:56:47','2025-03-14 12:11:21',0),(6,'0',1,5,1,'2025-03-14 11:56:47','2025-03-14 12:11:25',0),(7,'2',1,6,1,'2025-03-14 11:56:47','2025-03-14 12:11:21',0),(8,'10',1,7,1,'2025-03-14 11:56:47','2025-03-14 12:11:21',0);
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `recipe` text NOT NULL,
  `ingredients` text NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `recipe_by` int DEFAULT NULL,
  `cuisine` int DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_recipes_cuisine_id` FOREIGN KEY (`id`) REFERENCES `cuisines` (`id`),
  CONSTRAINT `fk_recipes_users_id` FOREIGN KEY (`id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,NULL,'Momo',NULL,'Steam gara','Masu',1,2,1,'2025-03-14 11:56:22',NULL);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','2025-03-14 11:54:43',NULL,1),(2,'CHEF','2025-03-14 11:54:43',NULL,1),(3,'FOOD_LOVER','2025-03-14 11:54:43',NULL,1);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `image_url` varchar(255) DEFAULT 'https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',
  `about` text,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_date` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `fk_users_role_id` (`role_id`),
  CONSTRAINT `fk_users_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ram','Karki','9808546858','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ram@mail.cocm','12345',3,'2025-03-14 11:54:54',NULL,1),(2,'Shriyan','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'rab@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(3,'Biryan','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra1b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(4,'Ream','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra2b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(5,'Driyam','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra3b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(6,'Raman','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra4b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(7,'Pritam','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra5b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1),(8,'Chritam','Sarki','9808546859','https://gravatar.com/avatar/3ddc49ac922e89726a2ceb70b3d45564?s=400&d=robohash&r=x',NULL,'ra6b@mail.cocm','12345',3,'2025-03-14 11:54:54','2025-03-14 12:05:49',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-14 18:00:31
