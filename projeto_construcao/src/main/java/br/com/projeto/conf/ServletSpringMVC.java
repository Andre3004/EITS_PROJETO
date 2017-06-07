package br.com.projeto.conf;

import javax.servlet.Filter;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

public class ServletSpringMVC extends AbstractAnnotationConfigDispatcherServletInitializer
{

	@Override
	protected Class<?>[] getRootConfigClasses() 
	{	
		return new Class<?>[] {MailConfig.class,JPAConfiguration.class,AppWebConfiguration.class, ServiceConfiguration.class, SecurityConfiguration.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() 
	{
		return new Class<?>[] {}; 
	}

	@Override
	protected String[] getServletMappings() 
	{
		
		return new String[] {"/"};
	}
	
	@Override
    protected Filter[] getServletFilters() 
	{
        CharacterEncodingFilter encodingFilter = new CharacterEncodingFilter();
        encodingFilter.setEncoding("UTF-8");
        return new Filter[] {encodingFilter};
	}
	
	@Override
	public void onStartup(ServletContext servletContext) throws ServletException
	{
		super.onStartup(servletContext);
		servletContext.addListener(RequestContextListener.class); 
		servletContext.setInitParameter("spring.profiles.active", "dev"); 
	}
	
}
