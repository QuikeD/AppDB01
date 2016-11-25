package Base;

import java.sql.*;
/**
 *
 * @author Bego
 */
public class TestConexion {

    public static void main(String[] args) {

        GestionBD bd = new GestionBD();
        bd.conectar();
        ResultSet rs = bd.consultar("select employee_id, first_name, "
                + "hire_date from employees");
        try {
            while(rs.next())
            {
                    System.out.println (rs.getInt (1) + " " + rs.getString (2)
                            + " " + rs.getDate(3)); 
            }
        } catch (SQLException ex) {
            System.out.println("excepcion>" + ex);
        }
    }
}
