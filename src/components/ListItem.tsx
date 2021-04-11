export function ListItem(category:any, item:any) {
    return (
        <div style={{height: 50, alignContent: 'center', justifyContent:'center', justifyItems:'center'}}>
          <span style={{ fontSize: 20, paddingRight:'5rem' }}>{'#'+category.category}</span>
          <input
            name="isGoing"
            about="Note1"
            type="checkbox"
            height={22} />
          <span style={{ fontSize: 20, paddingLeft: 20, marginRight: '3rem' }}>{category.item}</span>
          <button className={'button'}>Assign</button>
        </div>
    )
}
