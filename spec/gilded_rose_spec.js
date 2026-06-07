describe("Gilded Rose", function() {

  beforeEach(function() {
      items = [];
  });

  it("should decrease quality by 1 each day for normal item", function() {
      items = [new Item("Normal Item", 10, 20)];
      update_quality();
      expect(items[0].quality).toEqual(19);
  });

  it("should decrease quality twice as fast after sell_in is negative", function() {
    items = [new Item("Normal Item", -1, 20)];
    update_quality();
    expect(items[0].quality).toEqual(18);
});

});
