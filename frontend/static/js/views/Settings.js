import AbstractViews from "./AbstractViews.js";

export default class AbstractViews {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>Manage your privacy and configuration.</p>
        `;
    }
}