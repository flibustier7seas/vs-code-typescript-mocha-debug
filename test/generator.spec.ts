import generator from "generator";

describe("generator", function() {
    it("is a generator test", () => {
        let result = generator();
        result.next();
        result.next();
        result.next();
    });
})
