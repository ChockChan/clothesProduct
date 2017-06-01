package scut.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import scut.domain.Admin;
import scut.util.ExcelDownUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by lenovo on 2017/6/1.
 */
@RestController
@RequestMapping("/downloadDemo")
public class DownloadDemoController {

    @RequestMapping(value = "/excel", method = RequestMethod.GET)
    public String download(HttpServletRequest request, HttpServletResponse response) {
        List<Admin> adminList = new ArrayList<>();
        Admin admin;
        for (int i = 0; i < 2; i++) {
            admin = new Admin();
            admin.setName(i == 0 ? "李帅松" : "陈帅德");
            admin.setBirthday(new Date());
            admin.setAddress("华南理工大学");
            admin.setAdminId((long) i);
            admin.setEmail(i == 0 ? "mashimaro7646@qq.com" : "986682543@qq.com");
            admin.setHometown(i == 0 ? "汕头" : "陆丰");
            admin.setPassword("********");
            admin.setPosition(i == 0 ? "boss" : "president");
            admin.setTel(i == 0 ? "18814122776" : "18814122524");
            admin.setUsername(i == 0 ? "李耀帅" : "陈佳帅");
            adminList.add(admin);
        }
        String[] head = {"管理员编号", "管理员用户名", "管理员姓名", "管理员手机", "管理员邮箱", "管理员家乡", "管理员地址",
                "管理员职称", "管理员生日"};
        String[] saveOrder = {"adminId", "username", "name", "tel", "email", "hometown", "address",
                "position", "birthday"};
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String date = sdf.format(new Date());
        String fileName = "excel_" + date + ".xls";
        ExcelDownUtil.downloadExcel(response, head, saveOrder, adminList, fileName);
        return "ok";
    }
}
