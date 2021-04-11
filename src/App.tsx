import './App.css';
import React from 'react';
import { connect } from "react-redux";
import { ListItem } from "./components/ListItem";
import { CategorySearchBox } from "./components/CategorySearchBox";
import { getCategories, filterItemsByCategory, getCompletedItems } from "./homeScreen/homescreenservice";
import loading from "./assets/loading.gif";

function App({ ToDo }: any) {
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  if (ToDo?.length > 0) {
    let categoryList = getCategories(ToDo)
    let itemList = filterItemsByCategory(ToDo, selectedCategory)
    let completedItems = getCompletedItems(ToDo)
    return (
      <div className="App">
        <div className="App-header">
          <CategorySearchBox categories={categoryList} setSelectedCategory={setSelectedCategory} />
          {
            itemList?.map && itemList?.map((item: any, index: any) =>
              <ListItem category={item?.category} item={item?.name} key={index} />)
          }
          <hr style={{ width: '80%', marginTop: 30 }} />
          {
            completedItems?.map && completedItems?.map((item: any, index: any) =>
              <s><ListItem category={item?.category} item={item?.name} key={index} /></s>)
          }
          <button className={'button'}>Add New</button>
        </div>
      </div>
    );
  } else {
    return <div className="App">
      <div className="App-header">
        <img src={loading} alt="Loading..." />
        <h1>Please wait while the todos are loaded.</h1>
      </div>
    </div>
  }
}

const mapStateToProps = (state: any) => {
  return { ToDo: state.ToDo };
};

export default connect(mapStateToProps)(App);