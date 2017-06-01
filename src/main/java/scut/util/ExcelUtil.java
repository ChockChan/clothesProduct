package scut.util;

import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lenovo on 2017/6/1.
 */
public class ExcelUtil {

    private static Logger logger = LoggerFactory.getLogger(ExcelUtil.class);
    private static SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
    public static <T> HSSFWorkbook listToExcel(String[] head
            , String[] saveOrder
            , List<T> dataList
            , String fileName) {
        HSSFWorkbook wb = new HSSFWorkbook();

        HSSFSheet sheet = setHeaderName(head, wb, fileName);
        if (head == null
                || saveOrder == null
                || saveOrder.length != head.length
                || dataList.isEmpty()
                || !checkSaveOrder(dataList.get(0), saveOrder)) {
            return wb;
        }

        if (dataList.isEmpty()) {
            dataList = new ArrayList<>();
        }

        for (int i = 0; i < dataList.size(); i++) {
            Object data = dataList.get(i);

            HSSFRow row = sheet.createRow(i + 1);

            setRowCell(row, data, saveOrder);
        }
        return wb;
    }

    private static boolean checkSaveOrder(Object data, String[] saveOrder) {
        Map dataMap;
        if(!(data instanceof Map)) {
            dataMap = reflect(data);
        }else {
            dataMap = (Map) data;
        }
        for (int column = 0; column < saveOrder.length; column++) {
            String dataKey = saveOrder[column];
            //如果都不包含这个dataKey,则会返回false
            if ((dataMap == null) || (!dataMap.containsKey(dataKey))) {
                logger.error(data.getClass().toString() + "doesn't have the key:" + dataKey);
                return false;
            }
        }
        return true;
    }

    private static boolean setRowCell(HSSFRow row, Object data, String[] saveOrder) {
        Map dataMap;
        if(data instanceof Map)
            dataMap = (Map)data;
        else
            dataMap = reflect(data);
        if (dataMap != null) {
            for (int column = 0; column < saveOrder.length; column++) {
                String dataKey = saveOrder[column];
                String rowData = String.valueOf(dataMap.get(dataKey));
                row.createCell(column).setCellValue(rowData);
            }
            return true;
        }
        return false;
    }


    private static HSSFSheet setHeaderName(String[] Header, HSSFWorkbook wb, String sheetType) {
        int length = Header.length;
        HSSFCellStyle style = wb.createCellStyle();
        style.setAlignment(CellStyle.ALIGN_CENTER);

        HSSFSheet sheet = wb.createSheet(sheetType);
        HSSFRow row = sheet.createRow(0);

        for (int i = 0; i < length; i++) {
            HSSFCell cell = row.createCell(i);
            cell.setCellType(HSSFCell.CELL_TYPE_STRING);
            cell.setCellStyle(style);
            cell.setCellValue(Header[i]);
        }
        return sheet;
    }

    private static HashMap<String, String> reflect(Object object) {
        try {
            if (object == null) {
                return null;
            }
            Field[] fields = object.getClass().getDeclaredFields();
            String[] types1 = {"int", "java.lang.String", "boolean", "char", "float", "double", "long", "short", "byte", "java.util.Date"};
            String[] types2 = {"java.lang.Integer", "java.lang.String", "java.lang.Boolean", "java.lang.Character"
                    , "java.lang.Float", "java.lang.Double", "java.lang.Long", "java.lang.Short", "java.lang.Byte",
                    "java.util.Date"};
            HashMap<String, String> map = new HashMap<>();
            for (Field field : fields) {
                field.setAccessible(true);
                String key = field.getName();
                String value = "";
                //输出字段名
                logger.debug("key is " + key + ":");
                //输出字段值
                for (int i = 0; i < types1.length; i++) {
                    if (field.getType().getName()
                            .equalsIgnoreCase(types1[i])
                            || field.getType().getName().equalsIgnoreCase(types2[i])) {
                        try {
                            //获取对象的字段
                            if(i == types1.length - 1)
                                value = simpleDateFormat.format(field.get(object));
                            else
                                value = field.get(object) + "";
                            logger.debug("value is " + value);
                        } catch (Exception e) {
                            logger.error(e.toString());
                        }
                    }
                }
                map.put(key, value);
            }
            return map;
        } catch (Exception e) {
            logger.error(e.toString());
        }
        return null;
    }

    public static String getCellValue(XSSFCell cell){

        if(cell == null){
            return "";
        }
        String value;
        switch (cell.getCellType()) {
            case HSSFCell.CELL_TYPE_NUMERIC: // 数字
                //如果为时间格式的内容
                if (HSSFDateUtil.isCellDateFormatted(cell)) {
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
                    value=sdf.format(HSSFDateUtil.getJavaDate(cell.
                            getNumericCellValue())).toString();
                    break;
                } else {
                    value = new DecimalFormat("0").format(cell.getNumericCellValue());
                }
                value = cell.getNumericCellValue()+"";
                break;
            case HSSFCell.CELL_TYPE_STRING: // 字符串
                value = cell.getStringCellValue();
                //针对生僻字进行处理，不支持utf8四字节
                String value2= "";
                for (int i=0;i<value.length();i++){
                    int c = value.codePointAt(i);
                    if (c>0x0000&&c<0xffff){
                        value2+=value.charAt(i);
                    }else {
                        value2+="?";
                    }
                }
                value = value2;
                break;
            case HSSFCell.CELL_TYPE_BOOLEAN: // Boolean
                value = cell.getBooleanCellValue() + "";
                break;
            case HSSFCell.CELL_TYPE_FORMULA: // 公式
                value = cell.getCellFormula() + "";
                break;
            case HSSFCell.CELL_TYPE_BLANK: // 空值
                value = "";
                break;
            case HSSFCell.CELL_TYPE_ERROR: // 故障
                value = "非法字符";
                break;
            default:
                value = "未知类型";
                break;
        }
        return value;
    }
}
