import generator from "generator";

describe("generator", function() {
    it("is a sample", () => {
        let result = generator();
        result.next();
        result.next();
        result.next();
    });
})
