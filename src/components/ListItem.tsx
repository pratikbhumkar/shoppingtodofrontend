import React from 'react'

function ListItem() {
    return (
        <div style={{height: 50, alignContent: 'center', justifyContent:'center', justifyItems:'center', width: '30rem'}}>
          <span style={{ fontSize: 20, paddingRight:'5rem' }}>#Veggie</span>
          <input
            name="isGoing"
            about="Note1"
            type="checkbox"
            height={22} />
          <span style={{ fontSize: 20, paddingLeft: 20, marginRight: '3rem' }}>Note1</span>
          <button className={'button'}>Assign</button>
        </div>
    )
}
export default ListItem
