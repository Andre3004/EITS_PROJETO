package br.com.projeto.domain.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
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
//		if ( equipment.getEquipment().getId() == equipment.getId() )
//		{
//			throw new IllegalArgumentException("Nâo foi possível salvar o equipamento.");
//		}
		equipmentRepository.saveAndFlush(equipment);
	}

	public Page<Equipment> listEquipmentsByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return equipmentRepository.listEquipmentsByFilters(filter.toLowerCase(), pageable);
	}

	public Page<Equipment> listEquipments(int page, int size, String property, String order) 
	{
		Direction asc;
		
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		
		PageRequest pageable = new PageRequest(page, size, asc, property);
	    System.out.println(pageable);
		return equipmentRepository.findAll(pageable);
	}
	
	

}
