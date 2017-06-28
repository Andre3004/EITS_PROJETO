package br.com.projeto.application.configuration;

import java.io.IOException;
import java.util.List;

import org.directwebremoting.annotations.DataTransferObject;
import org.directwebremoting.spring.DwrAnnotationPostProcessor;
import org.directwebremoting.spring.DwrClassPathBeanDefinitionScanner;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.type.filter.AnnotationTypeFilter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
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
@EnableWebMvc
@Configuration
@ComponentScan(basePackages = {"br.com.projeto"})
public class AppWebConfiguration extends WebMvcConfigurerAdapter
{
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer)
	{
		configurer.enable();
	}
	
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
    
	@Override
	public void configureMessageConverters(List<HttpMessageConverter<?>> converters)
	{
		converters.add(jacksonConverter());
	}
	
	@Override
	public void addCorsMappings(CorsRegistry registry)
	{
		registry.addMapping("/**");
	}
	
	@Bean
	public SimpleControllerHandlerAdapter simpleControllerHandlerAdapter()
	{
		return new SimpleControllerHandlerAdapter();
	}
	
	@Bean
	public ObjectMapper objectMapper()
	{
		return Jackson2ObjectMapperBuilder.json()
				.serializationInclusion(Include.NON_NULL)
				.build();
	}
	
	@Bean
	public MappingJackson2HttpMessageConverter jacksonConverter()
	{
		return new MappingJackson2HttpMessageConverter(objectMapper());
	}
	

	@Bean
	public InternalResourceViewResolver internalResourceViewResolver() 
	{
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".html");

		return resolver;
	}
	
	@Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
          .addResourceHandler("/static/**")
          .addResourceLocations("/WEB-INF/views/dist/"); 
    }
	
	//---------
		// DWR
		//---------
		/**
		 * Process all spring beans with @RemoteProxy
		 * @return
		 */
		@Bean
		public DwrAnnotationPostProcessor dwrAnnotationPostProcessor( ApplicationContext applicationContext )
		{
			final BeanDefinitionRegistry beanDefinitionRegistry = (BeanDefinitionRegistry) applicationContext.getAutowireCapableBeanFactory();
			final ClassPathBeanDefinitionScanner scanner = new DwrClassPathBeanDefinitionScanner(beanDefinitionRegistry);
	        scanner.addIncludeFilter(new AnnotationTypeFilter(DataTransferObject.class));
	        scanner.scan("br.com.projeto.domain.entity.**");
	        
			return new DwrAnnotationPostProcessor();
		}
		
		/*@Bean(name="multipartResolver") 
	    public CommonsMultipartResolver getResolver() throws IOException{
	        CommonsMultipartResolver resolver = new CommonsMultipartResolver();
	         
	        //Set the maximum allowed size (in bytes) for each individual file.
	        resolver.setMaxUploadSizePerFile(5242880);//5MB
	         
	        //You may also set other available properties.
	         
	        return resolver;
	    }*/
		
		@Bean
		public MultipartResolver multipartResolver()
		{
			return new StandardServletMultipartResolver();
		}
		

}
