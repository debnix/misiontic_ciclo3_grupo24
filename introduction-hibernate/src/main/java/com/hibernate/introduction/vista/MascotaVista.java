package com.hibernate.introduction.vista;

import javax.swing.JOptionPane;

import com.hibernate.introduction.controlador.MascotaControlador;

public class MascotaVista {

  private MascotaControlador controlador;

  public MascotaVista() {
    controlador = new MascotaControlador();
  }

  public void crearMascota() {
    // Solicitar datos
    String nombre = JOptionPane.showInputDialog(null, "Ingrese nombre de la mascota: ");
    String apellido = JOptionPane.showInputDialog(null, "Ingrese apellido del propietario: ");
    String tipoMascota = JOptionPane.showInputDialog(null, "Ingrese el tipo de mascota :");
    String raza = JOptionPane.showInputDialog(null, "Raza: ");
    int edad = Integer.parseInt(JOptionPane.showInputDialog(null, "Edad de la mascota:"));
    String observacion = JOptionPane.showInputDialog(null, "Observación");

    // Enviar datos al controlador
    try {
      controlador.create(nombre, apellido, tipoMascota, raza, edad, observacion);
      JOptionPane.showMessageDialog(null, "Mascota registrada con éxito");
    } catch (Exception e) {
      e.printStackTrace();
      JOptionPane.showMessageDialog(null, "Por favor intente mas tarde");
    }

  }

}
