package scut.domain;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="supervisor")
public class Supervisor {
    @Id
    @GeneratedValue
    private Long supervisorId;

    private String password;
    private String userName;
    private String name;
    private String position;
    private String email;
    private String address;
    private String tel;
    @Temporal(TemporalType.DATE)
    private Date birthday;
    private String hometown;
    private String status;
    private String userType;
    @OneToOne(cascade={CascadeType.ALL})
    @JoinColumn(name="supervisorauthorityId", unique = true)
    private Supervisorauthority supervisorauthority;

    public Long getSupervisorId() {
        return supervisorId;
    }

    public void setSupervisorId(Long supervisorId) {
        this.supervisorId = supervisorId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public String getHometown() {
        return hometown;
    }

    public void setHometown(String hometown) {
        this.hometown = hometown;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }

    public Supervisorauthority getSupervisorauthority() {
        return supervisorauthority;
    }

    public void setSupervisorauthority(Supervisorauthority supervisorauthority) {
        this.supervisorauthority = supervisorauthority;
    }

    @Override
    public String toString() {
        return "Supervisor{" +
                "supervisorId=" + supervisorId +
                ", password='" + password + '\'' +
                ", userName='" + userName + '\'' +
                ", name='" + name + '\'' +
                ", position='" + position + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", tel='" + tel + '\'' +
                ", birthday=" + birthday +
                ", hometown='" + hometown + '\'' +
                ", status='" + status + '\'' +
                ", userType='" + userType + '\'' +
                ", supervisorauthority=" + supervisorauthority +
                '}';
    }
}
