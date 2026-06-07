describe("Gilded Rose", function() {

  beforeEach(function() {
      items = [];
  });

  it("should decrease quality by 1 each day for normal item", function() {
      items = [new Item("Normal Item", 10, 20)];
      update_quality();
      expect(items[0].quality).toEqual(19); // -1 
  });

  it("should decrease quality twice as fast after sell_in is negative", function() {
    items = [new Item("Normal Item", -1, 20)];
    update_quality();
    expect(items[0].quality).toEqual(18); // verkaufsdatum ist vorbei
});

it("should never have negative quality", function() {
  items = [new Item("Normal Item", 10, 0)];
  update_quality();
  expect(items[0].quality).toEqual(0); // 0 bleibt 0
});

it("should never have quality more than 50", function() {
  items = [new Item("Aged Brie", 10, 50)];
  update_quality();
  expect(items[0].quality).toEqual(50);
});


});
