import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import scut.Application;
import scut.dao.AdminDao;
import scut.dao.SupervisorDao;
import scut.domain.Admin;

import javax.persistence.Table;
import java.util.Date;

/**
 * Created by lenovo on 2017/5/23.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Application.class)
public class TestJpa {

    @Autowired
    private AdminDao adminDao;
    @Autowired
    private SupervisorDao supervisorDao;

    @Test
    public void test(){
        Admin admin = new Admin();
        admin.setName("admin");
        admin.setBirthday(new Date());
        admin.setAddress("华南理工大学");
        admin.setEmail("mashimaro7646@qq.com");
        admin.setHometown( "汕头");
        admin.setPassword("123456");
        admin.setPosition("boss");
        admin.setTel("18814122776");
        admin.setUsername("admin" );
        adminDao.save(admin);

        System.out.print(adminDao.findAll().toString());
    }

    @Test
    public void testQuery(){
        System.out.println(supervisorDao.findByName("aa"));

    }

}
