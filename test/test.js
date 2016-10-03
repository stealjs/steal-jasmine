// TODO: At some point, Testee can be initialized programatically with the
// `rest` flags. When that is possible, update test case to move import to top.
let initCalled = false;
Testee.init = function () {initCalled = true;};

import jasmine from "steal-jasmine";

describe("Steal Jasmine", () => {
	describe("when using Testee", function () {
		it("Initializes Testee", () => {
			expect(initCalled).toBe(true);
		});
	});
});
