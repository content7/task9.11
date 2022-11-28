const personGenerator = {
    surnameJson: `{  
        "count": 20,
        "list": {
            "id_1": "Соколов",
            "id_2": "Кузнецов",
            "id_3": "Васнецов",
            "id_4": "Удальцов",
            "id_5": "Золотарёв",
            "id_6": "Голубев",
            "id_7": "Кулаков",
            "id_8": "Пугачёв",
            "id_9": "Фролов",
            "id_10": "Иванов",
            "id_11": "Петров",
            "id_12": "Жирков",
            "id_13": "Куклачёв",
            "id_14": "Пушкин",
            "id_15": "Пресняков",
            "id_16": "Зимин",
            "id_17": "Алтафьев",
            "id_18": "Правдин",
            "id_19": "Зубарев",
            "id_20": "Лоскутов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Вадим",
            "id_6": "Ефим",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Борис",
            "id_11": "Ибрагим"
        }
    }`,
    


    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Фрезеровщик",
            "id_2": "Монтажник",
            "id_3": "Пилот",
            "id_4": "Военнослужащий",
            "id_5": "Пожарник",
            "id_6": "Прораб",
            "id_7": "Каскадёр",
            "id_8": "Альпинист",
            "id_9": "Космонавт",
            "id_10": "Шахтёр"
        }
    }`,
  

    firstNameFemaleJson: `{
        "count": 11,
        "list": {     
            "id_1": "Анна",
            "id_2": "Елена",
            "id_3": "Валерия",
            "id_4": "Ангелина",
            "id_5": "Дарья",
            "id_6": "Мария",
            "id_7": "Жанна",
            "id_8": "Елизавета",
            "id_9": "Юлия",
            "id_10": "Анастасия",
            "id_11": "Татьяна"
        }
    }`,

 

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Проводница",
            "id_2": "Учительница",
            "id_3": "Няня",
            "id_4": "Воспитательница",
            "id_5": "Медсестра",
            "id_6": "Бухгалтер",
            "id_7": "Официантка",
            "id_8": "Начальница отдела",
            "id_9": "Тату-мастер",
            "id_10": "Хостес"
        }
    }`,
    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Функции случайной генерации данных.

    randomFirstName: function() {
        if (this.person.gender == this.GENDER_MALE){
        return this.randomValue(this.firstNameMaleJson);
        } else {
           return this.randomValue(this.firstNameFemaleJson);
        };
    },


    randomSurname: function() {
        if (this.person.gender == this.GENDER_MALE) {
        return this.randomValue(this.surnameJson);
        } else {
            var femaleSurname = this.randomValue(this.surnameJson);
            return (femaleSurname + 'а');
        };

    },
    
    randomPatronymic: function () {
        if (this.person.gender == this.GENDER_MALE) {
            var malePatronymic = this.randomValue(this.firstNameMaleJson)
            return (malePatronymic + 'ович');
        } else {
            var femalePatronymic = this.randomValue(this.firstNameMaleJson)
            return (femalePatronymic + 'овна');
        }
    },


    // Другое решение
    // randomPatronymic: function() {                            
    //     if (this.person.gender == this.GENDER_MALE) {
    //         var patronymicMale = this.randomValue(this.firstNameMaleJson);
    //         if  (patronymicMale == "Александр") {
    //           return "Александрович"; 
    //         } else if (patronymicMale =="Максим") {
    //             return "Максимович";
    //         } else if (patronymicMale =="Иван") {
    //             return "Иванович";
    //         } else if (patronymicMale =="Артем") {
    //             return "Артемович";
    //         } else if (patronymicMale =="Дмитрий") {
    //             return "Дмитриевич";
    //         } else if (patronymicMale =="Никита") {
    //             return "Никитич";
    //         } else if (patronymicMale =="Михаил") {
    //             return "Михайлович";
    //         } else if (patronymicMale =="Даниил") {
    //             return "Даниилович";
    //         } else if (patronymicMale =="Егор") {
    //             return "Егорович";
    //         } else if (patronymicMale =="Андрей") {
    //             return "Андреевич";
    //         } else if (patronymicMale =="Ибрагим") {
    //             return "Ибрагимович";
    //     } else {
    //         return this.randomValue(this.firstNameMaleJson);
    //     }
    // },

    randomProfession: function() {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        };
    },

    randomGender: function() {
        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    generateRandomDate: function() {
        var monthsArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября' ,'Октября' ,'Ноября' ,'Декабря'];
        var randomYear = Math.floor(Math.random() * (2006 - 1960)) + 1960
        var randomMonth = Math.floor(Math.random() * monthsArray.length);
        var randomDay
            if (randomMonth == 0) {
                randomMonth = 'Января';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 1) {
                randomMonth = 'Февраля';
                randomDay = Math.floor(Math.random() * (28 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 2) {
                randomMonth = 'Марта';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 3) {
                randomMonth = 'Апреля';
                randomDay = Math.floor(Math.random() * (30 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 4) {
                randomMonth = 'Мая';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 5) {
                randomMonth = 'Июня';
                randomDay = Math.floor(Math.random() * (30 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 6) {
                randomMonth = 'Июля';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 7) {
                randomMonth = 'Августа';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 8) {
                randomMonth = 'Сентября';
                randomDay = Math.floor(Math.random() * (30 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 9) {
                randomMonth = 'Октября';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 10) {
                randomMonth = 'Ноября';
                randomDay = Math.floor(Math.random() * (30 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            } else if (randomMonth == 11) {
                randomMonth = 'Декабря';
                randomDay = Math.floor(Math.random() * (31 - 1)) + 1
                return (`${randomDay} ${randomMonth} ${randomYear} года рождения`);
            }
    }, 

    
   

    

   

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.profession = this.randomProfession();
        this.person.birthDate = this.generateRandomDate();
        return this.person;
    }
};



