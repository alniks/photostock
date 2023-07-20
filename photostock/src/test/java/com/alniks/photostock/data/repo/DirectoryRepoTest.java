package com.alniks.photostock.data.repo;

import com.alniks.photostock.data.model.Country;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ContextConfiguration;

import static org.junit.jupiter.api.Assertions.*;

/**
 *
 * @author alniks
 */
@JdbcTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@ContextConfiguration(classes = {DirectoryRepo.class})
public class DirectoryRepoTest {
    
    @Autowired
    private DirectoryRepo repo;
    @Autowired
    private JdbcTemplate template;
    
    @BeforeEach
    public void setup() {
        template.execute("delete from countries");
    }
    
    @AfterEach
    public void cleanup() {
        template.execute("delete from countries");
    }

    @Test
    public void shouldHandleCountries() {
        List<Country> countries = repo.getCountries();
        assertTrue(countries.isEmpty());
        Country country = new Country("Belarus");
        repo.saveCountry(country);
        assertNotNull(country.getId());
        countries = repo.getCountries();
        assertEquals(1, countries.size());
        country.setName("Беларусь");
        repo.saveCountry(country);
        countries = repo.getCountries();
        assertEquals(1, countries.size());
        assertEquals("Беларусь", countries.get(0).getName());
    }
    
}
