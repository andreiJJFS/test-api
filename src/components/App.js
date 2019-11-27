import React from 'react'
import { getAreas, getZones, getCategory } from '../services/apiCalls'
import AreaComponent from './Area'
import DataComp from './DataComp'

class App extends React.Component {
	
	state = {
		areaData: [],
		AreaId: "",
		zoneData: [],
		ZoneId: "",
		categoryData: []
	}
	
	onClick = async () => {
		const resp = await getAreas()
		this.setState({ areaData: resp })
	}

	getZoneData = async (area) => {
		const resp = await getZones(area)
		this.setState({ zoneData: resp })
	}

	getCategoryData = async (zone) => {
		const resp = await getCategory(this.state.AreaId, zone)
		this.setState({ categoryData: resp })
	}

	setID = (name, id) => {
		this.setState({ [name]: id })
	}

	render(){
		return (
			<div className="ui container comments">
				<button onClick={this.onClick}>Start</button> 
				
				{this.state.areaData.length  
					? <AreaComponent data={this.state.areaData} setID={this.setID} getZoneData={this.getZoneData}/>
					:	null}
				{this.state.zoneData.length 
					? <DataComp name="Zone" currentLoc={this.state.AreaId} data={this.state.zoneData} setID={this.setID} getCategoryData={this.getCategoryData} />
				  : null}
				{this.state.categoryData.length 
					? <DataComp name="Category" currentLoc={this.state.ZoneId} data={this.state.categoryData} setID={this.setID} getCategoryData={this.getCategoryData} />
					: null}
			</div>
		)
	}
}

export default App

