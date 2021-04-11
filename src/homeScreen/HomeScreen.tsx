import '../App.css';
import React from 'react';
import { connect } from "react-redux";
import { ListItem } from "../components/ListItem";
import { CategorySearchBox } from "../components/CategorySearchBox";
import { getCategories, filterItemsByCategory, getCompletedItems } from "./homescreenservice";
import loading from "../assets/loading.gif";
import "./HomeScreen.css";
import { Dialogue } from "../components/Dialogue";
function HomeScreen({ ToDo }: any) {
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [open, setOpen] = React.useState(false);

  if (ToDo?.length > 0) {
    let categoryList = getCategories(ToDo)
    let itemList = filterItemsByCategory(ToDo, selectedCategory)
    let completedItems = getCompletedItems(ToDo)
    return (
      <div className="App">
        <Dialogue open={open} setOpen={setOpen} />
        <div className="App-header">
          <CategorySearchBox categories={categoryList} setSelectedCategory={setSelectedCategory} />
          {
            itemList?.map && itemList?.map((item: any, index: any) =>
              <ListItem category={item?.category} item={item?.name} key={index} />)
          }
          <hr className={'break'} />
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
        <h3>Please wait while the todos are loaded.</h3>
      </div>
    </div>
  }
}

const mapStateToProps = (state: any) => {
  return { ToDo: state.ToDo };
};

export default connect(mapStateToProps)(HomeScreen);