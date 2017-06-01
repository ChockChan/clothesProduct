package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Employee;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Repository
public interface EmployeeDao extends JpaRepository<Employee,Long>{
}
