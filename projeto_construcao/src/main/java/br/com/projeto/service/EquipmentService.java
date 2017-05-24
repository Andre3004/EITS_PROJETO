package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Equipment;
import br.com.projeto.repository.EquipmentRepository;

@Service
@Transactional
public class EquipmentService 
{
	
	@Autowired
	private EquipmentRepository equipmentRepository;
	
	@Transactional
	public void insert(Equipment equipment)
	{
		equipmentRepository.save(equipment);
	}
	
	

}
