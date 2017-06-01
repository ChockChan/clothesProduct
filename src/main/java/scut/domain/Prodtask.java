package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="prodtask")
public class Prodtask {
    @Id
    @GeneratedValue
    private Long prodtask;

    private String serialnumber;
    private String prodname;
    private String prodstyle;
    private String prodcolor;
    private String prodsize;
    private int prodnum;
    private String remark;

    public Long getProdtask() {
        return prodtask;
    }

    public void setProdtask(Long prodtask) {
        this.prodtask = prodtask;
    }

    public String getSerialnumber() {
        return serialnumber;
    }

    public void setSerialnumber(String serialnumber) {
        this.serialnumber = serialnumber;
    }

    public String getProdname() {
        return prodname;
    }

    public void setProdname(String prodname) {
        this.prodname = prodname;
    }

    public String getProdstyle() {
        return prodstyle;
    }

    public void setProdstyle(String prodstyle) {
        this.prodstyle = prodstyle;
    }

    public String getProdcolor() {
        return prodcolor;
    }

    public void setProdcolor(String prodcolor) {
        this.prodcolor = prodcolor;
    }

    public String getProdsize() {
        return prodsize;
    }

    public void setProdsize(String prodsize) {
        this.prodsize = prodsize;
    }

    public int getProdnum() {
        return prodnum;
    }

    public void setProdnum(int prodnum) {
        this.prodnum = prodnum;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
