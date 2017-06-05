package br.com.projeto.conf;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.format.datetime.DateFormatterRegistrar;
import org.springframework.format.support.DefaultFormattingConversionService;
import org.springframework.format.support.FormattingConversionService;
import org.springframework.http.MediaType;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.accept.ContentNegotiationManager;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.mvc.SimpleControllerHandlerAdapter;
import org.springframework.web.servlet.view.ContentNegotiatingViewResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import br.com.projeto.controllers.HomeController;
import br.com.projeto.infra.FileSaver;
import br.com.projeto.repository.IUserRepository;
import br.com.projeto.restful.UserRestController;

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

        config.addAllowedMethod("DELETE");

        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
	
	 }

        		//.allowedOrigins("http://localhost:3000");
    
	
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
	

	/*@Bean
	public InternalResourceViewResolver internalResourceViewResolver() 
	{
		InternalResourceViewResolver resolver = new InternalResourceViewResolver();
		resolver.setPrefix("/WEB-INF/views/");
		resolver.setSuffix(".jsp");

		return resolver;
	}
	@Bean
	public FormattingConversionService mvcConversionService() 
	{
		DefaultFormattingConversionService conversionService = new DefaultFormattingConversionService();
		DateFormatterRegistrar registrar = new DateFormatterRegistrar();
		registrar.setFormatter(new DateFormatter("dd/MM/yyyy"));
		registrar.registerFormatters(conversionService);

		return conversionService;
	}

	@Bean
	public MultipartResolver multipartResolver() 
	{
		return new StandardServletMultipartResolver();
	}*/

	/*@Bean
	public ViewResolver contentNegotiationViewResolver(ContentNegotiationManager manager) 
	{

		List<ViewResolver> viewResolvers = new ArrayList<>();
		viewResolvers.add(internalResourceViewResolver());
		viewResolvers.add(new JsonViewResolver());

		ContentNegotiatingViewResolver resolver = new ContentNegotiatingViewResolver();
		resolver.setViewResolvers(viewResolvers);
		resolver.setContentNegotiationManager(manager);

		return resolver;
	}*/
	
	/*@Override
	public void configureContentNegotiation(final  ContentNegotiationConfigurer configurer) {
		configurer.parameterName("mediaType")
        .defaultContentType(MediaType.APPLICATION_JSON)
        .mediaType("xml", MediaType.APPLICATION_XML)
        .mediaType("json", MediaType.APPLICATION_JSON);
	}*/

}
