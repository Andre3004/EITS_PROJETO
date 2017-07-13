package br.com.projeto.domain.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.Location;

/**
 * 
 * @author André
 * @category Repository
 * 
 */
@Repository
@Transactional
public interface IEquipmentRepository extends JpaRepository<Equipment, Long>
{
	/**
	 * 
	 * @param filter
	 * @param id
	 * @param pageable
	 * @return
	 */
	@Query("select equipment from Equipment equipment where "
			+ "(equipment.equipment.id = :id ) "
			+ "and ( LOWER(equipment.name) like %:pFilter% "
			+ "or LOWER(equipment.description) like %:pFilter% )")
	public Page<Equipment> listSubEquipmentByFilter(@Param("pFilter")String filter, @Param("id")Long id, Pageable pageable);

	/**
	 * 
	 * @param filter
	 * @param pageable
	 * @return
	 */
	@Query("select equipment  "
			+ "from Equipment equipment  "
			+ "where ( LOWER(name) like %:pFilter% "
			+ "or LOWER(description) like %:pFilter% "
			+ "or LOWER(equipment.location.codLocation) like %:pFilter% )"
			+ "and ( equipment.equipment is null )")
	public Page<Equipment> listMainEquipmentsByFilters(@Param("pFilter") String filter, Pageable pageable);
	
	/**
	 * 
	 * @param filter
	 * @param id
	 * @return
	 */
	@Query("select equipment from Equipment equipment where (equipment.filePath = :pFilter) and (equipment.id <> :id)")
	public List<Equipment> findFilesEquals(@Param("pFilter") String filter, @Param("id") Long id);
	/**
	 * 
	 * @param filter
	 * @param id
	 * @param pageable
	 * @return
	 */
	@Query("select equipment from Equipment equipment where "
			+ "( id <> :id ) "
			+ "and ( ( equipment.equipment.id <> :id ) or ( equipment.equipment.id is null) ) "
			+ "and ( LOWER(name) like %:pFilter% "
			+ "or LOWER(description) like %:pFilter% "
			+ "or LOWER(equipment.location.codLocation) like %:pFilter% ) "
			+ "and ( id <> :idEquipmentAssociated )")
	public Page<Equipment> ListNonAssociatedEquipmentByFilter(@Param("pFilter") String filter, @Param("id") Long id, 
															  @Param("idEquipmentAssociated") Long idEquipmentAssociated, Pageable pageable);
	
	/**
	 * 
	 * @param name
	 * @param id
	 * @return
	 */
	@Query("select equipment from Equipment equipment where "
			+ "(LOWER(name) = :name) "
			+ "and ( id <> :id )")
	public Equipment findByNameAndId(@Param("name")String name, @Param("id")Long id);
}
