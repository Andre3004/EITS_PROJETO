package br.com.projeto.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Location;
import br.com.projeto.repository.LocationRepository;

@Service
@Transactional
public class LocationService 
{
	
	@Autowired
	private LocationRepository locationRepository;
	
	@Transactional
	public void insert(Location location)
	{
		locationRepository.save(location);
	}

}
