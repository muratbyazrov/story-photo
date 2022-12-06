CREATE TYPE genders AS ENUM (
    'male',
    'female',
    'transFemale',
    'transMale'
);

CREATE TYPE orientations AS ENUM (
    'heterosexual',
    'gay',
    'lesbian',
    'asexual',
    'demisexual'
);

CREATE TABLE IF NOT EXISTS accounts (
     account_id BIGINT NOT NULL UNIQUE
    ,first_name TEXT NOT NULL
    ,last_name TEXT
    ,birthday DATE NOT NULL
    ,photo_url TEXT NOT NULL
    ,login TEXT NOT NULL
    ,password TEXT NOT NULL
    ,token TEXT
    ,job TEXT
    ,education TEXT
    ,goal TEXT
    ,about TEXT
    ,height SMALLINT
    ,weight SMALLINT
    ,country TEXT
    ,city TEXT
    ,gender genders
    ,orientation orientations
    ,create_datetime TIMESTAMP WITH TIME ZONE DEFAULT now()
    ,modify_datetime TIMESTAMP WITH TIME ZONE
);

CREATE TABLE IF NOT EXISTS interest_categories (
     interest_category_id SMALLSERIAL NOT NULL UNIQUE
    ,interest_category_value_ru TEXT NOT NULL UNIQUE
    ,interest_category_value_en TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS interests (
     interest_id SMALLSERIAL NOT NULL UNIQUE
    ,interest_value_ru TEXT NOT NULL UNIQUE
    ,interest_value_en TEXT NOT NULL UNIQUE
    ,interest_category_id SMALLINT REFERENCES interest_categories (interest_category_id)
);

CREATE TABLE IF NOT EXISTS accounts_interests (
     interest_id SMALLINT NOT NULL REFERENCES interests(interest_id)
    ,account_id BIGINT NOT NULL REFERENCES accounts(account_id)
);

INSERT INTO interest_categories (
     interest_category_value_ru
    ,interest_category_value_en
) VALUES
     ('Еда', 'Eat')
    ,('Музыка', 'Music')
    ,('Фильмы', 'Movies')
    ,('Мода', 'Casual')
    ,('Спорт', 'Sport')
    ,('Автомобили', 'Cars')
    ,('Технологии', 'Technologies')
    ,('Образование', 'Education');


INSERT INTO interests AS ic (
     interest_category_id
    ,interest_value_ru
    ,interest_value_en
) VALUES
     (1, 'Здоровое питание', 'healthy eating')
    ,(1, 'ВкуссВилл', 'Vkusvill')
    ,(2, 'Рок', 'Rock')
    ,(2, 'Метал', 'Metal')
    ,(3, 'Марвел', 'Marvel')
    ,(3, 'DC', 'DC')
    ,(4, 'Zara', 'Zara')
    ,(4, 'Ногти', 'Nails')
    ,(5, 'Велоспорт', 'Cycling')
    ,(5, 'Лыжи', 'Skis')
    ,(6, 'ТопГир', 'TopGir')
    ,(6, 'Мерседес', 'Mercedes')
    ,(7, 'Курсы программирвания', 'Programming courses')
    ,(7, 'JavaScript', 'JavaScript')
    ,(8, 'Школа', 'School')
    ,(8, 'Английский язык', 'English');
