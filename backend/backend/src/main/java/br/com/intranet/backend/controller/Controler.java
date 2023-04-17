package br.com.intranet.backend.controller;

import br.com.intranet.backend.entity.Ramal;
import br.com.intranet.backend.repository.RamalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

public class Controler {
    @Autowired
    private RamalRepository ramalRepository;

    @GetMapping("/")
    public String listarRamais(Model model) {
        List<Ramal> ramais = ramalRepository.findAll();
        model.addAttribute("ramais", ramais);
        return "listarRamais";
    }
}
