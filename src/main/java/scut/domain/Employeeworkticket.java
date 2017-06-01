package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Time;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="employeeworkticket")
public class Employeeworkticket {
    @Id
    @GeneratedValue
    private Long employeeworkticketId;

    private Long employeeId;
    private Long workticketId;
    private Time time;
    private String supervisoname;

    public Long getEmployeeworkticketId() {
        return employeeworkticketId;
    }

    public void setEmployeeworkticketId(Long employeeworkticketId) {
        this.employeeworkticketId = employeeworkticketId;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public Long getWorkticketId() {
        return workticketId;
    }

    public void setWorkticketId(Long workticketId) {
        this.workticketId = workticketId;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getSupervisoname() {
        return supervisoname;
    }

    public void setSupervisoname(String supervisoname) {
        this.supervisoname = supervisoname;
    }
}
