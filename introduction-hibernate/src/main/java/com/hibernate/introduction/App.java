package com.hibernate.introduction;

import java.util.List;

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

            /******* Create ********/
            /*
             * Mascota mascota = new Mascota("Lucas", "Coronel", "Perro", "Chandinez", 2,
             * "Agresivo");
             * session.persist(mascota);
             * session.getTransaction().commit();
             */

            /****** Read ********/
            // Mascota mascota = session.find(Mascota.class, 1);
            // System.out.println(mascota);
            // Mascota mascota = session.byId(Mascota.class).load(3);
            // System.out.println(mascota);
            /*
             * List<Mascota> mascotas = session.createQuery("from Mascota",
             * Mascota.class).list();
             * for (int i = 0; i < mascotas.size(); i++) {
             * System.out.println(mascotas.get(i));
             * }
             */

            /******* Update ********/
            // Obtener un registro
            Mascota mascota = session.find(Mascota.class, 3);
            mascota.setRaza("Dalmata");
            mascota.setEdad(8);
            mascota.setObservacion("No tiene vacunas");
            // Guardar cambios
            session.merge(mascota);
            session.getTransaction().commit();

        } catch (Exception e) {
            e.printStackTrace();
        }

        // Cerrar sesión
        session.close();
    }
}
