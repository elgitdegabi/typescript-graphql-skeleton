import * as constantValues from "../../../src/config/constants";

describe ("constants unit test", () => {
    it("should validate configured constants", () => {
        expect(constantValues.serverPort).toEqual(3000);
    });
});
