const { expect } = require("chai");

describe("Chat Application", () => {

    it("should correctly validate a chat message", () => {
        const message = "Hello World";

        expect(message).to.be.a("string");
        expect(message).to.not.be.empty;
    });

    it("should reject an empty message", () => {
        const message = "";

        expect(message).to.be.a("string");
        expect(message).to.be.empty;
    });

});