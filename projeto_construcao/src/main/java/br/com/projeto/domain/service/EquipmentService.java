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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.repository.IEquipmentRepository;
import br.com.projeto.infrastructure.EquipmentFile;

/**
 * 
 * @author André
 * @category Service
 * 
 */
@Service
@Transactional
public class EquipmentService 
{
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Repository
	/**
	 * 
	 */
	@Autowired
	private IEquipmentRepository equipmentRepository;
	
	/**
	 * 
	 */
	@Autowired
	private EquipmentFile equipmentFile;
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param equipment
	 */
	public void insertEquipment(Equipment equipment)
	{
		equipmentRepository.save(equipment);
	}
	
	/**
	 * 
	 * @return
	 */
	public List<Equipment> listAllEquipment()
	{
		return equipmentRepository.findAll();
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	public List<Equipment> listAllSubEquipment(Long id) 
	{
		return equipmentRepository.findAllSubEquipments(id);
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	public Equipment findEquipmentById(Long id) 
	{
		return equipmentRepository.findOne(id);
	}

	/**
	 * 
	 * @param id
	 */
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public void deleteEquipment(Long id) 
	{
		if (equipmentRepository.findOne(id).getFilePath() != null)
		{
			File file = new File( "C:/Users/André/workspace/.metadata/.plugins/org.eclipse.wst.server.core/tmp2/wtpwebapps/projeto/" + equipmentRepository.findOne(id).getFilePath() );
			file.delete();
		}
		equipmentRepository.delete(id);
	}

	/**
	 * 
	 * @param equipment
	 */
	public void updateEquipment(Equipment equipment) 
	{
//		if ( equipment.getEquipment().getId() == equipment.getId() )
//		{
//			throw new IllegalArgumentException("Nâo foi possível salvar o equipamento.");
//		}
		if (! (equipmentRepository.findFilesEquals(equipment.getFilePath(), equipment.getId()).isEmpty()))
		{
			throw new IllegalArgumentException("Nâo foi possível salvar o equipamento.");
		}
		equipmentRepository.saveAndFlush(equipment);
	}

	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @return
	 */
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

	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @return
	 */
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
		return equipmentRepository.findMainEquipment(pageable);
	}

	/**
	 * 
	 * @param file
	 * @param id
	 * @return
	 */
	public ResponseEntity<String> uploadFile(MultipartFile file, Long id) 
	{
		String path = "equipment-files\\" + file.getOriginalFilename();
		if (! (equipmentRepository.findFilesEquals(path, id).isEmpty()))
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("O Manual já está vinculado a outro equipamento!");
		}
		equipmentFile.write("equipment-files", file);
		
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Arquivo salvo!");
		
	}

	/**
	 * 
	 * @param response
	 * @param id
	 * @throws IOException
	 */
	public void downloadFile(HttpServletResponse response, Long id) throws IOException 
	{
    	String path = equipmentRepository.findOne(id).getFilePath();
		equipmentFile.read(response, id, path);
	}
}
