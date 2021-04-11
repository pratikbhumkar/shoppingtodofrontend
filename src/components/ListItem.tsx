import React from 'react';
import { AssignCategoryDialogue } from "./AssignCategoryDialogue";

export function ListItem({category, item, categories}:any) {
  const [openDialogue, setOpenDialogue] = React.useState(false);
  console.log('categoryList2=',categories)
    return (
        <div style={{height: 50, alignContent: 'center', justifyContent:'center', justifyItems:'center'}}>
          {openDialogue && <AssignCategoryDialogue open={openDialogue} setOpen={setOpenDialogue} categories={categories} category={category}/>}
          <span style={{ fontSize: 20, paddingRight:'5rem' }}>{'#'+category}</span>
          <input
            name="isChecked"
            about="Note1"
            type="checkbox"
            height={22} />
          <span style={{ fontSize: 20, paddingLeft: 20, marginRight: '3rem' }}>{item}</span>
          <button className={'button'} onClick={()=>setOpenDialogue(true)}>Assign</button>
        </div>
    )
}
