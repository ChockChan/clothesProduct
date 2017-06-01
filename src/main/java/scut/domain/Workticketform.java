package scut.domain;

import org.junit.Test;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="workticketform")
public class Workticketform {
    @Id
    @GeneratedValue
    Long workticketformId;

    private String serialnumber;
    private Long caichuangdanid;
    private Long packofprodid;
    private Integer unit;
    private Integer processnum;
    private Integer nowquantity;
    private Integer remainsteps;
    private Long supervisorid;
    private Date createdate;

    public Long getWorkticketformId() {
        return workticketformId;
    }

    public void setWorkticketformId(Long workticketformId) {
        this.workticketformId = workticketformId;
    }

    public String getSerialnumber() {
        return serialnumber;
    }

    public void setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber;
    }

    public Long getCaichuangdanid() {
        return caichuangdanid;
    }

    public void setCaichuangdanid(Long caichuangdanid) {
        this.caichuangdanid = caichuangdanid;
    }

    public Long getPackofprodid() {
        return packofprodid;
    }

    public void setPackofprodid(Long packofprodid) {
        this.packofprodid = packofprodid;
    }

    public int getUnit() {
        return unit;
    }

    public void setUnit(int unit) {
        this.unit = unit;
    }

    public int getProcessnum() {
        return processnum;
    }

    public void setProcessnum(int processnum) {
        this.processnum = processnum;
    }

    public int getNowquantity() {
        return nowquantity;
    }

    public void setNowquantity(int nowquantity) {
        this.nowquantity = nowquantity;
    }

    public int getRemainsteps() {
        return remainsteps;
    }

    public void setRemainsteps(int remainsteps) {
        this.remainsteps = remainsteps;
    }

    public Long getSupervisorid() {
        return supervisorid;
    }

    public void setSupervisorid(Long supervisorid) {
        this.supervisorid = supervisorid;
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }
}
