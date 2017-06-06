package br.com.projeto.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.projeto.service.AuthenticationService;

@EnableWebSecurity
@ComponentScan(basePackageClasses = AuthenticationService.class)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
	
	@Autowired
	private AuthenticationService autentication;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http.csrf().disable()
		.authorizeRequests()
			.antMatchers("/**").permitAll();
		
//		http
//		.authorizeRequests()
//			.anyRequest().authenticated()
//			.and()
//		.formLogin()
//			.permitAll()
//			.and()
//		.csrf().disable()
//		.sessionManagement();
	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception 
	{
		auth.userDetailsService(autentication).passwordEncoder(new BCryptPasswordEncoder());
	}
	

}
