package scut.domain;

import javax.annotation.Generated;
import javax.persistence.*;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="supervisorauthority")
public class Supervisorauthority {


    private Long supervisorId;
    @Column(columnDefinition="tinyint(1) default 0")
    private Boolean kaicai;
    @Column(columnDefinition="tinyint(1) default 0")
    private Boolean caichuang;
    @Column(columnDefinition="tinyint(1) default 0")
    private Boolean liushui;
    @Column(columnDefinition="tinyint(1) default 0")
    private Boolean gongpiao;
    @Column(columnDefinition="tinyint(1) default 0")
    private Boolean yuangong;


    public Long getSupervisorId() {
        return supervisorId;
    }

    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
    }

    public Boolean getKaicai() {
        return kaicai;
    }

    public void setKaicai(Boolean kaicai) {
        this.kaicai = kaicai;
    }

    public Boolean getCaichuang() {
        return caichuang;
    }

    public void setCaichuang(Boolean caichuang) {
        this.caichuang = caichuang;
    }

    public Boolean getLiushui() {
        return liushui;
    }

    public void setLiushui(Boolean liushui) {
        this.liushui = liushui;
    }

    public Boolean getGongpiao() {
        return gongpiao;
    }

    public void setGongpiao(Boolean gongpiao) {
        this.gongpiao = gongpiao;
    }

    public Boolean getYuangong() {
        return yuangong;
    }

    public void setYuangong(Boolean yuangong) {
        this.yuangong = yuangong;
    }

    @Override
    public String toString() {
        return "Supervisorauthority{" +
                ", supervisorId=" + supervisorId +
                ", kaicai=" + kaicai +
                ", caichuang=" + caichuang +
                ", liushui=" + liushui +
                ", gongpiao=" + gongpiao +
                ", yuangong=" + yuangong +
                '}';
    }
}
