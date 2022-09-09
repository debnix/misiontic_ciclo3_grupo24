
# Consultar BD
SHOW DATABASES;

# Crear base de datos
CREATE DATABASE utp_grupo_24;

# Conectar a base de datos
USE utp_grupo_24;

# Crear tabla
CREATE TABLE mascotas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(80) NOT NULL,
    tipo_mascota VARCHAR(30) NOT NULL,
    raza VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    observacion TEXT NOT NULL
);

# Mostrar tablas
SHOW TABLES;

DESCRIBE mascotas;