package br.com.projeto.infra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

import br.com.projeto.model.Usuario;

@Component
public class Mailer {
	
	@Autowired
	private JavaMailSender mailSender;
	
	public void send(Usuario usuario){
		SimpleMailMessage mensagem = new SimpleMailMessage();
		mensagem.setFrom("andreferreira.junior235@gmail.com");
		mensagem.setTo(usuario.getEmail());
		mensagem.setSubject("Cadastro realizado com sucesso!!");
		String email = "Obrigado por relizar o cadatro\n "+ 
					   "Usuario: " + usuario.getEmail() +"\n"+ 
					   "Senha: " + usuario.getSenha()+ "\n" +
					   "----------------------------------------";
		mensagem.setText(email);
		
		mailSender.send(mensagem);
		
	}

}
