package scut.domain;

import javax.annotation.Generated;
import javax.persistence.*;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="supervisorauthority")
public class Supervisorauthority {
    @Id
    @GeneratedValue
    private Long supervisorauthorityId;


    private Boolean kaicai;

    private Boolean caichuang = false;

    private Boolean liushui = false;

    private Boolean gongpiao = false;

    private Boolean yuangong = false;

    @Column(columnDefinition="tinyint(1) default 0", nullable = false)
    public Boolean getKaicai() {
        return kaicai;
    }

    public void setKaicai(Boolean kaicai) {
        this.kaicai = kaicai;
    }
    @Column(columnDefinition="tinyint(1) default 0", nullable = false)
    public Boolean getCaichuang() {
        return caichuang;
    }

    public void setCaichuang(Boolean caichuang) {
        this.caichuang = caichuang;
    }
    @Column(columnDefinition="tinyint(1) default 0", nullable = false)
    public Boolean getLiushui() {
        return liushui;
    }

    public void setLiushui(Boolean liushui) {
        this.liushui = liushui;
    }
    @Column(columnDefinition="tinyint(1) default 0", nullable = false)
    public Boolean getGongpiao() {
        return gongpiao;
    }

    public void setGongpiao(Boolean gongpiao) {
        this.gongpiao = gongpiao;
    }
    @Column(columnDefinition="tinyint(1) default 0", nullable = false)
    public Boolean getYuangong() {
        return yuangong;
    }

    public void setYuangong(Boolean yuangong) {
        this.yuangong = yuangong;
    }

    @Override
    public String toString() {
        return "Supervisorauthority{" +
                ", supervisorauthorityId" + supervisorauthorityId+
                ", kaicai=" + kaicai +
                ", caichuang=" + caichuang +
                ", liushui=" + liushui +
                ", gongpiao=" + gongpiao +
                ", yuangong=" + yuangong +
                '}';
    }
}
