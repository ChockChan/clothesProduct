package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import scut.dao.CaichuangdanDao;
import scut.dao.WorkticketDao;
import scut.dao.WorkticketformDao;
import scut.domain.Kaicaidan;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("GongpiaoService")
public class GongpiaoService {
    @Autowired
    CaichuangdanDao caichuangdanDao;
    @Autowired
    WorkticketformDao workticketformDao;
    @Autowired
    WorkticketDao workticketDao;
}
