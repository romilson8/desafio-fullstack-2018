package com.cielo.desafiocielobackend.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.ResourceUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cielo.desafiocielobackend.model.Extrato;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.stream.Collectors;

@RestController
class ExtratoController {

    public ExtratoController() {
    }

    @RequestMapping(method=RequestMethod.GET, value="/extrato")
    public Extrato extrato() {
    	
    	ObjectMapper mapper = new ObjectMapper();
    	Extrato extrato = new Extrato();
		try {
			File file =new ClassPathResource(
				      "lancamento-conta-legado.json").getFile();
			extrato = mapper.readValue(file, Extrato.class);
		} catch (IOException e) {
			e.printStackTrace();
		}
        return extrato;
    }

}
