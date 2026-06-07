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

it("should increase quality of Aged Brie by 1 each day", function() {
  items = [new Item("Aged Brie", 10, 20)];
  update_quality();
  expect(items[0].quality).toEqual(21); //steigt um 1 
});

it("should increase quality of Aged Brie by 2 after sell date", function() {
  items = [new Item("Aged Brie", -1, 20)];
  update_quality();
  expect(items[0].quality).toEqual(22);
});

it("should never change quality of Sulfuras", function() {
  items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
  update_quality();
  expect(items[0].quality).toEqual(80);
});

it("should never change sell_in of Sulfuras", function() {
  items = [new Item("Sulfuras, Hand of Ragnaros", 0, 80)];
  update_quality();
  expect(items[0].sell_in).toEqual(0);
});

it("should increase Backstage pass quality by 1 when sell_in > 10", function() {
  items = [new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)];
  update_quality();
  expect(items[0].quality).toEqual(21);
});

it("should increase Backstage pass quality by 2 when sell_in <= 10", function() {
  items = [new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)];
  update_quality();
  expect(items[0].quality).toEqual(22);
});

it("should increase Backstage pass quality by 3 when sell_in <= 5", function() {
  items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)];
  update_quality();
  expect(items[0].quality).toEqual(23);
});

it("should drop Backstage pass quality to 0 after concert", function() {
  items = [new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)];
  update_quality();
  expect(items[0].quality).toEqual(0);
});

});
