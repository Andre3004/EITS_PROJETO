package br.com.projeto.domain.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Location;
import br.com.projeto.domain.entity.User;
/**
 * 
 * @author André
 * @category Repository
 */
@Repository
@Transactional
public interface ILocationRepository extends JpaRepository<Location, Long>
{
	/**
	 * 
	 * @param id
	 * @return
	 */
	@Query("select location from Location location where location.location.id = :id")
	public List<Location> findAllSubLocations(@Param("id") Long id);

	/**
	 * 
	 * @param filter
	 * @param pageable
	 * @return
	 */
	@Query("select location  "
			+ "from Location location  "
			+ "where LOWER(responsible.name) like %:pFilter% "
			+ "or LOWER(responsible.lastName) like %:pFilter% "
			+ "or LOWER(location.codLocation) like %:pFilter% " 
			+ "or LOWER(location.location.codLocation) like %:pFilter% ")
	public Page<Location> listLocationsByFilters(@Param("pFilter") String filter, Pageable pageable);
	
}
