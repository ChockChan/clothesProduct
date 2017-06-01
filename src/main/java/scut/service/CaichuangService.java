package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import scut.dao.CaichuangdanDao;
import scut.dao.KaicaidanDao;
import scut.domain.Kaicaidan;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("caichuangService")
public class CaichuangService {
    @Autowired
    private KaicaidanDao kaicaidanDao;

    @Autowired
    private CaichuangdanDao caichuangdanDao;

}
