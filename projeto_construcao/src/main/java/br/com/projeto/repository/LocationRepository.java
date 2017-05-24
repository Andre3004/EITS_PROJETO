package br.com.projeto.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.model.Location;

@Repository
@Transactional
public interface LocationRepository extends JpaRepository<Location, Long> 
{

}
