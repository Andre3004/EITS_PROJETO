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

@Repository
@Transactional
public interface IEquipmentRepository extends JpaRepository<Equipment, Long>
{
	@Query("select equipment from Equipment equipment where equipment.equipment.id = :id")
	public List<Equipment> findAllSubEquipments(@Param("id") Long id);

	@Query("select equipment  "
			+ "from Equipment equipment  "
			+ "where LOWER(name) like %:pFilter% "
			+ "or LOWER(description) like %:pFilter% "
			+ "or LOWER(equipment.name) like %:pFilter% " 
			+ "or LOWER(location.codLocation) like %:pFilter% ")
	public Page<Equipment> listEquipmentsByFilters(@Param("pFilter") String filter, Pageable pageable);
	
}
