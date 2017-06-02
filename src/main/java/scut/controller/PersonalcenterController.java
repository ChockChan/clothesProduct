package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import scut.DTO.Login;
import scut.domain.Admin;
import scut.service.AdminService;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Controller
public class PersonalcenterController {
    @Autowired
    private AdminService adminService;

    /**
     * @param login
     * @param session
     * @return
     */
    @RequestMapping(value="/userLogin",method = RequestMethod.POST)
    public @ResponseBody Map<String, String> login(@RequestBody Login login, HttpSession session){
        Map<String ,String> map=new HashMap<String,String>();
        if("admin".equals(login.getType())){
            Admin admin=adminService.findAdminByName(login.getUserName());
            if(admin!=null&&admin.getPassword().equals(login.getUserPassword())){
                map.put("return_code",String.valueOf(0));
            }
        }else{
            map.put("return_code",String.valueOf(2));
        }
        return map;
    }
/*    @RequestMapping(value="/",method = RequestMethod.GET)
    public String defaultpage(){
        return "login";
    }*/
}
