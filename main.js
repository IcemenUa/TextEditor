// контейнер з текстом
let text = document.querySelector('.containerText');

//стилізація тексту

// жирний шрифт
let boldButton = document.querySelector('#boldButton');
let bold = false;
boldButton.onclick = () => {
    if (bold === false) {
        text.style.fontWeight = 'bold';
        bold = true
    } else if (bold === true) {
        text.style.fontWeight = '';
        bold = false
    }
}
// курсив
let italicButton = document.querySelector('#italicButton');
let italic = false;
italicButton.onclick = () => {
    if (italic === false) {
        text.style.fontStyle = 'italic';
        italic = true
    } else if (italic === true) {
        text.style.fontStyle = '';
        italic = false
    }
}

// закреслений 
let strikeButton = document.querySelector('#strikeButton')
let strike = false;
strikeButton.onclick = () => {
    if (strike === false) {
        text.style.textDecoration += 'line-through';
        strike = true
    } else if (strike === true) {
        text.style.textDecoration = '';
        strike = false
    }
}


// підкреслення
let underlineButton = document.querySelector('#underlineButton')
let underline = false;
underlineButton.onclick = () => {
    if (underline === false) {
        text.style.textDecoration += 'Underline';
        underline = true
    } else if (underline === true) {
        text.style.textDecoration = '';
        underline = false
    }
}

// вирівнювання тексту
// вліво
let AlignLeft = document.querySelector('#left');
AlignLeft.onclick = () => text.style.textAlign = 'left';

// центр
let AlignCenter = document.querySelector('#center');
AlignCenter.onclick = () => text.style.textAlign = 'center';

// вправо
let Alignright = document.querySelector('#right');
Alignright.onclick = () => text.style.textAlign = 'right';

// вибір шрифту
let fontFamily = document.querySelector('#fontFamily')
fontFamily.onclick = (click) => text.style.fontFamily = click.target.id;

// вибір розміру тексту
let fontSize = document.querySelector('#fontSize')
fontSize.onclick = (click) => text.style.fontSize = click.target.textContent;

// зміна кольору тексту

let textColor = document.querySelector('#colorTable');

textColor.onclick = (click) => {

    text.style.color = click.target.id;

}

// фон

// фоновий колір

let bgColor = document.querySelector('#bgColorTable');

bgColor.onclick = (click) => {

    text.style.backgroundImage = 'none';
    text.style.backgroundColor = click.target.id;

};

let colorsButton = document.querySelector('#colors');
colorsButton.onclick = () => {

    bgImage.style.display = 'none';
    bgColor.style.display = 'flex';
    bgFile.style.display = 'none';
    document.querySelector('#bgColorImage').innerHTML = '';

};



// фонове зображення

let bgImage = document.querySelector('#bgColorImage');

let imagesButton = document.querySelector('#images');

imagesButton.onclick = () => {
    bgImages();
    bgImage.style.display = 'flex';
    bgColor.style.display = 'none';
    bgFile.style.display = 'none';

};

// вибір зображення

let imageArr = ['url(https://images.unsplash.com/photo-1605035458698-7af6fb52057f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80)',

    'url(https://images.unsplash.com/photo-1604951752791-bb724dd11721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',

    'url(https://images.unsplash.com/photo-1571610783729-f571bd44c646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',

    'url(https://images.unsplash.com/photo-1571610783729-f571bd44c646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)',

    'url(https://images.unsplash.com/photo-1604596036466-4a223443c46b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80)',

    ' url(https://images.unsplash.com/photo-1604588690422-5c0c81615524?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',

    'url(https://images.unsplash.com/photo-1588319899594-2e3d560bfb37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1081&q=80)',

    ' url(https://images.unsplash.com/photo-1604521243587-401c06e1b6a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',

    'url(https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)'
];


let bgImages = () => {
    for (let i = 0; i < imageArr.length; i++) {
        document.querySelector('#bgColorImage').innerHTML += `<div class="color" id="${i}"></div>`;
        document.querySelector('#bgColorImage').children[i].style.backgroundImage = imageArr[i];
    };
};

bgImage.onclick = (click) => {

    text.style.backgroundImage = imageArr[click.target.id];

};


// завантаження власного зображення

let bgFile = document.querySelector('#imageFiles');

let filesButton = document.querySelector('#files');

filesButton.onclick = () => {
    bgImage.style.display = 'none';
    bgColor.style.display = 'none';
    bgFile.style.display = 'flex';
    document.querySelector('#bgColorImage').innerHTML = '';
};



// завантаження файлу

let uploadFile = document.querySelector('#inputGroupFile04');

