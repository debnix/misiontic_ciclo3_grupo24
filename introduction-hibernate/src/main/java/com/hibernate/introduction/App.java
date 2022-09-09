package com.hibernate.introduction;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.hibernate.introduction.modelo.Mascota;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        // Crear objeto fabricante de sesiones
        SessionFactory factory = new Configuration()
                .configure("cfg.xml")
                .addAnnotatedClass(Mascota.class)
                .buildSessionFactory();

        // Abrir sesión
        Session session = factory.openSession();

        // Preparar la sesión para realizar transacciones
        session.beginTransaction();

        // Generar transacciones...
        try {
            // CRUD

            // Create
            Mascota mascota = new Mascota("Niño", "Quintero", "Perro", "Chandinez", 6, "Ninguna");
            session.persist(mascota);
            session.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        }

        // Cerrar sesión
        session.close();
    }
}
