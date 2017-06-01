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
@Table(name="employee")
public class Employee {
    @Id
    @GeneratedValue
    private Long emploeeId;

    private String name;
    private String position;
    private String tel;
    private String email;
    private Date birthday;
    private String hometown;
    private Date checkindate;
    private String address;
}