uploadFile.addEventListener('change', event => {

    let urlImage = URL.createObjectURL(event.target.files[0]);
    imageArr.push(`url(${urlImage})`);

    text.style.backgroundImage = `url(${urlImage})`;
});




// Авторизація
let login = false;

// виклик вікна авторизації
loginButton = document.querySelector('#login');

loginButton.onclick = () => {
    if (login === false) {
        document.querySelector('#loginModal').style.display = 'flex';
    } else {
        alert('вихід виконано');
        editorButton.onclick = () => {

            alert('потрібно авторизуватися')
            login = false
        }
    }
};

// поля форми авторизації
loginInput = document.querySelector('#loginInput');

passwordInput = document.querySelector('#password');

// регулярки авторизації
let loginCheck = /^[a-zA-z]{4,16}$/
let passwordCheck = /^\w{6,12}$/

// функція перевірки полів авторизації
function validLogin(type, value) {
    if (type === 1) {
        if (loginCheck.test(value) === true) {
            document.querySelector('#validateText').children[0].textContent = '';
        } else if (value === '') {
            document.querySelector('#validateText').children[0].textContent = 'Поле Login не може бути пустим';
        } else {
            document.querySelector('#validateText').children[0].textContent = 'логін невірний';
        }
    } else if (type === 2) {
        if (passwordCheck.test(value) === true) {
            document.querySelector('#validateText').children[1].textContent = '';
        } else if (value === '') {
            document.querySelector('#validateText').children[1].textContent = 'Поле Password не може бути пустим';
        };
    };
};

// перевірка поля login
loginInput.addEventListener('change', () => {
    validLogin(1, loginInput.value);
});
// перевірка поля password
passwordInput.addEventListener('change', () => {
    validLogin(2, password.value);
});

// скасування авторизації
canselButton = document.querySelector('#loginCansel');

canselButton.onclick = () => {
    document.querySelector('#loginModal').style.display = 'none';
    document.querySelector('#password').value = ''
    document.querySelector('#loginInput').value = ''
    document.querySelector('#validateText').children[0].textContent = ''
    document.querySelector('#validateText').children[1].textContent = ''
}

// підтвердження авторизації

// кнопка підтвердження
аcceptButton = document.querySelector('#loginAccept')

// кнопка зміни
let editorButton = document.querySelector('#editor')

// textArea
let textArea = document.querySelector('#textArea');

// при підтвердженні авторизації
аcceptButton.onclick = () => {
    if (loginInput.value === 'admin' && password.value === 'admin') {
        document.querySelector('#loginModal').style.display = 'none';
        document.querySelector('#password').value = '';
        document.querySelector('#loginInput').value = '';
        document.querySelector('#validateText').children[0].textContent = '';
        document.querySelector('#validateText').children[1].textContent = '';
        login = true;

        // кнопка редагування
        editorButton.onclick = () => {
            // приховування хедера
            document.querySelector("#header").style.display = 'none';
            // вивід хедера 2
            document.querySelector("#header_2").style.display = 'flex';
            // приховування текстового поля
            text.style.display = 'none';
            // вивід text area
            textArea.style.display = 'block';
            textArea.value = text.innerHTML;

        }
    } else {
        document.querySelector('#validateText').children[0].textContent = '';
        document.querySelector('#validateText').children[1].textContent = '';
        document.querySelector('#validateText').children[0].textContent = 'Перевірте правильність заповнення полів';
    }

}


// клавіша збереження змін
let changesSave = document.querySelector('#changesSave')

changesSave.onclick = () => {
    document.querySelector("#header").style.display = 'flex';
    document.querySelector("#header_2").style.display = 'none';
    textArea.style.display = 'none';
    text.style.display = 'block';
    text.innerHTML = textArea.value;
}

// створення таблиці

// виклик модального вікна таблиць
let tableBtn = document.querySelector('#createTable');

tableBtn.onclick = () => document.querySelector('#tableModal').style.display = 'flex';

// поля форми створення таблиці
let tableTr = document.querySelector('#countTr');
let tableTd = document.querySelector('#countTd');
let tdWidth = document.querySelector('#widthTd');
let tdHeight = document.querySelector('#heightTd');
let tableBorderWidth = document.querySelector('#widthBorder');
let tableBorderStyle = document.querySelector('#borderStyle');
let tableBorderColor = document.querySelector('#borderColor');

// регулярний вирах для валідації форми

let tableParamValidator = /^[0-9]{1,}$/;

// валідація форми створення таблиці
function tableValidator(parametr) {
    if (tableParamValidator.test(parametr.value) === true) {
        parametr.style.border = 'green solid 2px';


    } else {
        parametr.style.border = 'red solid 2px';

    };
};

