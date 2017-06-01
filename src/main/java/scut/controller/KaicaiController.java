package scut.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import scut.service.KaicaiService;

/**
 * Created by mashimaro on 2017/6/1.
 */
@Controller
public class KaicaiController {
    @Autowired
    private KaicaiService kaicaiService;

}
