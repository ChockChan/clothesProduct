package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Admin;

import java.util.List;

/**
 * Created by lenovo on 2017/5/23.
 */
@Repository
public interface AdminDao extends JpaRepository<Admin, Long> {

    Admin save(Admin admin);
    List<Admin> findAll();
}
