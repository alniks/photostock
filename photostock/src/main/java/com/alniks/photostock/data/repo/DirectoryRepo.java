package com.alniks.photostock.data.repo;

import com.alniks.photostock.data.model.Country;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

/**
 *
 * @author alniks
 */
@Repository
public class DirectoryRepo {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public List<Country> getCountries() {
        return jdbcTemplate.query("select * from countries", BeanPropertyRowMapper.newInstance(Country.class));
    }
    
}
