package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import scut.service.AdminService;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Controller
@RequestMapping(value = "/authority")
public class AuthorityController {
    @Autowired
    private AdminService adminService;

//    @RequestMapping(value = "/change")
}
