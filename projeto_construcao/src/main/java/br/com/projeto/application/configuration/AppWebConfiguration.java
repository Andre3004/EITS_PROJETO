package br.com.projeto.application.configuration;

import java.util.List;

import javax.servlet.MultipartConfigElement;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 
 * @author André
 * @category Configuration
 *
 */
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = {"br.com.projeto"})
public class AppWebConfiguration extends WebMvcConfigurerAdapter
{
	/*-------------------------------------------------------------------
	 * 		 					 OVERRIDES
	 *-------------------------------------------------------------------*/
	/**
	 * 
	 */
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer)
	{
		configurer.enable();
	}
	/**
	 * 
	 */
	@Override
	public void addCorsMappings(CorsRegistry registry)
	{
		registry.addMapping("/**");
	}
	
	/**
	 * 
	 */
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters)
	{
		converters.add(jacksonConverter());
	}
	
	/**
	 * 
	 */
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) 
	{
        registry
          .addResourceHandler("/static/**")
          .addResourceLocations("/WEB-INF/views/dist/"); 
    }
	
	/*-------------------------------------------------------------------
	 * 		 						BEANS
	 *-------------------------------------------------------------------*/	
	/**
	 * 
	 * @return
	 */
	@Bean
	public CorsFilter corsFilter() 
	{
	
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);

        config.addAllowedOrigin("*");

        config.addAllowedHeader("*");

        config.addAllowedMethod("OPTIONS");

        config.addAllowedMethod("GET");

        config.addAllowedMethod("POST");

        config.addAllowedMethod("PUT");
        
        config.addAllowedMethod("PATCH");

        config.addAllowedMethod("DELETE");

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
	
	 }
	
	/**
	 * 
	 * @return
	 */
	@Bean
	public SimpleControllerHandlerAdapter simpleControllerHandlerAdapter()
	{
		return new SimpleControllerHandlerAdapter();
	}
	
	/**
	 * 
	 * @return
	 */
	@Bean
	public ObjectMapper objectMapper()
	{
		return Jackson2ObjectMapperBuilder.json()
				.serializationInclusion(Include.NON_NULL)
				.build();
	}
	
	/**
	 * 
	 * @return
	 */
	@Bean
	public MappingJackson2HttpMessageConverter jacksonConverter()
	{
		return new MappingJackson2HttpMessageConverter(objectMapper());
	}
	

	/**
	 * 
	 * @return
	 */
	@Bean
	public InternalResourceViewResolver internalResourceViewResolver() 
	{
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".html");

		return resolver;
	}
	
	
	
	//---------
	// DWR
	//---------
	/**
	 * Process all spring beans with @RemoteProxy
	 * @return
	 */
//	@Bean
//	public DwrAnnotationPostProcessor dwrAnnotationPostProcessor( ApplicationContext applicationContext )
//	{
//		final BeanDefinitionRegistry beanDefinitionRegistry = (BeanDefinitionRegistry) applicationContext.getAutowireCapableBeanFactory();
//		final ClassPathBeanDefinitionScanner scanner = new DwrClassPathBeanDefinitionScanner(beanDefinitionRegistry);
//        scanner.addIncludeFilter(new AnnotationTypeFilter(DataTransferObject.class));
//        scanner.scan("br.com.projeto.domain.entity.**");
//        
//		return new DwrAnnotationPostProcessor();
//	}
//
//	/**
//	 * 
//	 * @return
//	 */
//	@Bean
//	public ServletRegistrationBean dwrSpringServletRegistration( DWRSettings dwrSettings )
//	{
//		final ServletRegistrationBean registration = new ServletRegistrationBean( new DwrSpringServlet(), "/broker/*" );
//		registration.addInitParameter( "debug", String.valueOf(dwrSettings.isDebug()) );
//		registration.addInitParameter( "scriptCompressed", String.valueOf(dwrSettings.isScriptCompressed()) );
//		registration.setName( "dwrSpringServlet" );
//		return registration;
//	}

	/**
	 * 
	 * @return
	 */
	@Bean
    public MultipartConfigElement multipartConfigElement() 
	{
        return new MultipartConfigElement("");
    }	
	
	/**
	 * 
	 * @return
	 */
	@Bean
	public MultipartResolver multipartResolver()
	{
		return new StandardServletMultipartResolver();
	}
		

}
