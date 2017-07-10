package br.com.projeto.domain.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import br.com.projeto.domain.entity.User;

/**
 * 
 * @author André
 * @category Repository
 * 
 */
@Repository
@Transactional
public interface IUserRepository extends JpaRepository<User, Long>
{

	/**
	 * 
	 * @param email
	 * @return
	 */
	@Query("select user from User user where user.email = :email and active = true")
	public User findByEmailAndActive(@Param("email") String email);
	
	/**
	 * 
	 * @param email
	 * @return
	 */
	@Query("select user from User user where "
			+ "(user.email = :email) "
			+ "and (user.id <> :id)")
	public User findByEmail(@Param("email") String email, @Param("id") Long id);
	
	/**
	 * 
	 * @param filter
	 * @param pageable
	 * @return
	 */
	@Query("select user from User user where LOWER(name) like %:pFilter% or LOWER(email) like %:pFilter% or LOWER(lastName) like %:pFilter%")
	public Page<User> listUsersByFilters(@Param("pFilter") String filter, Pageable pageable);
	

}
