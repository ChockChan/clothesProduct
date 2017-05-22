import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import scut.Application;
import scut.dao.AdminDao;
import scut.domain.Admin;

import java.util.Date;

/**
 * Created by lenovo on 2017/5/23.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class TestJpa {

    @Autowired
    private AdminDao adminDao;

    @Test
    public void test(){
        Admin admin = new Admin();
        admin.setAddress("haha");
        admin.setBirthday(new Date());
        admin.setName("sds");
        adminDao.save(admin);

        System.out.print(adminDao.findAll().toString());
    }
}
