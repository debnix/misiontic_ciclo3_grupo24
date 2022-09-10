package com.hibernate.introduction.vista;

import java.util.List;

import javax.swing.JOptionPane;

import com.hibernate.introduction.controlador.MascotaControlador;

public class MascotaVista {

  private MascotaControlador controlador;

  public MascotaVista() {
    controlador = new MascotaControlador();
  }

  public void mostrarMensaje(String mensaje) {
    JOptionPane.showMessageDialog(null, mensaje);
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
      mostrarMensaje("Mascota registrada con éxito");
    } catch (Exception e) {
      e.printStackTrace();
      mostrarMensaje("Por favor intente mas tarde");
    }
  }

  public void consultarMascotaXid() {
    int id = Integer.parseInt(JOptionPane.showInputDialog(null, "Por favor ingrese el identificador de la mascota"));
    try {
      String info = controlador.readById(id);
      mostrarMensaje(info);
    } catch (Exception e) {
      e.printStackTrace();
      mostrarMensaje("Por favor intete mas tarde");
    }
  }

  public void consultarMascotasXapellido() {
    String apellido = JOptionPane.showInputDialog(null, "Por favor ingrese el apellido");
    try {
      List<String> mascotas = controlador.getByLastname(apellido);
      String info = listToString(mascotas);
      mostrarMensaje(info);
    } catch (Exception e) {
      e.printStackTrace();
      mostrarMensaje("Por favor intete mas tarde");
    }
  }

  public String listToString(List<String> list) {
    String info = "------------MASCOTAS----------";
    for (int i = 0; i < list.size(); i++) {
      info += list.get(i);
    }
    return info;
  }

  public void listarMascotas() {
    try {
      List<String> mascotas = controlador.getList();
      String info = listToString(mascotas);
      mostrarMensaje(info);
    } catch (Exception e) {
      e.printStackTrace();
      mostrarMensaje("Por favor intete mas tarde");
    }
  }

  public void actualizarMascota() {
    int id = Integer.parseInt(JOptionPane.showInputDialog(null, "Por favor ingrese el identificador de la mascota"));
    String nombre = JOptionPane.showInputDialog(null, "Ingrese nombre de la mascota: ");
    String apellido = JOptionPane.showInputDialog(null, "Ingrese apellido del propietario: ");
    String tipoMascota = JOptionPane.showInputDialog(null, "Ingrese el tipo de mascota :");
    String raza = JOptionPane.showInputDialog(null, "Raza: ");
    int edad = Integer.parseInt(JOptionPane.showInputDialog(null, "Edad de la mascota:"));
    String observacion = JOptionPane.showInputDialog(null, "Observación");
    try {
      controlador.update(id, nombre, apellido, tipoMascota, raza, edad, observacion);
    } catch (Exception e) {
      // TODO: handle exception
    }
  }

  public void menu() {
    String info = "1) Registrar mascota\n";
    info += "2) Consultar mascota por id\n";
    info += "3) Consultar mascotas por apellidos\n";
    info += "4) Actualizar info mascota\n";
    info += "5) Eliminar mascota\n";
    info += "6) Listar mascotas\n";
    info += "-1) Salir\n";

    int opc = 0;
    while (opc != -1) {
      opc = Integer.parseInt(JOptionPane.showInputDialog(null, info));
      switch (opc) {
        case 1:
          crearMascota();
          break;
        case 2:
          consultarMascotaXid();
          break;
        case 3:
          consultarMascotasXapellido();
          break;
        case 4:
          break;
        case 5:
          break;
        case 6:
          listarMascotas();
          break;
        case -1:
          break;
        default:
          mostrarMensaje("Por favor ingrese una opción válida");
          break;
      }
    }
  }

}
