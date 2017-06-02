package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import scut.dao.AdminDao;
import scut.dao.SupervisorDao;
import scut.dao.SupervisorauthorityDao;
import scut.domain.Admin;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("adminService")
public class AdminService {
    @Autowired
    private  AdminDao adminDao;
    @Autowired
    private SupervisorDao supervisorDao;
    @Autowired
    private SupervisorauthorityDao supervisorauthorityDao;

    public Admin findAdminByName(String name){
        return adminDao.findByName(name);
    }
}
