package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import scut.dao.AdminDao;
import scut.dao.SupervisorDao;
import scut.dao.SupervisorauthorityDao;
import scut.domain.Admin;
import scut.domain.Supervisor;
import scut.domain.Supervisorauthority;

import java.util.List;

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

    public String addSupervisor(Supervisor supervisor){
        supervisor.setSupervisorauthority(new Supervisorauthority());
        supervisorDao.save(supervisor);
        return "0";
    }

    public Supervisor getSupervisor(String name){
        List<Supervisor> supervisors = supervisorDao.findByName(name);
        if(supervisors.isEmpty())
            return null;
        return supervisors.get(0);
    }

    public String updateSupervisor(Supervisor supervisor){
        supervisorDao.updateSupervisor(supervisor, supervisor.getName());
        return "0";
    }
}
