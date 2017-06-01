package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Workticketform;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Repository
public interface WorkticketformDao extends JpaRepository<Workticketform,Long> {
}
