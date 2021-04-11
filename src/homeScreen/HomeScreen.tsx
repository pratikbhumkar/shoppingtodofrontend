import '../App.css';
import React from 'react';
import { connect } from "react-redux";
import { ListItem } from "../components/ListItem";
import { LoadingScreen } from "../components/LoadingScreen";
import { CategorySearchBox } from "../components/CategorySearchBox";
import { getCategories, filterItemsByCategory, getCompletedItems } from "./homescreenservice";
import "./HomeScreen.css";
import { Dialogue } from "../components/Dialogue";

function HomeScreen({ ToDo }: any) {
  const [selectedCategory, setSelectedCategory] = React.useState(null)
  const [open, setOpen] = React.useState(false);

  if (ToDo?.length > 0) {
    const categoryList = getCategories(ToDo)
    let itemList = filterItemsByCategory(ToDo, selectedCategory)
    let completedItems = getCompletedItems(ToDo)
    return (
      <div className="App">
        {open && <Dialogue open={open} setOpen={setOpen} />}
        <div className="App-header">
          <CategorySearchBox categories={categoryList} setSelectedCategory={setSelectedCategory} />
          {
            itemList?.map && itemList?.map((item: any, index: any) => {
              return <ListItem category={item?.category} item={item?.name} key={index} categories={categoryList} />
            })
          }
          <hr className={'break'} />
          {
            completedItems?.map && completedItems?.map((item: any, index: any) =>
              <s><ListItem category={item?.category} item={item?.name} key={index} categories={categoryList} /></s>)
          }
          <button className={'button'} onClick={() => setOpen(true)}>Add New</button>
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />
  }
}

const mapStateToProps = (state: any) => {
  return { ToDo: state.ToDo };
};

export default connect(mapStateToProps)(HomeScreen);