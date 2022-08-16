import React, { useEffect, useState } from "react";

const App = () => {
  const [item, setItem] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    qty: "",
    price: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      product.id === "" ||
      product.name === "" ||
      product.qty === "" ||
      product.price === ""
    ) {
      setFormErrors(validate(product));
    } else {
      item.push(product);
      setItem([...item]);
      setProduct({
        id: "",
        name: "",
        qty: "",
        price: "",
      });
      setFormErrors({});
    }
  };
  const handleDelete = (param) => {
    const deleteItem = item.filter((item, index) => item.id !== param.id);
    setItem([...deleteItem]);
    console.log(param);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Product name is require!";
    }
    if (!values.id) {
      errors.id = "Product id is require!";
    }
    if (!values.qty) {
      errors.qty = "Product qty is require!";
    }
    if (!values.price) {
      errors.price = "Product price is require!";
    }
    return errors;
  };
  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log("prodcut", product);
  //   }
  //   console.log(formErrors);
  // }, [formErrors]);
  return (
    <div className="grid grid-cols-2 mt-56">
      <div className="flex justify-center items-center">
        <div className="bg-white w-2/5 p-6 rounded">
          <h1 className="text-center font-bold">ADD PRODUCT</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <label className="block">ID</label>
            <input
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              name="id"
              value={product.id}
              placeholder="input product id"
            />
            <p className="text-red-900">{formErrors.id}</p>
            <br />
            <label className="block">Name</label>
            <input
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              name="name"
              value={product.name}
              placeholder="input product name"
            />
            <p className="text-red-900">{formErrors.name}</p>
            <br />
            <label className="block">QTY</label>
            <input
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              name="qty"
              value={product.qty}
              placeholder="input product qty"
            />
            <p className="text-red-900">{formErrors.qty}</p>
            <br />
            <label className="block">price</label>
            <input
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              onChange={handleChange}
              name="price"
              value={product.price}
              placeholder="input product price"
            />
            <p className="text-red-900">{formErrors.price}</p>
            <br />
            <button className="bg-gray-900 text-white font-semibold uppercase px-11 py-2 rounded-xl justify-center">
              submit
            </button>
          </form>
        </div>
      </div>
      <div className="px-4">
        <div className="grid grid-cols-3 gap-4">
          {item.map((res, index) => {
            return (
              <div className="bg-white p-5 " key={index}>
                <button
                  className="float-right bg-red-500 px-2 text-white rounded-full"
                  onClick={() => handleDelete(res)}
                >
                  x
                </button>
                <div className="mt-6 text-center">
                  <div className="flex space-x-4 items-center">
                    <p>Product ID :</p>
                    <h1 className="text-xl">{res.id}</h1>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <p>Product Name :</p>
                    <h1 className="text-xl">{res.name}</h1>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <p>Product Price :</p>
                    <h1 className="text-xl">${res.price}</h1>
                  </div>
                  <div className="flex space-x-4 items-center">
                    <p>Product Quantity :</p>
                    <h1 className="text-xl">{res.qty}</h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
