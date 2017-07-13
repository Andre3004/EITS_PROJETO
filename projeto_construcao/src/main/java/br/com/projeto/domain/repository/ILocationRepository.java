package br.com.projeto.domain.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Location;
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
	 * @param filter
	 * @param pageable
	 * @return
	 */
	/*@EntityGraph(attributePaths={"location.responsible.name", "location.responsible.lastName"})*/
	@Query("select location  "
			+ "from Location location  "
			+ "where LOWER(responsible.name) like %:pFilter% "
			+ "or LOWER(responsible.lastName) like %:pFilter% "
			+ "or LOWER(codLocation) like %:pFilter% ")
	public Page<Location> listLocationsByFilters(@Param("pFilter") String filter, Pageable pageable);
	/**
	 * 
	 * @param filter
	 * @param id
	 * @param idLocationAssociated
	 * @param pageable
	 * @return
	 */
	@Query("select location from Location location where "
			+ "( id <> :id ) "
			+ "and ( ( location.location.id <> :id ) or ( location.location.id is null) ) "
			+ "and ( LOWER(codLocation) like %:pFilter% "
			+ "or LOWER(responsible.name) like %:pFilter% "
			+ "	or LOWER(responsible.lastName) like %:pFilter% ) "
			+ "and ( id <> :idLocationAssociated )")
	public Page<Location> ListNonAssociatedLocationByFilter(@Param("pFilter") String filter, @Param("id") Long id, 
															 @Param("idLocationAssociated") Long idLocationAssociated, Pageable pageable);
	/**
	 * 
	 * @param filter
	 * @param pageable
	 * @return
	 */
	@Query("select location  "
			+ "from Location location  "
			+ "where (LOWER(responsible.name) like %:pFilter% "
			+ "or LOWER(responsible.lastName) like %:pFilter% "
			+ "or LOWER(codLocation) like %:pFilter%) "
			+ "and ( location.location is null )")
	public Page<Location> listMainLocationsByFilters(@Param("pFilter") String filter, Pageable pageable);
	
	/**
	 * 
	 * @param filter
	 * @param id
	 * @param pageable
	 * @return
	 */
	@Query("select location from Location location where "
			+ "(location.location.id = :id ) "
			+ "and ( LOWER(location.codLocation) like %:pFilter% "
			+ "or LOWER(location.responsible.name) like %:pFilter% "
			+ "or LOWER(location.responsible.lastName) like %:pFilter% )")
	public Page<Location> listSubLocationByFilter(@Param("pFilter")String filter, @Param("id")Long id, Pageable pageable);
	
	/**
	 * 
	 * @param codLocation
	 * @param id
	 * @return
	 */
	@Query("select location from Location location where "
			+ "(LOWER(codLocation) = :codLocation) "
			+ "and ( id <> :id )")
	public Location findByCodLocationAndId(@Param("codLocation")String codLocation, @Param("id")Long id);
}
