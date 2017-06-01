package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import scut.service.LiushuiService;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Controller
public class LiushuiController {
    @Autowired
    private LiushuiService liushuiService;

}
