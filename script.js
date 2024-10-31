// Функция для расчета числа жизненного пути
function calculateNumerology() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) return alert("Введите дату рождения!");

    const digits = birthdate.replace(/-/g, '').split('').map(Number);
    let lifePathNumber = digits.reduce((sum, num) => sum + num, 0);

    // Приведение числа к однозначному (1-9)
    while (lifePathNumber > 9) {
        lifePathNumber = lifePathNumber.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
    }

    const resultText = interpretLifePathNumber(lifePathNumber);
    document.getElementById("result").innerText = `Ваше число жизненного пути: ${lifePathNumber}\n${resultText}`;
}

// Интерпретации для чисел жизненного пути
function interpretLifePathNumber(number) {
    const interpretations = {
        1: "Число 1: Вы лидер, целеустремленный и уверенный в себе.",
        2: "Число 2: Вы дипломат и стремитесь к гармонии в жизни.",
        3: "Число 3: Вы творческая личность и легко находите общий язык с людьми.",
        4: "Число 4: Вы практичны и надёжны, цените стабильность.",
        5: "Число 5: Вы любите свободу и жаждете приключений.",
        6: "Число 6: Заботливый человек, который ценит семью и друзей.",
        7: "Число 7: Вы мудры и любите исследовать тайны жизни.",
        8: "Число 8: Стремитесь к успеху и материальному благополучию.",
        9: "Число 9: Сострадательный и щедрый человек, склонный к духовности."
    };
    return interpretations[number] || "Интерпретация не найдена.";
}
