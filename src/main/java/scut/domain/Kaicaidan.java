package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.swing.*;
import java.util.Date;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="kaicaidan")
public class Kaicaidan {
    @Id
    @GeneratedValue
    private Long kaicaidanId;

    private String serialnumber;
    private String client;
    private Date createdate;
    private String supervisorname;
    private Date deadline;
    private Boolean status;

    public Long getKaicaidanId() {
        return kaicaidanId;
    }

    public void setKaicaidanId(Long kaicaidanId) {
        this.kaicaidanId = kaicaidanId;
    }

    public String getSerialnumber() {
        return serialnumber;
    }

    public void setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public String getSupervisorname() {
        return supervisorname;
    }

    public void setSupervisorname(String supervisorname) {
        this.supervisorname = supervisorname;
    }

    public Date getDeadline() {
        return deadline;
    }

    public void setDeadline(Date deadline) {
        this.deadline = deadline;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
