export default function ProductInformation() {
  const INFO = [
    {
      name: "Products sold",
      quantity: "2,300",
    },
    {
      name: "Providers",
      quantity: "1,500",
    },
    {
      name: "Variant",
      quantity: "3",
    },
  ];

  return (
    <section className="section-product-container">
      {INFO.map((product) => {
        return (
          <div className="section-product" key={product.name}>
            <p className="section-product-name">{product.name}</p>
            <p className="section-product-quantity">{product.quantity}</p>
          </div>
        );
      })}
    </section>
  );
}
