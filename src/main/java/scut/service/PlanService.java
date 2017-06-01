package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import scut.dao.KaicaidanDao;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("planService")
public class PlanService {
    @Autowired
    KaicaidanDao kaicaidanDao;

}
