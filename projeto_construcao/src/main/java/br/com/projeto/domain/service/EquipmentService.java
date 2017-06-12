package br.com.projeto.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.repository.IEquipmentRepository;

@Service
@Transactional
public class EquipmentService 
{
	
	@Autowired
	private IEquipmentRepository equipmentRepository;
	
	public void insertEquipment(Equipment equipment)
	{
		equipmentRepository.save(equipment);
	}
	
	public List<Equipment> listAllEquipment()
	{
		return equipmentRepository.findAll();
	}

	public List<Equipment> listAllSubEquipment(Long id) 
	{
		return equipmentRepository.findAllSubEquipments(id);
	}

	public Equipment findEquipmentById(Long id) 
	{
		return equipmentRepository.findOne(id);
	}

	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void deleteEquipment(Long id) 
	{
		equipmentRepository.delete(id);
	}

	public void updateEquipment(Equipment equipment) 
	{
		if ( equipment.getEquipment().getId() == equipment.getId() )
		{
			throw new IllegalArgumentException("Nâo foi possível salvar o equipamento.");
		}
		equipmentRepository.saveAndFlush(equipment);
	}
	
	

}
