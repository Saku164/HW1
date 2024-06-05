CREATE TABLE `STUDENTI` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(45) DEFAULT NULL,
  `Cognome` varchar(45) DEFAULT NULL,
  `CodiceFiscale` varchar(45) DEFAULT NULL,
  `DataNascita` varchar(10) DEFAULT NULL,
  `NomeUtente` varchar(45) DEFAULT NULL,
  `PSW` varchar(45) DEFAULT NULL,
  `Matricola` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `WebStudium`.`STUDENTI`
MODIFY COLUMN `NomeUtente` VARCHAR(45) NOT NULL;

ALTER TABLE `WebStudium`.`STUDENTI`
ADD UNIQUE INDEX `NomeUtente_UNIQUE` (`NomeUtente`); -- unique index serve a fare si che nella tabella studenti non ci siano 2 entry con lo stesso nome utente e anche per poter utilizzare nome
-- utente come chiave esterna.



CREATE TABLE APPUNTI (
   idAppunti int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
   contenuto varchar(10000) DEFAULT NULL,
   utente varchar(45) NOT NULL,
   FOREIGN KEY (utente) REFERENCES STUDENTI(NomeUtente) ON DELETE CASCADE ON UPDATE CASCADE
);






