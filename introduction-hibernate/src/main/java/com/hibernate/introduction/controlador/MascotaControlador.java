package com.hibernate.introduction.controlador;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.hibernate.introduction.modelo.Mascota;

public class MascotaControlador {

  // ATRIBUTOS
  SessionFactory factory;

  public MascotaControlador() {
    // Crear objeto fabricante de sesiones
    factory = new Configuration()
        .configure("cfg.xml")
        .addAnnotatedClass(Mascota.class)
        .buildSessionFactory();
  }

  public void create(String nombre, String apellido, String tipo_mascota, String raza, int edad, String observacion)
      throws Exception {
    Session session = factory.openSession();
    session.beginTransaction();
    Mascota mascota = new Mascota(nombre, apellido, tipo_mascota, raza, edad, observacion);
    session.persist(mascota);
    session.getTransaction().commit();
    session.close();
  }

}
