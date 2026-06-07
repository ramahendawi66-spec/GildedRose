function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    if (item.name == 'Sulfuras, Hand of Ragnaros') {
      continue;
    }

    item.sell_in = item.sell_in - 1;

    if (item.name == 'Aged Brie') {
      item.quality = item.sell_in < 0 ? item.quality + 2 : item.quality + 1;

    } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      if (item.sell_in < 0) {
        item.quality = 0;
      } else if (item.sell_in < 5) {
        item.quality = item.quality + 3;
      } else if (item.sell_in < 10) {
        item.quality = item.quality + 2;
      } else {
        item.quality = item.quality + 1;
      }

    } else if (item.name == 'Conjured Mana Cake') {
      item.quality = item.sell_in < 0 ? item.quality - 4 : item.quality - 2;

    } else {
      item.quality = item.sell_in < 0 ? item.quality - 2 : item.quality - 1;
    }

    if (item.quality > 50) item.quality = 50;
    if (item.quality < 0) item.quality = 0;
  }
}