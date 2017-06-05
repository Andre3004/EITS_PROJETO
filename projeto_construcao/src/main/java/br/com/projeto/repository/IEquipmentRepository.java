package br.com.projeto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Equipment;

@Repository
@Transactional
public interface IEquipmentRepository extends JpaRepository<Equipment, Long>
{
	@Query("select u from Equipment u where u.equipment.id = :id")
	public List<Equipment> findAllSubEquipments(@Param("id") Long id);
}
