package br.com.projeto.application.restful;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.projeto.domain.entity.Equipment;
import br.com.projeto.domain.service.EquipmentService;

/**
 * 
 * @author André
 *
 */
@RestController
@RequestMapping("equipment")
@MultipartConfig(fileSizeThreshold = 20971520)
public class EquipmentRestController 
{
	
	@Autowired
	EquipmentService equipmentService;
	
	private static final String APPLICATION_PDF = "application/pdf";
	
	/**
	 * 
	 * @param equipment
	 */
	@CrossOrigin
	@RequestMapping(value = "/insertEquipment", method = RequestMethod.POST)
	public void insertEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.insertEquipment(equipment);
	}
	/**
	 * 
	 * @return List<Equipment>
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllEquipment", method = RequestMethod.GET)
	public List<Equipment> listAllEquipment()
	{
		return equipmentService.listAllEquipment();
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
	@CrossOrigin
	@RequestMapping(value = "/listEquipmentsByFilters/{page}/{size}/{property}/{order}/{filter} ", method = RequestMethod.GET)
	public Page<Equipment> listEquipmentsByFilters(@PathVariable int page, @PathVariable int size,
											     @PathVariable String property, @PathVariable String order,
											     @PathVariable String filter)
	{
		Page<Equipment> equipments =  equipmentService.listEquipmentsByFilters(page, size, property, order, filter);
		return equipments;
	}
	
	/**
	 * 
	 * @param page
	 * @param size
	 * @param property
	 * @param order
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listEquipments/{page}/{size}/{property}/{order} ", method = RequestMethod.GET)
	public Page<Equipment> listEquipments(@PathVariable int page, @PathVariable int size,
							    @PathVariable String property, @PathVariable String order)
	{
		Page<Equipment> equipments =  equipmentService.listEquipments(page, size, property, order);
		return equipments;
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/listAllSubEquipment/{id}", method = RequestMethod.GET)
	public List<Equipment> listAllSubEquipment(@PathVariable("id") Long id)
	{
		return equipmentService.listAllSubEquipment(id);
	}
	/**
	 * 
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/findEquipmentById/{id}", method = RequestMethod.GET)
	public Equipment findEquipmentById(@PathVariable Long id)
	{
		return equipmentService.findEquipmentById(id);
	}
	/**
	 * 
	 * @param id
	 */
	@CrossOrigin
	@RequestMapping(value = "/deleteEquipment/{id}", method = RequestMethod.DELETE)
	public void deleteEquipment(@PathVariable Long id)
	{
		equipmentService.deleteEquipment(id);
	}
	/**
	 * 
	 * @param equipment
	 */
	@CrossOrigin
	@RequestMapping(value = "/updateEquipment", method = RequestMethod.PUT)
	public void updateEquipment(@RequestBody Equipment equipment)
	{
		equipmentService.updateEquipment(equipment);
	}
	
	/*@CrossOrigin
	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public void upload(@RequestParam("file") MultipartFile file)
	{
        System.out.println(String.format("Nome: " + file.getOriginalFilename()));
    }*/
	
	@CrossOrigin
	@RequestMapping(value = "/uploadFile/{id}", method = RequestMethod.POST)
	public String uploadFile(@RequestParam("file[]") MultipartFile file[], @PathVariable Long id)
	{
		equipmentService.uploadFile(file[0], id);
		return "Enviado!";
    }
	
    @RequestMapping(value = "/downloadFile/{id}", method = RequestMethod.GET, produces = APPLICATION_PDF)
    public @ResponseBody void downloadFile(HttpServletResponse response, @PathVariable Long id) throws IOException 
    {
        equipmentService.downloadFile(response, id);
    }
	
	
	
	
	
	
	
    
	
	
	
	
}
