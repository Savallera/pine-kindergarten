const ESC_KEYCODE = 27;

class AlertPopup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
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

    open(title, text) {
        // this._popupElement.classList.add(this._type._error.className);
        // this._popupElement.querySelector(".alert-popup__icon span").textContent = this._type._error.icon;
        this._popupElement.querySelector(".alert-popup__title").textContent = title;
        this._popupElement.querySelector(".alert-popup__text").textContent = text;

        this._popupElement.classList.add("--opened");
        document.addEventListener("keyup", this._handleEscUp);
    }

    close() {
        this._popupElement.classList.remove("--opened");
        document.removeEventListener("keyup", this._handleEscUp);
    }
}

const AlertPopupFedback = new AlertPopup(".alert-popup");
AlertPopupFedback.setEventListeners();

AlertPopupFedback.open("Ошибка", "Описание ошибки");
