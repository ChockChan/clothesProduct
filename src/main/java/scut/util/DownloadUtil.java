package scut.util;



import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletResponse;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

/**
 * Created by lenovo on 2017/6/1.
 */
public class DownloadUtil {

    private static Logger logger = LoggerFactory.getLogger(DownloadUtil.class);

    public static boolean saveExcel(HttpServletResponse response, HSSFWorkbook wb, String fileName) {
        OutputStream os = null;
        // 第六步，将文件存到指定位置,这部分关于到下载的问题
        try {
            // 1.设置文件类型
            response.setContentType("application/msexcel;charset=GBK");
            // 2.设置文件名
            response.setHeader("Content-Disposition", "attachment;filename=\""
                    + new String(fileName.getBytes(), "ISO8859-1") + "\"");

            os = response.getOutputStream();
            // 3.写入到os中去
            wb.write(os);
            os.flush();
            return true;
        } catch (Exception e) {
            logger.error(e.toString());
        } finally {
            if (os != null)
                try {
                    os.close();
                } catch (IOException e) {
                    logger.error( e.toString());
                }
        }
        return false;
    }

    public static boolean saveFile(HSSFWorkbook wb, String fileName) {
        OutputStream os = null;
        // 第六步，将文件存到指定位置,这部分关于到下载的问题
        try {
            os = new FileOutputStream(fileName + ".xls");
            // 3.写入到os中去
            wb.write(os);
            os.flush();
            return true;
        } catch (Exception e) {
            logger.error(e.toString());
            e.printStackTrace();
        } finally {
            if (os != null)
                try {
                    os.close();
                } catch (IOException e) {
                    logger.error(e.toString());
                }
        }
        return false;
    }
}
