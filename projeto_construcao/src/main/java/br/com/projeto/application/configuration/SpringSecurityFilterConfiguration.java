package br.com.projeto.application.configuration;

import java.util.EnumSet;

import javax.servlet.ServletContext;
import javax.servlet.SessionTrackingMode;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class SpringSecurityFilterConfiguration extends AbstractSecurityWebApplicationInitializer
{
	
	@Override
	protected void beforeSpringSecurityFilterChain(ServletContext servletContext) 
	{	
		servletContext.setSessionTrackingModes(EnumSet.of(SessionTrackingMode.COOKIE));
	}
}
