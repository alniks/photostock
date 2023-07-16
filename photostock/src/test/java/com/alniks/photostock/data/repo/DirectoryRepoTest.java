package com.alniks.photostock.data.repo;

import com.alniks.photostock.data.model.Country;
import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.JdbcTest;
import org.springframework.test.context.ContextConfiguration;

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

    @Test
    public void shouldReturnCouontries() {
        List<Country> countries = repo.getCountries();
        assertFalse(countries.isEmpty());
    }
    
}
