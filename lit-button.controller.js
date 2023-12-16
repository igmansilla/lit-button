export class LitButtonController {
    constructor(host) {
        this.host = host;
        host.addController(this)
    }

    _handleClick() {
        if (!this.disabled) {
            const customEvent = new CustomEvent('clickButton', {
                bubbles: true,
                composed: true,
                detail: this
            });
            this.dispatchEvent(customEvent);
        }
    }

    _handleClose() {
        if (!this.disabled) {
            const customEvent = new CustomEvent('deleteButton', {
                bubbles: true,
                composed: true,
                detail: this
            });
            this.dispatchEvent(customEvent);
        }
    }

}