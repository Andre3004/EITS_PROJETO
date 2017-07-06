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
import org.springframework.http.ResponseEntity;
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
 * @category RestController
 * 
 */

@RestController
@RequestMapping("equipment")
@MultipartConfig(fileSizeThreshold = 20971520)
public class EquipmentRestController 
{
	/*-------------------------------------------------------------------
	 * 		 					ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	EquipmentService equipmentService;
	
	private static final String APPLICATION_PDF = "application/pdf";
	
	/*-------------------------------------------------------------------
	 * 		 					RESOURCES
	 *-------------------------------------------------------------------*/
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
	 * @param id
	 * @param filter
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = {"/ListNonAssociatedEquipmentByFilter/{page}/{size}/{property}/{order}/{id}/{filter}"}, method = RequestMethod.GET)
	public Page<Equipment> ListNonAssociatedEquipmentByFilter(@PathVariable Long id, @PathVariable int page, @PathVariable int size,
															  @PathVariable String property, @PathVariable String order, 
															  @PathVariable String filter)
	{
		return equipmentService.ListNonAssociatedEquipmentByFilter(page, size, property, order, id, filter);
	}
	@CrossOrigin
	@RequestMapping(value = {"/ListNonAssociatedEquipmentByFilter/{id}"}, method = RequestMethod.GET)
	public Page<Equipment> ListNonAssociatedEquipmentByFilter(@PathVariable Long id)
	{
		return equipmentService.ListNonAssociatedEquipment(id);
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

	/**
	 * 
	 * @param file
	 * @param id
	 * @return
	 */
	@CrossOrigin
	@RequestMapping(value = "/uploadFile/{id}", method = RequestMethod.POST)
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable Long id)
	{
		return equipmentService.uploadFile(file, id);
    }
	
	/**
	 * 
	 * @param response
	 * @param id
	 * @throws IOException
	 */
    @RequestMapping(value = "/downloadFile/{id}", method = RequestMethod.GET, produces = APPLICATION_PDF)
    public void downloadFile(HttpServletResponse response, @PathVariable Long id) throws IOException 
    {
        equipmentService.downloadFile(response, id);
    }
    
    /**
     * 
     * @param id
     * @return
     */
    @RequestMapping(value = "/listAllSubEquipments/{id}", method = RequestMethod.GET)
    public List<Equipment> listAllSubEquipments(@PathVariable Long id) 
    {
        return equipmentService.listAllSubEquipments(id);
    }
    
    @CrossOrigin
    @RequestMapping(value = "/disassociateEquipment/{id}", method = RequestMethod.PATCH)
    public void disassociateEquipment(@PathVariable Long id) 
    {
        equipmentService.disassociateEquipment(id);
    }

}
