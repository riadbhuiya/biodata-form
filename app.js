console.log('alive')

const input = document.getElementsByTagName('input');

const validate = function() {
    const array = Array.from(input);

    array.forEach((el) => {
        console.log(el.name)
        if (el.value === '') {
            window.alert(`${el.name} cannot be empty`)
        }
    })
}

console.log(input)