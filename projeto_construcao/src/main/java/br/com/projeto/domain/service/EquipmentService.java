package br.com.projeto.domain.service;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
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
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.entity.User;
import br.com.projeto.domain.repository.IEquipmentRepository;
import br.com.projeto.domain.repository.IUserRepository;
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
	/**
	 * 
	 */
	@Autowired
	private HttpServletRequest request;
	
	/*-------------------------------------------------------------------
	 *				 		     SERVICES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 * @param equipment
	 * @return 
	 */
	public ResponseEntity<String> insertEquipment(Equipment equipment)
	{
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
		if ( ( equipmentRepository.findByNameAndId(equipment.getName().toLowerCase(), new Long(0)) != null ) ) 
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Já existe um equipamento com este nome");
		}
		equipmentRepository.save(equipment);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Equipamento salvo com sucesso!");
	}

	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @param filter
	 * @param id
	 * @return
	 */
	@Transactional(readOnly = true)
	public Page<Equipment> listSubEquipmentByFilter(int page, int size, String property, String order, String filter,Long id) 
	{
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if ( id == null )
		{
			id = new Long(0);
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		return equipmentRepository.listSubEquipmentByFilter(filter.toLowerCase(), id, pageable);	
	}

	/**
	 * 
	 * @param id
	 * @return
	 */
	@Transactional(readOnly = true)
	public Equipment findEquipmentById(Long id) 
	{
		return equipmentRepository.findOne(id);
	}

	/**
	 * 
	 * @param id
	 * @return 
	 */
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<String> deleteEquipment(Long id) 
	{
		Equipment equipment = equipmentRepository.findOne(id);
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
		if (equipmentRepository.findOne(id).getFilePath() != null)
		{	
			String realPath = request.getServletContext().getRealPath("/" + "equipment-files");
			String path = realPath + "/" + equipment.getFilePath();
			File file = new File( path );
			file.delete();
		}
		equipmentRepository.delete(id);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Equipamento salvo com sucesso!");
	}
	/**
	 * 
	 * @param equipment
	 * @return 
	 */
	public ResponseEntity<String> updateEquipment(Equipment equipment) 
	{	
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
		if ( ( equipmentRepository.findByNameAndId(equipment.getName().toLowerCase(), equipment.getId()) != null ) ) 
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Já existe um equipamento com este nome");
		}
		if (! (equipmentRepository.findFilesEquals(equipment.getFilePath(), equipment.getId()).isEmpty()))
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Já existe um equipamento com este arquivo");
		}
		equipmentRepository.saveAndFlush(equipment);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Equipamento salvo com sucesso!");
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
	@Transactional(readOnly = true)
	public Page<Equipment> listMainEquipmentsByFilters(int page, int size, String property, String order, String filter) 
	{
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		return equipmentRepository.listMainEquipmentsByFilters(filter.toLowerCase(), pageable);
	}
	/**
	 * 
	 * @param file
	 * @param id
	 * @return
	 */
	public ResponseEntity<String> uploadFile(MultipartFile file, Long id) 
	{
		String path = file.getOriginalFilename();
		Equipment equipment = equipmentRepository.findOne(id);
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
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
	 * @return 
	 * @throws IOException
	 */
	public ResponseEntity<String> downloadFile(HttpServletResponse response, Long id) throws IOException 
	{
		Equipment equipment = equipmentRepository.findOne(id);
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
    	String path = equipmentRepository.findOne(id).getFilePath();
		equipmentFile.read(response, id, path);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Download!");
	}
	/**
	 * 
	 * @param id
	 * @param filter
	 * @return
	 */
	@Transactional(readOnly = true)
	public Page<Equipment> ListNonAssociatedEquipmentByFilter(int page, int size, String property, String order, Long id, String filter) 
	{
		Long idEquipmentAssociated = new Long(0);
		Direction asc;
		if ( filter.compareToIgnoreCase("null") == 0 )
		{
			filter = "";
		}
		if ( id == null )
		{
			id = new Long(0);
		}
		if (order.equals("ASC"))
		{
			asc = Direction.ASC;
		}
		else
		{
			asc = Direction.DESC;
		}
		PageRequest pageable = new PageRequest(page, size, asc, property);
		if ( ( id != 0 ) && ( id != null) )
		{
			if ( ! (equipmentRepository.findOne(id).getEquipment() == null ) )
			{
				idEquipmentAssociated = equipmentRepository.findOne(id).getEquipment().getId();
			}
		}
		return equipmentRepository.ListNonAssociatedEquipmentByFilter(filter.toLowerCase(), id, idEquipmentAssociated, pageable);	
	}

	/**
	 * 
	 * @param id
	 * @return 
	 */
	public ResponseEntity<String> clearFileEquipment(Long id) 
	{
		Equipment equipment = equipmentRepository.findOne(id);
		if ( equipment == null )
		{
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Equipamento nulo");
		}
		String realPath = request.getServletContext().getRealPath("/" + "equipment-files");
		String path = realPath + "/" + equipment.getFilePath();
		File file = new File( path );
		file.delete();
		equipment.setFilePath(null);
		equipmentRepository.save(equipment);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Arquivo removido!");
		
	}
}
