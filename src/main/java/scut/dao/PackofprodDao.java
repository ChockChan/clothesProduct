package scut.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import scut.domain.Packofprod;

/**
 * Created by mashimaro on 2017/5/31.
 */
@Repository
public interface PackofprodDao extends JpaRepository<Packofprod,Long> {
}
