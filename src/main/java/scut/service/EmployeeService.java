package scut.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import scut.dao.EmployeeDao;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Service("employeeService")
public class EmployeeService {
    @Autowired
    EmployeeDao employeeDao;
}
