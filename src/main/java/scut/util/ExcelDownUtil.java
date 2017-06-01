package scut.util;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by lenovo on 2017/6/1.
 */
public class ExcelDownUtil {
    private static Logger logger = LoggerFactory.getLogger(ExcelDownUtil.class);
    /**
     * 先写好一个sheet的情况
     *
     * @param head excel表头
     * @param saveOrder 数据顺序对应表头顺序
     * @param dataList 传入的列表数据
     * @param fileName 传入的文件名
     * @return 是否成功下载。
     */
    public static <T> boolean downloadExcel(HttpServletResponse response
            , String[] head
            , String[] saveOrder
            , List<T> dataList
            , String fileName) {
        try {
            boolean isSucceed;
            HSSFWorkbook hssfWorkbook = ExcelUtil.listToExcel(head, saveOrder, dataList, fileName);
            isSucceed = DownloadUtil.saveExcel(response, hssfWorkbook,fileName);
            return isSucceed;
        } catch (Exception e) {

            logger.error(e.toString());
        }
        return false;

    }
}
