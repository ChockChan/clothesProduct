package scut;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * Created by lenovo on 2017/5/22.
 */
@SpringBootApplication
@EnableScheduling
@ComponentScan("scut")
public class Application {

    public static void main(String[] args){
        SpringApplication.run(Application.class, args);
    }


}
