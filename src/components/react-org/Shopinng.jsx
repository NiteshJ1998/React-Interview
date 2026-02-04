const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

export default function Shopinng() {
  const listItem = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "green" }}
    >
      {product.title}
    </li>
  ));
  return <div>{listItem}</div>;
}
