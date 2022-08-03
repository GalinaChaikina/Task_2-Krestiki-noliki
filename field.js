class Field {
    constructor(element) {
        this.element = element;
        this.value = undefined;
        this.init();
    }

    init() {
        this.element = document.createElement('button');
        this.element.classList.add('field');
        this.changeValue();
    }

    changeValue(choice) {
        this.element.value = this.value;
        this.value = choice;
    }
}

/// заполнение массива ячеек
const arrayField = [];
for (let i = 0; i < 3; i += 1) { 
    arrayField[i] = [];
    for (let j = 0; j < 3; j += 1) {
        arrayField[i][j] = new Field(); 
    }
}

export {arrayField}