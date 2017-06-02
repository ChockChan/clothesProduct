package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
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

    @Query(value = "select b from Supervisor b where b.name like %:name%")
    List<Supervisor> findByName(@Param("name") String name);

    @Modifying(clearAutomatically = true)
    @Query(value = "update Supervisor s set s =:supervisor where s.name = :name")
    int updateSupervisor(@Param("supervisor") Supervisor supervisor, @Param("name") String name);
}
