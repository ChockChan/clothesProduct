package scut.domain;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="supervisorauthority")
public class Supervisorauthority {
    @Id
    @GeneratedValue
    private Long supervisorauthorityId;

    private Long supervisorId;
    private String department;

    public Long getSupervisorauthorityId() {
        return supervisorauthorityId;
    }

    public void setSupervisorauthorityId(Long supervisorauthorityId) {
        this.supervisorauthorityId = supervisorauthorityId;
    }

    public Long getSupervisorId() {
        return supervisorId;
    }

    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
