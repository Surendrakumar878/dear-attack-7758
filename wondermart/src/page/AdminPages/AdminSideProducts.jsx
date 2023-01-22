import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../AdminStyles/AdminSideProducts.css";
import { getProducts } from "../../Redux/adminReducer/action";
import { AdminSideNavbar } from "../AdminPages/AdminSideNavbar";
import { AdminSideSingleProductPage } from "../AdminPages/AdminSideSingleProductPage";
import loading from "../AdminAssets/giphy.gif";
import error from "../AdminAssets/serverError.gif";

const AdminSideProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.adminReducer.products);
  const Loading = useSelector((store) => store.adminReducer.isLoading);
  const IsError = useSelector((store) => store.adminReducer.isError);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [products.length, dispatch]);

  return (
    <div>
      <div>
        <div className="product_heading">Wondermart Product Items</div>
      </div>
      <div className="adminProductContainer">
        <div>
          <AdminSideNavbar />
        </div>
        {Loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: "10",
              width: "100%",
            }}
          >
            <div>
              <img
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                src={loading}
                alt="loading..."
              />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "100%",
                  color: "blue",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "150%",
                }}
              >
                Please wait products are loading...
              </h1>
            </div>
          </div>
        ) : (
          <></>
        )}

        {IsError ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              zIndex: "10",
              width: "100%",
            }}
          >
            <div>
              <img
                style={{
                  width: "50%",
                  margin: "auto",
                }}
                src={error}
                alt="Server error...!"
              />
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "100%",
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "150%",
                }}
              >
                Server Error! 503
              </h1>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="admin_products_grid_container">
          {products.length ? (
            products.map((item) => {
              return (
                <AdminSideSingleProductPage
                  key={item._id}
                  id={item._id}
                  brand={item.brand}
                  name={item.name}
                  weight={item.weight}
                  price={item.price}
                  ImgSrc={item.ImgSrc}
                  category={item.category}
                  offers={item.offers}
                  mrp={item.mrp}
                  packet={item.packet}
                  sasta={item.sasta}
                  isavailable={item.isavailable}
                  quantity={item.quantity}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export { AdminSideProducts };
