package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="employeesalary")
public class EmployeeSalary {
    @Id
    @GeneratedValue
    private Long employeesalary;

    private int salary;
    private Date yearmonth;
}
