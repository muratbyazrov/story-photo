CREATE TABLE IF NOT EXISTS genders (
     gender_id SMALLSERIAL NOT NULL UNIQUE
    ,gender_value TEXT NOT NULL UNIQUE
);

INSERT INTO genders (
    gender_value
) VALUES
     ('male')
    ,('female')
    ,('transFemale')
    ,('transMale');


CREATE TABLE IF NOT EXISTS orientations (
     orientation_id SMALLSERIAL NOT NULL UNIQUE
    ,orientations_value TEXT NOT NULL UNIQUE
);

INSERT INTO orientations (
    orientations_value
) VALUES
     ('heterosexual')
    ,('gay')
    ,('lesbian')
    ,('asexual')
    ,('bisexual');

CREATE TABLE IF NOT EXISTS goals (
     goal_id SMALLSERIAL NOT NULL UNIQUE
    ,goal_value TEXT NOT NULL UNIQUE
);

INSERT INTO goals (
    goal_value
) VALUES
     ('Serious relationship')
    ,('Go on dates')
    ,('Flirting')
    ,('Sex');


CREATE TABLE IF NOT EXISTS accounts (
     account_id BIGSERIAL NOT NULL UNIQUE
    ,first_name TEXT NOT NULL
    ,birthday DATE NOT NULL
    ,photo_url TEXT NOT NULL
    ,login TEXT NOT NULL
    ,password TEXT NOT NULL
    ,job TEXT
    ,education TEXT
    ,goal_id SMALLINT REFERENCES goals (goal_id)
    ,about TEXT
    ,height SMALLINT
    ,weight SMALLINT
    ,country TEXT
    ,city TEXT
    ,gender_id SMALLINT REFERENCES genders (gender_id)
    ,orientation_id SMALLINT REFERENCES orientations (orientation_id)
    ,create_datetime TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    ,modify_datetime TIMESTAMP WITH TIME ZONE
);

INSERT INTO accounts (
     first_name
    ,birthday
    ,photo_url
    ,login
    ,password
    ,gender_id
) VALUES
     ('Мурат', NOW(), 'https://sun6-23.userapi.com/impf/c851132/v851132473/24aa8/prMVnnBDwaY.jpg?size=2560x1706&quality=96&sign=6fadaa800a9d5879559552374f736354&type=album', 'Murat', 'Byazrov', 1)
    ,('Евгения', NOW(), 'https://sun9-47.userapi.com/impg/ZeZTD1MYyA5wDnlhPwsLXSXtusFopTNCgn0iiw/h12G_XW83Iw.jpg?size=1973x2160&quality=95&sign=1906f6f4d51f6c28a5511dc86a517c0f&type=album', 'Jane', 'Jane', 2);


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
