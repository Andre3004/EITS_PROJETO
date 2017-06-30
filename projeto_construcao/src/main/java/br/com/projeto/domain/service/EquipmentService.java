package br.com.projeto.domain.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.repository.IEquipmentRepository;
import br.com.projeto.infrastructure.EquipmentFile;

@Service
@Transactional
public class EquipmentService 
{
	
	@Autowired
	private IEquipmentRepository equipmentRepository;
	
	@Autowired
	private EquipmentFile equipmentFile;
	
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

	public void uploadFile(MultipartFile file, Long id) 
	{
		equipmentFile.write("equipment-files", file);
		
		Equipment equipment = equipmentRepository.findOne(id);
			
		equipment.setFilePath("equipment-files\\" + file.getOriginalFilename() );
		
		this.updateEquipment(equipment);
		
	}

	public void downloadFile(HttpServletResponse response, Long id) throws IOException 
	{
    	String path = equipmentRepository.findOne(id).getFilePath();
		equipmentFile.read(response, id, path);
	}
}
