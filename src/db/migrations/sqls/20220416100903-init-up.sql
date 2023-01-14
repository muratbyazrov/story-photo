CREATE TYPE genders AS ENUM ('male', 'female', 'transFemale', 'transMale');
CREATE TYPE orientations AS ENUM ('heterosexual', 'gay', 'lesbian', 'bisexual', 'asexual');
CREATE TYPE goals AS ENUM ('relationship', 'dates', 'flirt', 'sex');

CREATE TABLE IF NOT EXISTS accounts (
     account_id BIGSERIAL NOT NULL UNIQUE
    ,first_name TEXT NOT NULL
    ,birthday DATE NOT NULL
    ,login TEXT NOT NULL
    ,password TEXT NOT NULL
    ,job TEXT
    ,education TEXT
    ,about TEXT
    ,country TEXT
    ,city TEXT
    ,gender genders
    ,orientation orientations
    ,goal goals
    ,create_datetime TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    ,modify_datetime TIMESTAMP WITH TIME ZONE
);

INSERT INTO accounts (
     first_name
    ,birthday
    ,login
    ,password
    ,orientation
) VALUES
     ('Мурат', NOW(), 'Murat', 'Byazrov', 'heterosexual')
    ,('Евгения', NOW(), 'Jane', 'Jane', 'heterosexual');


CREATE TABLE IF NOT EXISTS interest_categories (
     interest_category_id SMALLSERIAL NOT NULL UNIQUE
    ,interest_category_value TEXT NOT NULL UNIQUE
);

INSERT INTO interest_categories (
     interest_category_value
) VALUES
     ('Еда')
    ,('Музыка')
    ,('Фильмы')
    ,('Мода')
    ,('Спорт')
    ,('Автомобили')
    ,('Технологии')
    ,('Образование');


CREATE TABLE IF NOT EXISTS interests (
     interest_id SMALLSERIAL NOT NULL UNIQUE
    ,interest_value TEXT NOT NULL UNIQUE
    ,interest_category_id SMALLINT REFERENCES interest_categories (interest_category_id)
);

INSERT INTO interests AS ic (
     interest_category_id
    ,interest_value
) VALUES
     (1, 'Здоровое питание')
    ,(1, 'ВкуссВилл')
    ,(2, 'Рок')
    ,(2, 'Метал')
    ,(3, 'Марвел')
    ,(3, 'DC')
    ,(4, 'Zara')
    ,(4, 'Ногти')
    ,(5, 'Велоспорт')
    ,(5, 'Лыжи')
    ,(6, 'ТопГир')
    ,(6, 'Мерседес')
    ,(7, 'Курсы программирвания')
    ,(7, 'JavaScript')
    ,(8, 'Школа')
    ,(8, 'Английский язык');


CREATE TABLE IF NOT EXISTS accounts_interests (
     interest_id SMALLINT NOT NULL REFERENCES interests(interest_id)
    ,account_id BIGINT NOT NULL REFERENCES accounts(account_id)
);
