const BASE_PRICE = 8;
const GROUP_DISCOUNTS: Record<string, number> = { 1: 0, 2: 0.05, 3: 0.1, 4: 0.2, 5: 0.25 };
type Item = string | number;

export const Calculate = (basket: Item[]) => {
  if (isEmpty(basket)) return 0;

  const organizedBasket = groupUnique(basket);
  const checkoutReady = optimizeDiscount(organizedBasket);

  return checkoutReady.reduce((totalPrice: number, group: Item[]) => totalPrice + getGroupPrice(group), 0);
};

const groupUnique = (items: Item[]) => {
  const groups: Item[][] = [];

  for (const item of items) {
    const groupMissingCurrentItem = groups.find((group) => !group.includes(item));

    if (groupMissingCurrentItem) {
      groupMissingCurrentItem.push(item);
    } else {
      groups.push([item]);
    }
  }

  return groups;
};

const optimizeDiscount = (groups: Item[][]) => {
  // converts 5-3 to 4-4 groups for better discount
  for (const group of groups) {
    if (group.length === 5) {
      const triple = groups.find((x) => x.length === 3);

      if (triple && isArray(group)) {
        triple.push(group.pop()!);
      }
    }
  }

  return groups;
};

const getGroupPrice = (group: Item[]) => group.length * BASE_PRICE * (1 - GROUP_DISCOUNTS[group.length]);

const isEmpty = (basket: Item[]) => !basket.length;

const isArray = (value: any) => Object.prototype.toString.call(value) === '[object Array]';
