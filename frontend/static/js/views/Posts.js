import AbstractViews from "./AbstractViews.js";

export default class AbstractViews {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
            <h1>Posts</h1>
            <p>You are viewing the posts!</p>
        `;
    }
}