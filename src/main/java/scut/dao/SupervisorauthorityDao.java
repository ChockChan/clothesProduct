package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Supervisorauthority;

import java.util.List;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Repository
public interface SupervisorauthorityDao extends JpaRepository<Supervisorauthority, Long> {
    Supervisorauthority save(Supervisorauthority supervisorauthority);
    List<Supervisorauthority> findAll();
}
