import { getItems } from "<..>/services/itemService";
//checkpoint

export async function getItemData(id) {
  const items = await getItems();
  const product = items.find((item) => convertToPath(item.title) === id);
  return {
    id: id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
