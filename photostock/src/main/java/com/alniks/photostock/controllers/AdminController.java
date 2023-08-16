package com.alniks.photostock.controllers;

import com.alniks.photostock.data.model.Country;
import com.alniks.photostock.data.repo.DirectoryRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alniks
 */
@RestController
@RequestMapping("/admin")
public class AdminController {
    
    @Autowired
    private DirectoryRepo directoryRepo;
    
    @RequestMapping("/countries")
    public List<Country> countries() {
        return directoryRepo.getCountries();
    }
    
    @RequestMapping(value = "/countries", method = RequestMethod.POST)
    public Country saveCountry(@RequestBody Country country) {
        return directoryRepo.saveCountry(country);
    }
    
}
