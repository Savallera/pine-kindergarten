const feedbackSignButton = document.querySelector(".feedback__description-button");
const form = document.forms.feedback;
const formField = form.phone;
const formTextarea = form.message;
const formError = form.querySelector(".feedback__span-text");

const showInputError = (element, errorMessage) => {
    element.classList.add("feedback__field_state_error");
    formError.classList.add("feedback__span-text_state_error");
    formError.textContent = errorMessage;
};
const hideInputError = (element) => {
    element.classList.remove("feedback__field_state_error");
    formError.classList.remove("feedback__span-text_state_error");
};
const isValid = (e) => {

    e.preventDefault();

    if (!formField.validity.valid)
        showInputError(formField, formField.validationMessage);
    else
        hideInputError(formField);
};
const feedbackSigned = () => {
    formField.focus();
    setCursorPosition(3, formField);
};

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
    }
}
function mask(e) {
    var matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_";
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : (i = matrix.indexOf("_"));
    setCursorPosition(i, this);
}

feedbackSignButton.addEventListener("click", feedbackSigned);
formField.addEventListener("input", mask, false);
form.addEventListener("submit", isValid);
