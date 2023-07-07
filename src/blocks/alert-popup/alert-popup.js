const ESC_KEYCODE = 27;

class AlertPopup {
    constructor(title, text) {
        this._popupElement = document.querySelector(".alert-popup");
        this._handleEscUp = this._handleEscUp.bind(this);

        this._type = {
            _error: {
                className: `--content-error`,
                icon: `🞪`,
            },
            _success: {
                className: `--content-success`,
                icon: `✓`,
            },
            _info: {
                className: `--content-info`,
                icon: `?`,
            },
        };

        this._text = text;
        this._title = title;

        this._popupElement.querySelector(".alert-popup__title").textContent = this._title;
        this._popupElement.querySelector(".alert-popup__text").textContent = this._text;

        this.setEventListeners();
    }

    _handleEscUp(evt) {
        evt.preventDefault();

        if (evt.which === ESC_KEYCODE) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupElement.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("alert-popup") || evt.target.classList.contains("alert-popup__button")) {
                this.close();
            }
        });
    }

    open() {
        this._popupElement.classList.add("--opened");
        document.addEventListener("keyup", this._handleEscUp);
    }

    showSuccess(){
        this._popupElement.classList.add(this._type._success.className);
        this._popupElement.querySelector(".alert-popup__icon span").textContent = this._type._success.icon;

        this.open();
    }

    showError(){
        this._popupElement.classList.add(this._type._error.className);
        this._popupElement.querySelector(".alert-popup__icon span").textContent = this._type._error.icon;

        this.open();
    }

    close() {
        this._popupElement.classList.remove("--opened");
        document.removeEventListener("keyup", this._handleEscUp);
        this._popupElement.outerHTML = this._popupElement.outerHTML;
    }
}

export default AlertPopup;