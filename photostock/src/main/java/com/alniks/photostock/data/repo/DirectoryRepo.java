package com.alniks.photostock.data.repo;

import com.alniks.photostock.data.model.Country;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import static com.alniks.photostock.data.model.Country.COUNTRY_TBL;

/**
 *
 * @author alniks
 */
@Repository
public class DirectoryRepo {
    
    private final static String ID_COLUMN = "id";

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public List<Country> getCountries() {
        return jdbcTemplate.query("select * from countries", BeanPropertyRowMapper.newInstance(Country.class));
    }
    
    public Country saveCountry(Country country) {
        if (country.getId() == null) {
            long id = new SimpleJdbcInsert(jdbcTemplate)
                    .withTableName(COUNTRY_TBL)
                    .usingGeneratedKeyColumns(ID_COLUMN)
                    .executeAndReturnKey(Map.of("name", country.getName()))
                    .longValue();
            country.setId(id);
        } else {
            jdbcTemplate.update("update countries set name = ? where id = ?", country.getName(), country.getId());
        }
        return country;
    }
    
}
