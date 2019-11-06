CREATE DATABASE Cleveland;

USE Cleveland;

CREATE TABLE Especialidades(
	EspecialidadeID INT PRIMARY KEY IDENTITY NOT NULL,
	Nome VARCHAR(255) NOT NULL
);

CREATE TABLE Medicos(
	MedicosID	INT PRIMARY KEY IDENTITY NOT NULL,
	Nome VARCHAR(255) NOT NULL,
	DataNascimento DATE NOT NULL,
	CRM INT NOT NULL UNIQUE,
	EspecialidadeID INT FOREIGN KEY REFERENCES Especialidades(EspecialidadeID)
);


INSERT INTO Especialidades VALUES (
	'Ginecologia'),( 'Obstetrícia'),( 
	'Clínico Geral'),( 'Pediatria');

INSERT INTO Medicos (
	Nome, DataNascimento, CRM, EspecialidadeID
)VALUES(
	'Tadeu Vitelli', '1990-12-12', '12345', 3
),(
	'Catarina Strada', '1991-02-02', '12354', 2
);
	
SELECT * FROM Medicos M
JOIN Especialidades E
ON M.EspecialidadeID = E.EspecialidadeID



