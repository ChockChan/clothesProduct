package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import scut.dao.KaicaidanDao;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Service("KaicaiService")
public class KaicaiService {
    @Autowired
    private KaicaidanDao kaicaidanDao;
}
