package br.com.projeto.conf;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import br.com.projeto.service.AuthenticationService;

@EnableWebSecurity
@ComponentScan(basePackageClasses = AuthenticationService.class)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
	
	@Autowired
	private AuthenticationService authentication;
	
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
//		http.csrf().disable()
//		.authorizeRequests()
//			.antMatchers("/**").permitAll();
		
//		http
//		.authorizeRequests()
//			.anyRequest().authenticated()
//			.and()
//		.formLogin()
//			.permitAll()
//			.and()
//		.csrf().disable()
//		.sessionManagement();
		
		/**
		*
		*/
		http.csrf().disable();
		http.headers().frameOptions().disable();

		http
		.authorizeRequests()
		.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		.usernameParameter( "email" )
		.passwordParameter( "senha" )
		.loginPage( "/autenticacao" )
		.loginProcessingUrl( "/authenticate" )
//		.successHandler( authenticationSuccessHandler )
		.permitAll()
		.and()
		.logout()
		.logoutUrl( "/logout" );
		}


	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception 
	{
		auth.userDetailsService(authentication).passwordEncoder(new BCryptPasswordEncoder());
	}
	

}
