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
    ,en_US TEXT NOT NULL UNIQUE
    ,ru_RU TEXT NOT NULL UNIQUE
);

INSERT INTO interest_categories (
     en_US, ru_RU
) VALUES
     ('Selected', 'Выбранные')
    ,('Eat','Еда')
    ,('Music', 'Музыка')
    ,('Movies', 'Фильмы')
    ,('Fashion', 'Мода')
    ,('Sport', 'Спорт')
    ,('Cars', 'Автомобили')
    ,('Technologies', 'Технологии')
    ,('Education', 'Образование');


CREATE TABLE IF NOT EXISTS interests (
     interest_id SMALLSERIAL NOT NULL UNIQUE
    ,en_US TEXT NOT NULL UNIQUE
    ,ru_RU TEXT NOT NULL UNIQUE
    ,interest_category_id SMALLINT REFERENCES interest_categories (interest_category_id)
);

INSERT INTO interests (
     en_US, ru_RU, interest_category_id
) VALUES
     ('Health food', 'Здоровое питание', 2)
    ,('Vegetarianism', 'Вегетарианство', 2)
    ,('Rock', 'Рок', 3)
    ,('Metal', 'Метал', 3)
    ,('Marvel', 'Марвел', 4)
    ,('DC', 'DC', 4)
    ,('Zara', 'Zara', 5)
    ,('Skill', ' Кожа', 5)
    ,('BikeSport', 'Велоспорт', 6)
    ,('Boxing', 'Бокс', 6)
    ,('TopGear', 'ТопГир', 7)
    ,('Mercedes', 'Мерседес', 7)
    ,('Silicon Valley', 'Кремниевая долина', 8)
    ,('JavaScript', 'JavaScript', 8)
    ,('School', 'Школа', 9)
    ,('English', 'Английский язык', 9);


CREATE TABLE IF NOT EXISTS accounts_interests (
     interest_id SMALLINT NOT NULL REFERENCES interests(interest_id)
    ,account_id BIGINT NOT NULL REFERENCES accounts(account_id)
    ,UNIQUE (interest_id, account_id)
);