tableTr.addEventListener('change', () => {
    tableValidator(tableTr);
});
tableTd.addEventListener('change', () => {
    tableValidator(tableTd);
});
tdWidth.addEventListener('change', () => {
    tableValidator(tdWidth);
});
tdHeight.addEventListener('change', () => {
    tableValidator(tdHeight);
});
tableBorderWidth.addEventListener('change', () => {
    tableValidator(tableBorderWidth);
});

// конструктор таблиць
let tableD = '';
let tableR = '';

function tableConstructor(tr, tdHeight, td, tdWidth, borderStyle, borderColor, borderWidth) {


    for (let i = 0; i < td; i++) {
        tableD += `<td  style="height:${tdHeight}px;width:${tdWidth}px;border: ${borderColor} ${borderStyle} ${borderWidth}px;"></td>`
    }
    for (let i = 0; i < tr; i++) {
        tableR += `<tr>${tableD}</tr>`
    }
    textArea.value += `<table>${tableR}</table>`
    tableD = '';
    tableR = '';
}

// підтвердження створення таблиці
let createTableBtn = document.querySelector('#tableCreate');

createTableBtn.onclick = () => {
    if (tableParamValidator.test(tableTr.value) === true && tableParamValidator.test(tableTd.value) === true && tableParamValidator.test(tdWidth.value) === true && tableParamValidator.test(tdHeight.value) === true && tableParamValidator.test(tableBorderWidth.value) === true && tableBorderStyle.valid != '' && tableBorderColor != '') {
        tableConstructor(tableTr.value, tdHeight.value, tableTd.value, tdWidth.value, tableBorderStyle.value, tableBorderColor.value, tableBorderWidth.value);
        document.forms[2].reset();
        document.querySelector('#tableModal').style.display = 'none';

    } else {
        alert('перевірте поля');
    }


}

// скасування створення таблиці
let resetTableBtn = document.querySelector('#tableReset');

resetTableBtn.onclick = () => {

    document.querySelector('#tableModal').style.display = 'none';
    document.forms[2].reset();

};

// створення нумерованого списку
let olModal = document.querySelector('#olListModal');

let olListBtn = document.querySelector('#CreateListNum');

olListBtn.onclick = () => olModal.style.display = 'flex';

let olValidator = /^[0-9]{1,}$/;
let olFormValidator = (parametr) => {
    if (olValidator.test(parametr.value) === true) {
        parametr.style.border = 'solid 2px green';
    } else {
        parametr.style.border = 'solid 2px red';
    }
}
let olStyle = document.querySelector('#olStyle');

let olCount = document.querySelector('#olLiCount');
olCount.addEventListener('change', () => {
    olFormValidator(olCount);
});

let olReset = document.querySelector('#olReset');

olReset.onclick = () => {
    olModal.style.display = 'none';
    document.forms[0].reset();
};


let olCreate = document.querySelector('#olCreate');

olCreate.onclick = () => {
    if (olValidator.test(olCount.value) === true && olStyle.value != '') {
        let liBufer = '';
        for (let i = 0; i < olCount.value; i++) {
            liBufer += `<li>Item${i+1}</li>`;
        }
        textArea.value += `<ol type="${olStyle.value}">${liBufer}</ol>`
        olModal.style.display = 'none';
    } else {
        alert('перевірте поля');
    }
}

// створення маркованого списку
let ulModal = document.querySelector('#ulListModal');

let ulListBtn = document.querySelector('#createListMark');

ulListBtn.onclick = () => ulModal.style.display = 'flex';

let ulValidator = /^[0-9]{1,}$/;
let ulFormValidator = (parametr) => {
    if (ulValidator.test(parametr.value) === true) {
        parametr.style.border = 'solid 2px green';
    } else {
        parametr.style.border = 'solid 2px red';
    }
}
let ulStyle = document.querySelector('#ulStyle');

let ulCount = document.querySelector('#ulLiCount');
ulCount.addEventListener('change', () => {
    olFormValidator(ulCount);
});

let ulReset = document.querySelector('#ulReset');

ulReset.onclick = () => {
    ulModal.style.display = 'none';
    document.forms[1].reset();
};


let ulCreate = document.querySelector('#ulCreate');

ulCreate.onclick = () => {
    if (ulValidator.test(ulCount.value) === true && ulStyle.value != '') {
        let liBufer = '';
        for (let i = 0; i < ulCount.value; i++) {
            liBufer += `<li>Item${i+1}</li>`;
        }
        textArea.value += `<ul type="${ulStyle.value}">${liBufer}</ul>`;
        ulModal.style.display = 'none';
    } else {
        alert('перевірте поля');
    }
}


