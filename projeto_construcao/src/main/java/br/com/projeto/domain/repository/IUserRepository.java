package br.com.projeto.domain.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.User;

@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Long>
{

	@Query("select u from User u where u.email = :email and active = true")
	public User findByEmailAndActive(@Param("email") String email);
	
	@Query("select u from User u where u.email = :email")
	public User findByEmail(@Param("email") String email);
	
	@Query("select u from User u where u.name like %:pFilter% or u.email like %:pFilter%")
	public Page<User> listUsersByFilters(@Param("pFilter") String filter, Pageable pageable);

}
