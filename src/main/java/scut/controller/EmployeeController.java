package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import scut.service.EmployeeService;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Controller
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
}
