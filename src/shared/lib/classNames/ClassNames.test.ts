import { ClassNames } from "./ClassNames";

describe("ClassNames", () => {
    test("с одним главным классом", () => {
        expect(ClassNames("main-class")).toBe("main-class");
    });

    test("с дополнительными классами (additional)", () => {
        const expected = "main-class class1 class2";
        expect(ClassNames("main-class", {}, ["class1", "class2"])).toBe(expected);
    });

    test("с дополнительными классами, игнорируя undefined/falsy значения", () => {
        const expected = "main-class class1";
        expect(ClassNames("main-class", {}, ["class1", undefined, ""])).toBe(expected);
    });

    test("с модификаторами в положении true", () => {
        const expected = "main-class hovered selectable";
        expect(ClassNames("main-class", { hovered: true, selectable: true })).toBe(expected);
    });

    test("с модификаторами в положении false", () => {
        const expected = "main-class hovered";
        expect(ClassNames("main-class", { hovered: true, collapsed: false })).toBe(expected);
    });

    test("все параметры одновременно", () => {
        const expected = "main-class class1 class2 hovered active";
        expect(
            ClassNames(
                "main-class",
                { hovered: true, collapsed: false, active: true },
                ["class1", "class2"]
            )
        ).toBe(expected);
    });
});
