package scut.util;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by lenovo on 2017/6/2.
 */
public class ResponseUtil {

    public static Map buildResponse(String code){
        Map map = new HashMap();
        map.put("return_code",code);
        return map;
    }
}
