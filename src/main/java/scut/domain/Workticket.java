package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="workticket")
public class Workticket {
    @Id
    @GeneratedValue
    private Long workticket;

    private Long workticketformid;
    private String  processname;
    private Integer quantity;
    private Integer unitprice;
    private Integer totalprice;
    private Long packofprodid;
    private String supervisorname;
    private Boolean status;
}
