package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import scut.dao.CaichuangdanDao;
import scut.dao.EmployeeworkticketDao;
import scut.dao.WorkticketDao;
import scut.dao.WorkticketformDao;
import scut.domain.Employeeworkticket;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("liushuiService")
public class LiushuiService {
    @Autowired
    CaichuangdanDao caichuangdanDao;
    @Autowired
    WorkticketformDao workticketformDao;
    @Autowired
    WorkticketDao workticketDao;
    @Autowired
    EmployeeworkticketDao employeeworkticketDao;

}
