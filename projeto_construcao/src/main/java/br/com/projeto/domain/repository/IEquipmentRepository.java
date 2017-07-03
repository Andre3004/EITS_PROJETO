package br.com.projeto.domain.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Equipment;

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
	 * @param id
	 * @return
	 */
	@Query("select equipment from Equipment equipment where equipment.equipment.id = :id")
	public List<Equipment> findAllSubEquipments(@Param("id") Long id);

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
			+ "or LOWER(location.codLocation) like %:pFilter% )"
			+ "and ( equipment.equipment is null )")
	public Page<Equipment> listEquipmentsByFilters(@Param("pFilter") String filter, Pageable pageable);
	
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
	 * @param pageable
	 * @return
	 */
	@Query("select equipment from Equipment equipment where equipment.equipment is null")
	public Page<Equipment> findMainEquipment(Pageable pageable);
}
