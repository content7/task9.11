
window.onload = function()
{
    const initPerson = personGenerator.getPerson(); 
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;


};

    const generateButton = document.getElementById('generateButton');
    generateButton.addEventListener('click', function(){
    const initPerson = personGenerator.getPerson(); 
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('birthDateOutput').innerText = initPerson.birthDate;
    });


    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', function(){
        document.getElementById('firstNameOutput').innerText = '';
        document.getElementById('surnameOutput').innerText = '';
        document.getElementById('patronymicOutput').innerText = '';
        document.getElementById('genderOutput').innerText = '';
        document.getElementById('professionOutput').innerText = '';
        document.getElementById('birthDateOutput').innerText = '';
    });









