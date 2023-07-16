create table if not exists countries (
    id                    bigserial   not null constraint countries_pk primary key,
    name                  varchar(20) not null
);

create unique index if not exists country_name_uinque on countries (name);

insert into countries (name) values ('Беларусь');
