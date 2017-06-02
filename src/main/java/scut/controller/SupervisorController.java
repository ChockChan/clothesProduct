package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import scut.domain.Supervisor;
import scut.service.AdminService;
import scut.util.ResponseUtil;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * Created by mashimaro on 2017/6/1.
 */
@RestController
@RequestMapping(value = "/supervisor")
public class SupervisorController {
    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Map<String, String> addSupervisor(@RequestBody Supervisor supervisor){
        return ResponseUtil.buildResponse(adminService.addSupervisor(supervisor));
    }
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public Map<String, Object> getSupervisor(HttpServletRequest request){
        String name = request.getParameter("name");
        Supervisor supervisor = adminService.getSupervisor(name);
        Map response = ResponseUtil.buildResponse("0");
        response.put("data", supervisor);
        return response;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public Map<String, Object> updateSupervisor(@RequestBody Supervisor supervisor){
        return ResponseUtil.buildResponse(adminService.updateSupervisor(supervisor));
    }
}
