import css from "../components/Styles/SearchResult.module.css";
import { useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar/TitleBar";
import { useSelector } from "react-redux";
import ProductShopList from "../components/UI/ProductShopList";
function SearchResult() {
  const { query } = useParams();
  const data = useSelector((state) => state.product.products);
  const matchItems = data.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  return (
    <div className={css.container}>
      <TitleBar title={`Search for "${query}"`} />
      <main className={css.body}>
        {matchItems.length > 0 ? (
          <div className={css.result__container}>
            <ProductShopList productList={matchItems} />
          </div>
        ) : (
          <div className={css.notfindresult}>
            Can't find match result for '{query}'
          </div>
        )}
      </main>
    </div>
  );
}

export default SearchResult;
