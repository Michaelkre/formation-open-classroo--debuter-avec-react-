import { plantList } from '../datas/plantList'

function ShoppingList() {
	return <ul>
		{plantList.map(plante=> {
			<li>
				{plante.name}
			</li>
		})}
	</ul>
}

export default ShoppingList
