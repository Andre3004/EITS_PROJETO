package br.com.projeto.application.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.projeto.domain.service.AuthenticationService;

/**
 * 
 * @author André
 *
 */
@EnableWebSecurity
@ComponentScan(basePackageClasses = AuthenticationService.class)
@EnableGlobalMethodSecurity(securedEnabled=true, prePostEnabled=true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter
{
	
	/*-------------------------------------------------------------------
	 *				 		     ATTRIBUTES
	 *-------------------------------------------------------------------*/
	//Service
	/**
	 * 
	 */
	@Autowired
	private AuthenticationService authentication;
	
	/*-------------------------------------------------------------------
	 * 		 					 OVERRIDES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Override
	protected void configure(HttpSecurity http) throws Exception 
	{
		http.csrf().disable()
		.authorizeRequests()
			.antMatchers("/**").permitAll();
		
		/*http.csrf().disable().sessionManagement().maximumSessions(1).expiredUrl("/login");
		http.headers().frameOptions().disable();

		http
		.authorizeRequests()
    	.anyRequest()
		.authenticated()
		.and()
		.formLogin()
		.usernameParameter( "email" )
		.passwordParameter( "password" )
		.loginPage( "/login" )
		.loginProcessingUrl( "/authenticate" )
		.permitAll()
		.and()
		.logout()
		.logoutUrl( "/logout" );
		
		http
            .authorizeRequests()
            .antMatchers( "/api/**" )
                .authenticated()
                .and()
                    .httpBasic();*/
		}


	//---------
	// Authentication Manager
	//---------
	/**
	 * 
	 * 
	 */
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception 
	{
		auth.userDetailsService(authentication).passwordEncoder(new BCryptPasswordEncoder());
	}
	

}
