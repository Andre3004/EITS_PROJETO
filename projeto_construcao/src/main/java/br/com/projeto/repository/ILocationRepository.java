package br.com.projeto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Location;

@Repository
@Transactional
public interface ILocationRepository extends JpaRepository<Location, Long> 
{
	@Query("select u from Location u where u.location.id = :id")
	public List<Location> findAllSubLocations(@Param("id") Long id);
	
}
