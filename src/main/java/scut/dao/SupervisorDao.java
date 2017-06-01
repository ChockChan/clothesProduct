package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Supervisor;

import java.util.List;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Repository
public interface SupervisorDao extends JpaRepository<Supervisor,Long>{
    Supervisor save(Supervisor supervisor);
    List<Supervisor> findAll();

}
