package br.com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Equipment;

@Repository
@Transactional
public interface EquipmentRepository extends JpaRepository<Equipment, Long>
{
	
}
