package scut.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Entity
@Table(name="packofprod")
public class Packofprod {
    @Id
    @GeneratedValue
    private Long packofprodid;

    private Long caichuangdanid;
    private Integer bednum;
    private Long serialnumber;
    private Integer casenum;
    private Long prodtaskid;
    private Integer numinpack;
    private String remark;
}
